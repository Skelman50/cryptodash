import React, { useContext } from "react";
import { AppContext } from "../../context/app/appContext";
import { SelectableTile } from "../ui/Tile";
import CoinHeaderGrid from "../coin-header-grid/CoinHeaderGrid";
import CoinImage from "../coin-image/CoinImage";

const CoinTile = ({ coinKey }) => {
  const appContext = useContext(AppContext);
  const { coins } = appContext;
  const coin = coins[coinKey];
  console.log(coin);
  return (
    <SelectableTile>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </SelectableTile>
  );
};

export default CoinTile;
