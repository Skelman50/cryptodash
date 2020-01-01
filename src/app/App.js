import React from "react";
import "./App.css";
import AppLayout from "../components/ui/AppLayout";
import AppBar from "../components/app-bar/AppBar";
import WelcomeMessage from "../components/ui/WelcomeMessage";

function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
