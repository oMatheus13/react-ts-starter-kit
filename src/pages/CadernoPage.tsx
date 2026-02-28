import { Link } from "react-router-dom";

const copy = {
  public: {
    title: "Caderno de Classes Agrupadas",
    subtitle: "Visualizacao publica para consulta rapida.",
    cta: { label: "Entrar para acompanhar", to: "/entrar" },
  },
  app: {
    title: "Caderno de Classes Agrupadas",
    subtitle: "Aqui voce marca requisitos como concluidos ou entregues.",
    cta: { label: "Exportar pendencias", to: "/app/exportar" },
  },
};

type CadernoPageProps = {
  mode: "public" | "app";
};

export function CadernoPage({ mode }: CadernoPageProps) {
  const content = copy[mode];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          {content.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{content.subtitle}</p>
        <Link
          to={content.cta.to}
          className="mt-6 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
        >
          {content.cta.label}
        </Link>
      </div>
      <div className="rounded-3xl border border-dashed p-8 text-sm text-muted-foreground">
        Estrutura do caderno sera carregada do banco e dos arquivos JSON.
      </div>
    </div>
  );
}
