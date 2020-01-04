import React from "react";
import "./App.css";
import AppLayout from "../components/ui/AppLayout";
import AppBar from "../components/app-bar/AppBar";
import AppState from "../context/app/AppState";
import WelcomeMessage from "../settings/WelcomeMessage";

function App() {
  return (
    <AppLayout>
      <AppState>
        <AppBar />
        <WelcomeMessage />
      </AppState>
    </AppLayout>
  );
}

export default App;
