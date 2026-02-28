import { Compass } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { cn } from "@/lib/utils";

const navItems = [
  { to: "/caderno", label: "Caderno" },
  { to: "/especialidades", label: "Especialidades" },
  { to: "/guia", label: "Guia DBV" },
];

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <Compass className="h-5 w-5" />
            Bussola DBV
          </NavLink>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/entrar"
            className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            Entrar
          </NavLink>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6 text-xs text-muted-foreground">
          Bussola DBV - Guia e acompanhamento das classes do Clube de Desbravadores.
        </div>
      </footer>
    </div>
  );
}
