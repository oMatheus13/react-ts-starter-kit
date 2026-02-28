# 🏅 ARQUIVO 2 — ESPECIALIDADES

## 1. Objetivo

Gerenciar mais de 500 especialidades com:

* Catálogo completo
* Progresso individual
* Integração com requisitos
* Barra por área
* Barra geral

---

## 2. Áreas Oficiais

AD
HM
AA
AM
AMEB (internamente, exibir como AM-EB)
AP
AR
CS
EN
HD
ME

Nomes por extenso:
ADRA (AD)
Artes e Habilidades Manuais (HM)
Atividades Agrícolas (AA)
Atividades Missionárias e Comunitárias (AM)
Ensinos Bíblicos (AM-EB)
Atividades Profissionais (AP)
Atividades Recreativas (AR)
Ciência e Saúde (CS)
Estudos da Natureza (EN)
Habilidades Domésticas (HD)
Mestrados de Especialiades (ME)

---

## 3. Banco de Dados

### especialidades

* id
* area_sigla
* area_nome
* codigo_num
* codigo_full (gerado)
* nivel
* ano
* instituicao_origem
* titulo
* badge_url
* ativo
* created_at

---

### especialidade_requisitos

* id
* especialidade_id
* ordem
* texto

---

### progresso_especialidade

* id
* usuario_id
* especialidade_id
* status (nao_iniciada | em_andamento | concluida | entregue)
* data_conclusao
* data_entrega
* observacao

---

### progresso_especialidade_item

* id
* usuario_id
* especialidade_requisito_id
* concluido
* data

---

## 4. JSON Mestre

Arquivos versionados por área:

* especialidades/AD.json
* especialidades/AR.json
  etc.

Importação via seed no Supabase.

---

## 5. UI

### Dashboard

* Barra geral (todas especialidades)
* Sugestão de 2 áreas “quase completas”

### Página Especialidades

* Barra geral
* Lista de áreas com mini barra

### Página da Área

* Barra da área
* Lista com status individual

### Detalhe da Especialidade

* Metadados
* Checklist interno
* Botão concluir
* Botão entregar
