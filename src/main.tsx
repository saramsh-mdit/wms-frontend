import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import ContextWrapper from "./context/index.tsx";
import "./index.scss";

const theme = createTheme({
  primaryColor: "green",
  primaryShade: { light: 7 },
  colors: {
    green: [
      "#f0fdf4",
      "#dcfce7",
      "#bbf7d0",
      "#86efac",
      "#4ade80",
      "#22c55e",
      "#16a34a",
      "#15803d",
      "#166534",
      "#14532d",
      "#052e16",
    ],
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <ContextWrapper>
        <Notifications />
        <App />
      </ContextWrapper>
    </MantineProvider>
  </React.StrictMode>
);
