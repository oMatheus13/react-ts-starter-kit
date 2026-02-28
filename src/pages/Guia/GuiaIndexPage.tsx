import { Link } from "react-router-dom";

const categorias = [
  "Acampamento",
  "Camporis",
  "Cerimonias",
  "Civismo",
  "Hinos",
  "Historico",
  "Ideais",
  "Lideranca",
  "Nos e Amarras",
  "Ordem Unida",
  "Pessoas",
  "Uniformes",
];

export function GuiaIndexPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Guia DBV</h1>
        <p className="mt-2 text-muted-foreground">
          Conteudo publico organizado por categorias.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {categorias.map((categoria) => (
          <Link
            key={categoria}
            to={`/guia/${encodeURIComponent(categoria)}`}
            className="rounded-2xl border bg-card px-4 py-3 text-sm font-medium transition hover:bg-muted"
          >
            {categoria}
          </Link>
        ))}
      </div>
    </div>
  );
}
