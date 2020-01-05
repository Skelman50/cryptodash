import React from "react";
import "./App.css";
import AppLayout from "../components/ui/AppLayout";
import AppBar from "./AppBar";
import AppState from "../context/app/AppState";
import Content from "../components/settings/Content";
import Settings from "../components/settings/Settings";

function App() {
  return (
    <AppLayout>
      <AppState>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppState>
    </AppLayout>
  );
}

export default App;
