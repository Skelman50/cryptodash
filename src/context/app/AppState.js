import React, { useState } from "react";
import { AppContext } from "./appContext";

const AppState = props => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(true);
  const changePage = page => setPage(page);
  const saveSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      setPage("settings");
      setFirstVisit(true);
    } else {
      setFirstVisit(false);
    }
  };
  const confirmFavorites = () => {
    setFirstVisit(false);
    setPage("dashboard");
    localStorage.setItem("cryptoDash", JSON.stringify({ test: "hello" }));
  };
  return (
    <AppContext.Provider
      value={{ page, changePage, saveSettings, firstVisit, confirmFavorites }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
