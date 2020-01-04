import React, { useState, useEffect } from "react";
import cc from "cryptocompare";
import { AppContext } from "./appContext";

const AppState = props => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(true);
  const [coins, setCoins] = useState([]);
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

  useEffect(() => {
    const fetchCoinsList = async () => {
      const coinList = (await cc.coinList()).Data;
      setCoins(coinList);
    };
    fetchCoinsList();
  }, []);

  return (
    <AppContext.Provider
      value={{
        page,
        changePage,
        saveSettings,
        firstVisit,
        confirmFavorites,
        coins
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
