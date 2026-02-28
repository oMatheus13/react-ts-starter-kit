import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/app/caderno", label: "Continuar caderno" },
  { to: "/app/especialidades", label: "Ver especialidades" },
  { to: "/app/exportar", label: "Exportar pendencias" },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Resumo rapido do seu progresso no caderno e nas especialidades.
        </p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {quickLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-2xl border bg-card p-5 text-sm font-medium transition hover:bg-muted"
          >
            {item.label}
          </Link>
        ))}
      </section>
    </div>
  );
}
