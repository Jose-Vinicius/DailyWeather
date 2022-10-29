import React from "react";
import { AppProvider } from "./context/AppContext";
import { DesktopView } from "./pages/desktop";
import './scss/reset.scss';
import './scss/globalStyle.scss';

export function App() {
  return (
    <AppProvider>
      <DesktopView />
    </AppProvider>
  )
}
