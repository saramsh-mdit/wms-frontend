import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboard";
import MainLayout from "../layout/main";
import Dashboard from "../pages/dashboard";
import { WeaponFormPage } from "../pages/dashboard/forms/weapon";
import { WeaponTypeFormPage } from "../pages/dashboard/forms/weapon-type";
import WeaponInventoryPage from "../pages/dashboard/weapon-inventory";
import WeaponTypesPage from "../pages/dashboard/weapon-types";
import WeaponValidationPage from "../pages/dashboard/weapon-validation";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import UserPage from "../pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: ":user",
        element: <UserPage />,
      },
      {
        path: "admin",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "weapon-inventory",
            element: <WeaponInventoryPage />,
          },
          {
            path: "weapon-validation",
            element: <WeaponValidationPage />,
          },
          {
            path: "weapon-types",
            element: <WeaponTypesPage />,
          },
          // FORMS
          {
            path: "form/add-weapon",
            element: <WeaponFormPage />,
          },
          {
            path: "form/edit-weapon",
            element: <WeaponFormPage />,
          },
          // FORMS
          {
            path: "form/add-weapon-type",
            element: <WeaponTypeFormPage />,
          },
          {
            path: "form/edit-weapon-type",
            element: <WeaponTypeFormPage />,
          },
        ],
      },
    ],
  },
]);
