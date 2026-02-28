import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

export function GuiaCategoriaPage() {
  const { categoria } = useParams();
  const title = useMemo(
    () => (categoria ? decodeURIComponent(categoria) : "Categoria"),
    [categoria]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground">
          Lista de artigos e materiais relacionados.
        </p>
      </div>
      <Link
        to="/guia"
        className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
      >
        Voltar para categorias
      </Link>
    </div>
  );
}
