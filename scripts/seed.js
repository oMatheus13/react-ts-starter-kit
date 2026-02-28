import "dotenv/config";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const rootDir = process.cwd();

async function loadJson(filePath) {
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

async function seedCaderno() {
  const filePath = path.join(rootDir, "data", "caderno", "caderno_v1.json");
  const payload = await loadJson(filePath);

  if (!payload.caderno) {
    console.log("No caderno data found.");
    return;
  }

  const { data: cadernoRows, error: cadernoError } = await supabase
    .from("cadernos")
    .upsert(payload.caderno, { onConflict: "ano,versao" })
    .select();

  if (cadernoError) {
    throw cadernoError;
  }

  const cadernoId = cadernoRows?.[0]?.id;

  if (!cadernoId) {
    throw new Error("Failed to resolve caderno id.");
  }

  const classesPayload = (payload.classes ?? []).map((classe) => ({
    ...classe,
    caderno_id: cadernoId,
  }));

  const { data: classesRows, error: classesError } = await supabase
    .from("classes")
    .upsert(classesPayload, { onConflict: "caderno_id,nome" })
    .select();

  if (classesError) {
    throw classesError;
  }

  const classesMap = new Map(
    (classesRows ?? []).map((row) => [row.nome, row.id])
  );

  const secoesPayload = (payload.secoes ?? [])
    .map((secao) => ({
      ...secao,
      classe_id: classesMap.get(secao.classe_nome),
    }))
    .filter((secao) => secao.classe_id);

  const { data: secoesRows, error: secoesError } = await supabase
    .from("secoes")
    .upsert(secoesPayload, { onConflict: "classe_id,codigo" })
    .select();

  if (secoesError) {
    throw secoesError;
  }

  const secoesMap = new Map(
    (secoesRows ?? []).map((row) => [`${row.classe_id}:${row.codigo}`, row.id])
  );

  const requisitosPayload = (payload.requisitos ?? [])
    .map((requisito) => {
      const classeId = classesMap.get(requisito.classe_nome);
      const secaoId = classeId
        ? secoesMap.get(`${classeId}:${requisito.secao_codigo}`)
        : null;

      return {
        ...requisito,
        secao_id: secaoId,
      };
    })
    .filter((requisito) => requisito.secao_id);

  const { data: requisitosRows, error: requisitosError } = await supabase
    .from("requisitos")
    .upsert(requisitosPayload, { onConflict: "secao_id,codigo" })
    .select();

  if (requisitosError) {
    throw requisitosError;
  }

  const requisitosMap = new Map(
    (requisitosRows ?? []).map((row) => [`${row.secao_id}:${row.codigo}`, row.id])
  );

  const subitensPayload = (payload.requisito_subitens ?? [])
    .map((item) => {
      const classeId = classesMap.get(item.classe_nome);
      const secaoId = classeId
        ? secoesMap.get(`${classeId}:${item.secao_codigo}`)
        : null;
      const requisitoId = secaoId
        ? requisitosMap.get(`${secaoId}:${item.requisito_codigo}`)
        : null;

      return {
        ...item,
        requisito_id: requisitoId,
      };
    })
    .filter((item) => item.requisito_id);

  const idadesPayload = (payload.requisito_idades ?? [])
    .map((item) => {
      const classeId = classesMap.get(item.classe_nome);
      const secaoId = classeId
        ? secoesMap.get(`${classeId}:${item.secao_codigo}`)
        : null;
      const requisitoId = secaoId
        ? requisitosMap.get(`${secaoId}:${item.requisito_codigo}`)
        : null;

      return {
        ...item,
        requisito_id: requisitoId,
      };
    })
    .filter((item) => item.requisito_id);

  const regrasPayload = (payload.requisito_especialidade_regra ?? [])
    .map((item) => {
      const classeId = classesMap.get(item.classe_nome);
      const secaoId = classeId
        ? secoesMap.get(`${classeId}:${item.secao_codigo}`)
        : null;
      const requisitoId = secaoId
        ? requisitosMap.get(`${secaoId}:${item.requisito_codigo}`)
        : null;

      return {
        ...item,
        requisito_id: requisitoId,
      };
    })
    .filter((item) => item.requisito_id);

  if (subitensPayload.length) {
    const { error } = await supabase
      .from("requisito_subitens")
      .upsert(subitensPayload, { onConflict: "requisito_id,ordem" });

    if (error) throw error;
  }

  if (idadesPayload.length) {
    const { error } = await supabase
      .from("requisito_idades")
      .upsert(idadesPayload, { onConflict: "requisito_id,faixa" });

    if (error) throw error;
  }

  if (regrasPayload.length) {
    const { error } = await supabase
      .from("requisito_especialidade_regra")
      .upsert(regrasPayload, { onConflict: "requisito_id,area_sigla" });

    if (error) throw error;
  }

  console.log("Caderno seed completed.");
}

async function seedEspecialidades() {
  const dirPath = path.join(rootDir, "data", "especialidades");
  const files = await readdir(dirPath);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const filePath = path.join(dirPath, file);
    const payload = await loadJson(filePath);
    const area = payload.area ?? {};

    const especialidades = (payload.especialidades ?? []).map((item) => {
      const codigoNum = item.codigo_num ?? "";
      const codigoFull = `${area.sigla ?? ""}${codigoNum}`;

      return {
        area_sigla: area.sigla,
        area_nome: area.nome,
        codigo_num: codigoNum,
        codigo_full: codigoFull,
        nivel: item.nivel,
        ano: item.ano,
        instituicao_origem: item.instituicao_origem,
        titulo: item.titulo,
        badge_url: item.badge_url,
        ativo: item.ativo ?? true,
      };
    });

    if (!especialidades.length) {
      continue;
    }

    const { data: especialidadesRows, error: especialidadesError } =
      await supabase
        .from("especialidades")
        .upsert(especialidades, { onConflict: "codigo_full" })
        .select();

    if (especialidadesError) {
      throw especialidadesError;
    }

    const especialidadeMap = new Map(
      (especialidadesRows ?? []).map((row) => [row.codigo_full, row.id])
    );

    const requisitosPayload = [];

    for (const item of payload.especialidades ?? []) {
      const codigoFull = `${area.sigla ?? ""}${item.codigo_num ?? ""}`;
      const especialidadeId = especialidadeMap.get(codigoFull);

      if (!especialidadeId || !item.requisitos?.length) continue;

      for (const requisito of item.requisitos) {
        requisitosPayload.push({
          especialidade_id: especialidadeId,
          ordem: requisito.ordem,
          texto: requisito.texto,
        });
      }
    }

    if (requisitosPayload.length) {
      const { error } = await supabase
        .from("especialidade_requisitos")
        .upsert(requisitosPayload, { onConflict: "especialidade_id,ordem" });

      if (error) throw error;
    }
  }

  console.log("Especialidades seed completed.");
}

async function run() {
  try {
    await seedCaderno();
    await seedEspecialidades();
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

run();
