import React from "react";
import "./App.css";
import AppLayout from "../components/ui/AppLayout";
import AppBar from "../components/app-bar/AppBar";
import WelcomeMessage from "../components/ui/WelcomeMessage";
import AppState from "../context/app/AppState";

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
