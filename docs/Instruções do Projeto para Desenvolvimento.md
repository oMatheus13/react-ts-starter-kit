# Instruções do Projeto para Desenvolvimento

## Projeto: Bússola DBV

## Prazo: 14 dias, V1.0 perfeita e lançada

## Stack: React + Vite + shadcn/ui + Supabase + lucide-react

## 0) Visão e objetivo

Bússola DBV é uma central para:

1. Consultar o Caderno de Agrupadas e o Catálogo de Especialidades (modo público, read-only).
2. Acompanhar progresso (modo logado, interativo).
3. Exportar automaticamente pendências no formato distrital.

A entrega precisa ser rápida, limpa e confiável.

---

# 1) Estrutura do produto: Site público + App logado

## 1.1 Modo público (sem login)

Rotas públicas:

* `/` (Home)
* `/caderno` (visualização read-only)
* `/especialidades` (catálogo read-only)
* `/guia` e `/guia/*` (Guia DBV público)

Regras:

* Sem checkbox.
* Sem marcar progresso.
* Pode ter busca e filtros para consulta.
* CTA clara para login: “Entrar para acompanhar meu progresso”.

## 1.2 Modo logado (app)

Rotas logadas:

* `/app/dashboard`
* `/app/caderno`
* `/app/exportar`
* `/app/especialidades`
* `/app/especialidades/area/:sigla`
* `/app/especialidades/:id`

Regras:

* Aqui existem checkboxes e status.
* Aqui aparecem barras de progresso.
* Aqui existe exportação.
* Usuário só vê e altera os próprios dados.

## 1.3 Importante: evitar duplicação de código

Opção recomendada:

* Usar as mesmas telas base de `/caderno` e `/especialidades`
* Renderizar em dois modos:

  * read-only quando não logado
  * interativo quando logado
    Mas rotas `/app/*` podem existir para layout separado.

---

# 2) Decisões e bibliotecas

* UI: **shadcn/ui** (Tailwind)
* Ícones: **lucide-react**
* Busca: V1 com busca em **Agrupadas (A)** e **Especialidades (B)**
* Guia DBV: **público**
* Backend: **Supabase** (Auth + Postgres)

Bibliotecas recomendadas:

* TanStack Query (cache, estados, busca)
* React Hook Form + Zod (forms e validação)
* Sonner ou Toast do shadcn para feedback

---

# 3) Funcionalidades V1.0 (escopo fechado)

## 3.1 Autenticação e perfil

Supabase Auth:

* email + senha

Perfil obrigatório no primeiro login:

* nome
* clube
* ano do caderno
* faixa etária (11, 12, 13, 14, 15+)
* modo: livre ou fases

## 3.2 Agrupadas (caderno)

Funcionalidades:

* Listagem por Classes e Seções
* Marcar requisito como:

  * concluído
  * entregue (separado)
* Filtros:

  * pendentes
  * concluídos
  * concluídos mas não entregues
* Busca:

  * por título/descrição
  * por código (ex: II.3)

Progresso:

* Dashboard: barra geral Agrupadas
* Página do caderno: barra por seção
* Se modo fases: barra por série

## 3.3 Exportação distrital (obrigatório)

Formato gerado (texto copiar/colar):
📘 AGRUPADAS {ano}
👤 Nome do Participante: {nome}
🏕️ Clube: {clube}

🔹 1ª SÉRIE – Página 1 até Página 85
Página X – {titulo_curto}

🔹 2ª SÉRIE – Página 86 até Página 216
...

🔹 3ª SÉRIE – Página 220 até Página 312
...

Regra:

* Exportar requisitos:

  * não concluídos OU
  * concluídos mas não entregues
* Requisitos sem página:

  * não aparecem na exportação
  * mostrar aviso: “X pendências ainda sem página mapeada”

Botões:

* Copiar texto

## 3.4 Especialidades

Funcionalidades:

* Catálogo com filtros:

  * por área
  * por nível
  * por status (no modo logado)
* Busca:

  * por título
  * por código (ex: AR001)
* Página de área:

  * barra de progresso da área
  * listagem da área
* Detalhe da especialidade:

  * metadados (área, código, nível, ano, origem)
  * checklist interno (marcar requisitos)
  * status: em andamento / concluída / entregue

Dashboard:

* Barra geral de progresso do catálogo inteiro
* Opcional: mostrar 2 áreas “faltam poucas” (apenas se fizer sentido)

## 3.5 Integração Agrupadas -> Especialidades

Quando um requisito exigir especialidade:

* No requisito, botão “Escolher especialidade”
* Abre modal filtrado pela área exigida
* Usuário escolhe 1 ou mais (quantidade definida na regra)
* Mostrar contador no requisito: selecionadas X/Y, concluídas X/Y

## 3.6 Guia DBV (público)

* Estrutura de categorias
* Artigos em markdown
* Sem login
* Sem busca na V1.0 (opcional futuro)
* Páginas:

  * /guia
  * /guia/:categoria
  * /guia/:categoria/:artigo

Categorias iniciais:
Acampamento, Camporis, Cerimônias, Civismo, Hinos, Histórico, Ideais, Liderança, Nós e Amarras, Ordem Unida, Pessoas, Uniformes

---

# 4) Dados e conteúdo

## 4.1 Agrupadas

Matheus fornecerá texto estruturado de seções e requisitos.
Falta mapear páginas.

Obrigatório na V1:

* Tela Admin “Mapear páginas”

  * lista requisitos sem página
  * input pagina_inicio
  * salvar
    Sem isso, exportação não fecha.

## 4.2 Especialidades

Não cadastrar manualmente.
Usar JSON por área + seed/import.

As áreas são:
AD, HM, AA, AM, AMEB (exibir AM-EB), AP, AR, CS, EN, HD, ME

---

# 5) Critérios de pronto (sem negociação)

## Agrupadas

* Marcar concluído/entregue persiste corretamente.
* Filtros e busca funcionam.
* Exportação sai no formato distrital correto.
* Itens sem página não exportam e geram aviso.

## Especialidades

* Busca por nome e código funciona.
* Progresso atualiza barras geral e por área.
* Checklist interno funciona.

## Público vs logado

* Público vê tudo read-only.
* Logado marca e vê dashboard.

---

# 6) Plano de execução em 14 dias (ordem)

Dia 1-2: setup, auth, layout, RLS básico, tabelas base
Dia 3-4: Agrupadas (listar, marcar, filtros) + busca
Dia 5: Exportação distrital + avisos de página
Dia 6: Tela admin mapear páginas
Dia 7-8: Especialidades (catálogo, área, busca)
Dia 9: Detalhe especialidade + checklist + status
Dia 10: Dashboard (barras) + UX polimento
Dia 11: Integração requisito->selecionar especialidade
Dia 12: Guia DBV público (categorias + markdown)
Dia 13: ajustes, performance listas, loading, erros
Dia 14: deploy + domínio bussola.omatheus.com + checklist final

---

# 7) Padrão visual e ícones

* Estilo inspirado em Supabase/Vercel: limpo e funcional
* shadcn/ui como base
* Ícones lucide-react, tamanho discreto e consistente
* Sem exagero de efeitos

---

# 8) Entregáveis finais

* App no ar no subdomínio
* Banco Supabase configurado com RLS
* Seed/import de especialidades (mesmo parcial)
* Tela admin de páginas
* Exportação funcionando


# Atualização Final das Instruções – Bússola DBV

## Obrigatório antes do lançamento

Além de tudo já definido anteriormente, o agente precisa cumprir os pontos abaixo para que o projeto seja sustentável e expansível.

---

# 1) Estrutura pronta para crescimento de conteúdo

O sistema NÃO pode nascer fechado.
Ele precisa nascer preparado para você adicionar:

* Especialidades restantes (500+)
* Segunda parte do Caderno Agrupadas
* Classes Avançadas completas
* Atualizações futuras

Isso significa:

## 1.1 Arquivos JSON estruturados e organizados

O agente deve:

Criar uma pasta estruturada para conteúdo estático:

```
/data
  /caderno
    caderno_v1.json
  /especialidades
    AD.json
    HM.json
    AA.json
    AM.json
    AMEB.json
    AP.json
    AR.json
    CS.json
    EN.json
    HD.json
    ME.json
```

Regras:

* Um arquivo por área de especialidade.
* Estrutura clara e consistente.
* Comentários explicando o formato.

Você deve conseguir abrir esses arquivos e simplesmente adicionar novos objetos sem quebrar nada.

---

# 2) Sistema de Importação Reexecutável

Não pode ser “importou uma vez e nunca mais”.

O agente precisa deixar:

* Script de seed que possa ser executado novamente.
* Script que:

  * cria registros novos
  * atualiza existentes se já existirem
  * não duplica dados

Documentação clara:

```
npm run seed
```

ou equivalente.

Você não pode depender de mexer manualmente no banco.

---

# 3) Estrutura do Caderno pronta para Parte 2

Hoje você tem a primeira parte estruturada.
Falta:

* Segunda parte do caderno agrupadas.
* Classes Avançadas completas.

O banco e o frontend precisam:

* Suportar múltiplos cadernos.
* Suportar múltiplas seções adicionais.
* Permitir inserir novas seções sem alterar código.

Nada hardcoded.

Se amanhã você adicionar “Seção X – Nova Atualização”, o sistema precisa aceitar.

---

# 4) Versionamento do Conteúdo

Obrigatório:

Cada caderno deve ter:

* ano
* versão
* ativo (boolean)

Cada especialidade deve ter:

* área
* código
* nível
* ano
* ativo

Se amanhã sair atualização oficial, você não pode destruir dados antigos.

---

# 5) Tela Admin Mínima

Além do que já foi definido, precisa existir:

## Admin – Conteúdo

* Ver especialidades cadastradas
* Ver requisitos do caderno
* Filtro “sem página”
* Botão de reimportar seed (somente admin)

Não precisa editor complexo.
Mas precisa controle.

---

# 6) Estrutura Frontend Preparada para Expansão

Componentes precisam ser:

* Modulares
* Reutilizáveis
* Sem lógica acoplada ao layout público

As páginas:

* `/caderno` (read-only)
* `/app/caderno` (interativo)

Devem compartilhar os mesmos componentes base.

Mesma coisa para especialidades.

---

# 7) Performance Preparada para 500+ Especialidades

Obrigatório:

* Paginação ou virtualização
* Busca eficiente
* Não renderizar 500 componentes pesados de uma vez
* Estado leve

O sistema precisa rodar liso no celular.

---

# 8) Checklist Final de Preparação para Conteúdo

Antes de lançar, o agente deve garantir:

* Estrutura JSON documentada.
* Scripts de seed documentados.
* Como adicionar nova especialidade explicado.
* Como adicionar nova seção do caderno explicado.
* Como mapear páginas explicado.

Você precisa conseguir expandir sem depender 100% dele.

---

# 9) Decisão Estratégica

V1 pode lançar com:

* Caderno completo (mesmo que páginas parcialmente mapeadas)
* Especialidades parcialmente cadastradas
* Classes avançadas já estruturadas (mesmo que incompletas)

Mas a ESTRUTURA precisa estar 100% pronta para crescer.

---

# 10) Padrão Visual Final

* shadcn/ui
* lucide-react
* Estilo limpo, tipo Supabase/Vercel
* Mobile first
* Layout leve

Nada de exagero visual.

---

# Conclusão

Se tudo acima estiver pronto:

Você lança em menos de 2 semanas.

Se tentar adicionar feature extra agora:
Você atrasa.

Se tentar fazer tudo perfeito demais antes de lançar:
Você atrasa.

Se travar o escopo e focar:
Você lança.

