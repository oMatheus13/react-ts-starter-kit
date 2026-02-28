import { Link } from "react-router-dom";

const copy = {
  public: {
    title: "Catalogo de Especialidades",
    subtitle: "Explore areas e requisitos sem precisar de login.",
    cta: { label: "Entrar para acompanhar", to: "/entrar" },
  },
  app: {
    title: "Especialidades",
    subtitle: "Veja seu progresso e conclua requisitos por area.",
    cta: { label: "Ver areas", to: "/app/especialidades" },
  },
};

type EspecialidadesPageProps = {
  mode: "public" | "app";
};

export function EspecialidadesPage({ mode }: EspecialidadesPageProps) {
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
        A listagem das especialidades sera carregada do seed por area.
      </div>
    </div>
  );
}
