import { Link } from "react-router-dom";

export function SignInPage() {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border bg-card p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Entrar</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Acesse para acompanhar seu progresso.
      </p>
      <form className="mt-6 space-y-4">
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
            placeholder="Sua senha"
            className="rounded-xl border bg-background px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-sm text-muted-foreground">
        Ainda nao tem conta?{" "}
        <Link to="/cadastro" className="font-semibold text-foreground">
          Criar conta
        </Link>
      </p>
    </div>
  );
}
