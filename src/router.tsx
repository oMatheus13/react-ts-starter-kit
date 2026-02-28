import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { MainLayout } from "@/layouts/MainLayout";
import { CadernoPage } from "@/pages/CadernoPage";
import { DashboardPage } from "@/pages/Dashboard";
import { EspecialidadeAreaPage } from "@/pages/EspecialidadeAreaPage";
import { EspecialidadeDetalhePage } from "@/pages/EspecialidadeDetalhePage";
import { EspecialidadesPage } from "@/pages/EspecialidadesPage";
import { ExportarPage } from "@/pages/ExportarPage";
import { GuiaArtigoPage } from "@/pages/Guia/GuiaArtigoPage";
import { GuiaCategoriaPage } from "@/pages/Guia/GuiaCategoriaPage";
import { GuiaIndexPage } from "@/pages/Guia/GuiaIndexPage";
import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { SignInPage } from "@/pages/Auth/SignInPage";
import { SignUpPage } from "@/pages/Auth/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "caderno", element: <CadernoPage mode="public" /> },
      { path: "especialidades", element: <EspecialidadesPage mode="public" /> },
      { path: "guia", element: <GuiaIndexPage /> },
      { path: "guia/:categoria", element: <GuiaCategoriaPage /> },
      { path: "guia/:categoria/:artigo", element: <GuiaArtigoPage /> },
      { path: "entrar", element: <SignInPage /> },
      { path: "cadastro", element: <SignUpPage /> }
    ],
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "caderno", element: <CadernoPage mode="app" /> },
      { path: "exportar", element: <ExportarPage /> },
      { path: "especialidades", element: <EspecialidadesPage mode="app" /> },
      { path: "especialidades/area/:sigla", element: <EspecialidadeAreaPage /> },
      { path: "especialidades/:id", element: <EspecialidadeDetalhePage /> }
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
