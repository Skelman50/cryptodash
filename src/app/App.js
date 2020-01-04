import React from "react";
import "./App.css";
import AppLayout from "../components/ui/AppLayout";
import AppBar from "../components/app-bar/AppBar";
import AppState from "../context/app/AppState";
import WelcomeMessage from "../components/settings/WelcomeMessage";
import Content from "../components/content/Content";

function App() {
  return (
    <AppLayout>
      <AppState>
        <AppBar />
        <Content>
          <WelcomeMessage />
        </Content>
      </AppState>
    </AppLayout>
  );
}

export default App;
