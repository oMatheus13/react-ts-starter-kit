import { useParams } from "react-router-dom";

export function EspecialidadeAreaPage() {
  const { sigla } = useParams();

  return (
    <div className="space-y-4 rounded-3xl border bg-card p-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Area {sigla?.toUpperCase()}
      </h1>
      <p className="text-muted-foreground">
        Barra de progresso e lista de especialidades da area.
      </p>
    </div>
  );
}
