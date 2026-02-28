import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

export function GuiaArtigoPage() {
  const { categoria, artigo } = useParams();
  const categoryLabel = useMemo(
    () => (categoria ? decodeURIComponent(categoria) : "Categoria"),
    [categoria]
  );
  const articleLabel = useMemo(
    () => (artigo ? decodeURIComponent(artigo) : "Artigo"),
    [artigo]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {categoryLabel}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {articleLabel}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Conteudo em markdown sera renderizado aqui.
        </p>
      </div>
      <Link
        to={`/guia/${encodeURIComponent(categoryLabel)}`}
        className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
      >
        Voltar para a categoria
      </Link>
    </div>
  );
}
