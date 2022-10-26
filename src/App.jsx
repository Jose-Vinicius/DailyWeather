import React from "react";
import { AppProvider } from "./context/appContext";
import { DesktopView } from "./pages/desktop";
import './scss/reset.scss'

export function App() {
  return (
    <AppProvider>
      <DesktopView />
    </AppProvider>
  )
}
