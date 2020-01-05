import React, { useState, useEffect } from "react";
import cc from "cryptocompare";
import { AppContext } from "./appContext";

const MAX_FAVORITES = 10;

const AppState = props => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(true);
  const [coins, setCoins] = useState(null);
  const [favorites, setFavorites] = useState(["BTC", "ETH", "XMR", "DOGE"]);
  const changePage = page => setPage(page);

  const confirmFavorites = () => {
    setFirstVisit(false);
    localStorage.setItem("cryptoDash", JSON.stringify({ favorites }));
  };

  const addCoin = key => {
    const favorites_ = [...favorites];
    if (favorites_.length < MAX_FAVORITES) {
      favorites_.push(key);
      setFavorites(favorites_);
    }
  };

  const removeCoin = key => {
    const favorites_ = favorites.filter(f => f !== key);
    setFavorites(favorites_);
  };

  const isFavorites = key => favorites.includes(key);

  useEffect(() => {
    const fetchCoinsList = async () => {
      const coinList = (await cc.coinList()).Data;
      setCoins(coinList);
    };
    const saveSettings = () => {
      let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
      if (!cryptoDashData) {
        setPage("settings");
        setFirstVisit(true);
      } else {
        setFirstVisit(false);
        setFavorites(cryptoDashData.favorites);
      }
    };
    saveSettings();
    fetchCoinsList();
  }, []);

  return (
    <AppContext.Provider
      value={{
        page,
        changePage,
        firstVisit,
        confirmFavorites,
        coins,
        favorites,
        addCoin,
        removeCoin,
        isFavorites
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
