import { Link } from "react-router-dom";

export function SignUpPage() {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border bg-card p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Criar conta</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Configure seu perfil para iniciar o acompanhamento.
      </p>
      <form className="mt-6 space-y-4">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Nome
          <input
            type="text"
            placeholder="Seu nome"
            className="rounded-xl border bg-background px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input
            type="email"
            placeholder="voce@email.com"
            className="rounded-xl border bg-background px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Senha
          <input
            type="password"
            placeholder="Crie uma senha"
            className="rounded-xl border bg-background px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Criar conta
        </button>
      </form>
      <p className="mt-4 text-sm text-muted-foreground">
        Ja tem conta?{" "}
        <Link to="/entrar" className="font-semibold text-foreground">
          Entrar
        </Link>
      </p>
    </div>
  );
}
