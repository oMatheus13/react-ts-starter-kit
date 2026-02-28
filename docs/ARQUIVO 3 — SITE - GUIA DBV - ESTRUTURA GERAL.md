# 🌐 ARQUIVO 3 — SITE / GUIA DBV / ESTRUTURA GERAL

## 1. Domínio

dbv.omatheus.com

---

## 2. Autenticação

Supabase Auth

* email + senha
* papéis: participante | lider | admin

---

## 3. Dashboard Geral

Cards:

* Agrupadas
* Especialidades
* Sugestão de áreas quase completas
* Pendências rápidas

---

## 4. Guia DBV (Público)

### Estrutura

categorias_utilitarios

* id
* slug
* titulo
* ordem

artigos_utilitarios

* id
* categoria_id
* slug
* titulo
* resumo
* conteudo (markdown)
* updated_at

---

### Categorias Iniciais

Acampamento
Camporis
Cerimônias
Civismo
Hinos
Histórico
Ideais
Liderança
Nós e Amarras
Ordem Unida
Pessoas
Uniformes

---

## 5. Regras Importantes

* Concluído ≠ Entregue
* Página obrigatória para exportação
* Especialidade pode ser escolhida dentro de requisito
* Supabase é fonte da verdade
* JSON é apenas seed

---

# 🚀 Fases de Entrega

### MVP

* Auth
* Caderno completo
* Marcação concluído/entregue
* Exportação
* Especialidades com progresso
* Dashboard com barras

### Fase 2

* Painel do líder
* Validação em lote
* Estatísticas por clube
* Mapeamento colaborativo de páginas
* Editor de especialidades (admin)

---

# 🔥 Produto Final

Bússola DBV será:

* Central de acompanhamento das Agrupadas
* Catálogo completo de Especialidades
* Sistema de exportação distrital automatizado
* Base de conhecimento para Desbravadores
* Plataforma escalável para múltiplos clubes
