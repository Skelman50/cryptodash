import React, { useState } from "react";
import { AppContext } from "./appContext";

const AppState = props => {
  const [page, setPage] = useState("settings");
  const changePage = page => setPage(page);
  return (
    <AppContext.Provider value={{ page, changePage }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
