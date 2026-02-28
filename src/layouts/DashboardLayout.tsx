import { NavLink, Outlet } from "react-router-dom";

import { cn } from "@/lib/utils";

const appNav = [
  { to: "/app/dashboard", label: "Dashboard" },
  { to: "/app/caderno", label: "Caderno" },
  { to: "/app/especialidades", label: "Especialidades" },
  { to: "/app/exportar", label: "Exportar" },
];

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <NavLink to="/app/dashboard" className="font-semibold tracking-tight">
            Bussola DBV - App
          </NavLink>
          <NavLink
            to="/"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Voltar ao site
          </NavLink>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-6xl gap-8 px-6 py-8">
        <aside className="hidden w-52 flex-col gap-1 rounded-2xl border bg-card p-3 text-sm md:flex">
          {appNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-3 py-2 transition",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
