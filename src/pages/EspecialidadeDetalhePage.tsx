import { useParams } from "react-router-dom";

export function EspecialidadeDetalhePage() {
  const { id } = useParams();

  return (
    <div className="space-y-4 rounded-3xl border bg-card p-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Especialidade {id}
      </h1>
      <p className="text-muted-foreground">
        Metadados e checklist da especialidade selecionada.
      </p>
    </div>
  );
}
