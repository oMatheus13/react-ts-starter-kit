# 📘 ARQUIVO 1 — CADERNO DE CLASSES AGRUPADAS

## 1. Objetivo

Sistema completo para:

* Registrar requisitos do Caderno de Classes Agrupadas
* Marcar como concluído
* Marcar como entregue
* Calcular progresso
* Exportar pendências no formato distrital

---

## 2. Estrutura de Conteúdo

### Estrutura Hierárquica

Caderno
→ Classes (Regulares / Avançadas)
→ Seções (I, II, III...)
→ Requisitos
→ Subitens (quando existirem)
→ Regras de especialidade (quando aplicável)
→ Faixa etária aplicável

---

## 3. Banco de Dados (Supabase)

### Tabela: cadernos

* id
* nome
* ano
* versao
* ativo

---

### Tabela: classes

* id
* caderno_id
* nome (Regulares / Avançadas)
* ordem

---

### Tabela: secoes

* id
* classe_id
* codigo (I, II, III...)
* nome
* ordem

---

### Tabela: requisitos

* id
* secao_id
* codigo
* titulo_curto
* descricao
* tipo (normal | especialidade | leitura | escolha | lista)
* pagina_inicio (nullable)
* pagina_fim (nullable)
* ordem

---

### Tabela: requisito_subitens

* id
* requisito_id
* texto
* ordem

---

### Tabela: requisito_idades

* id
* requisito_id
* faixa (11 | 12 | 13 | 14 | 15_plus)

---

### Tabela: requisito_especialidade_regra

* id
* requisito_id
* area_sigla
* quantidade
* permite_repeticao (bool)

---

### Tabela: requisito_especialidade_escolha

* id
* usuario_id
* requisito_id
* especialidade_id

---

### Tabela: progresso_requisito

* id
* usuario_id
* requisito_id
* concluido (bool)
* entregue (bool)
* data_conclusao
* data_entrega
* observacao

---

## 4. Modos

### Modo Livre

Sem bloqueios.

### Modo Fases

Baseado em páginas:

1ª Série: 1–85
2ª Série: 86–216
3ª Série: 220–312

Configurável no banco.

---

## 5. Exportação Distrital

Formato automático:

📘 AGRUPADAS {ano}
👤 Nome: {nome}
🏕️ Clube: {clube}

🔹 1ª SÉRIE – Página 1 até 85
Página X – {titulo}

Regras:

* Exportar não concluídos OU não entregues
* Ocultar requisitos sem página (mostrar aviso interno)

---

## 6. Progresso Visual

### Dashboard

* Barra Agrupadas (% concluído)
* Indicador entregue
* Barra por série (modo fases)
* Barra por seção
