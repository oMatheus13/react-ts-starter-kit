import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="space-y-4 rounded-3xl border bg-card p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Pagina nao encontrada</h1>
      <p className="text-muted-foreground">
        O endereco nao existe ou foi movido.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
      >
        Voltar para a home
      </Link>
    </div>
  );
}
