import React, { useState, useEffect } from "react";
import cc from "cryptocompare";
import moment from "moment";
import { AppContext } from "./appContext";

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

const AppState = props => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [coins, setCoins] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(null);
  const [prices, setPrices] = useState(null);
  const [currentFavorite, setCurrentFavorite] = useState(null);
  const [historical, setHistorical] = useState(null);
  const [chartSelect, setChartSelect] = useState("months");
  const changePage = page => setPage(page);

  const confirmFavorites = () => {
    setFirstVisit(false);
    const currentFavorite = favorites[favorites.length - 1];
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({ favorites, currentFavorite })
    );
    setPrices(null);
    setHistorical(null);
    setCurrentFavorite(currentFavorite);
    setPage("dashboard");
  };

  const changeCurrenFavorite = sym => {
    setCurrentFavorite(sym);
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorite: sym
      })
    );
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

  const changeFilteredCoins = filteredCoins => {
    setFilteredCoins(filteredCoins);
  };

  const fetchPrices = async () => {
    if (firstVisit) return;
    const prices = [];
    const cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) return;
    setPrices(null);
    const favorites = cryptoDashData.favorites;
    for (let i = 0; i < favorites.length; i++) {
      try {
        const priceData = await cc.priceFull(favorites[i], "USD");
        prices.push(priceData);
      } catch (error) {
        console.warn(error);
      }
    }
    setPrices(prices);
  };

  const fetchCoinsList = async () => {
    const coinList = (await cc.coinList()).Data;
    setCoins(coinList);
  };
  const saveSettings = () => {
    const cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      setPage("settings");
      setFirstVisit(true);
    } else {
      setFirstVisit(false);
      setFavorites(cryptoDashData.favorites);
      setCurrentFavorite(cryptoDashData.currentFavorite);
    }
  };

  const fetchHistorical = async () => {
    if (firstVisit) return;
    const promises = [];
    setHistorical(null);
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          currentFavorite,
          ["USD"],
          moment()
            .subtract({ [chartSelect]: units })
            .toDate()
        )
      );
    }
    const results = await Promise.all(promises);
    const historical = [
      {
        name: currentFavorite,
        data: results.map((r, idx) => [
          moment()
            .subtract({ [chartSelect]: TIME_UNITS - idx })
            .valueOf(),
          r.USD
        ])
      }
    ];
    setHistorical(historical);
  };

  const changeChartSelect = data => {
    setChartSelect(data);
  };

  useEffect(() => {
    saveSettings();
    fetchCoinsList();
  }, []);
  useEffect(() => {
    if (page === "dashboard") {
      fetchPrices();
    }
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (page === "dashboard" && currentFavorite) {
      fetchHistorical();
    }
    // eslint-disable-next-line
  }, [page, currentFavorite, chartSelect]);

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
        isFavorites,
        filteredCoins,
        changeFilteredCoins,
        prices,
        currentFavorite,
        changeCurrenFavorite,
        historical,
        changeChartSelect,
        chartSelect
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
