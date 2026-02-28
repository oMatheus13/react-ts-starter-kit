import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Caderno Agrupadas com progresso por secao",
  "Especialidades com busca e filtros rapidos",
  "Exportacao distrital pronta para copiar",
];

export function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border bg-card p-10 shadow-sm">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Bussola DBV
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Centralize o progresso das Classes Agrupadas e Especialidades.
          </h1>
          <p className="text-lg text-muted-foreground">
            Consulte o caderno, marque requisitos e exporte pendencias no formato
            distrital com um fluxo simples.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/entrar"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            >
              Entrar para acompanhar
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/caderno"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold"
            >
              Ver caderno publico
            </Link>
          </div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border bg-card p-5"
          >
            <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
