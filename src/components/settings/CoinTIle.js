import React, { useContext } from "react";
import { AppContext } from "../../context/app/appContext";
import { SelectableTile, DeletableTile, DisableTile } from "../ui/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "./CoinImage";

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

const CoinTile = ({ coinKey, topSection }) => {
  const appContext = useContext(AppContext);
  const { coins, addCoin, removeCoin, isFavorites } = appContext;
  const coin = coins[coinKey];
  let Content = SelectableTile;
  if (topSection) {
    Content = DeletableTile;
  } else if (isFavorites(coinKey)) {
    Content = DisableTile;
  }
  return (
    <Content
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
      <CoinHeaderGrid
        name={coin.CoinName}
        symbol={coin.Symbol}
        topSection={topSection}
      />
      <CoinImage coin={coin} />
    </Content>
  );
};

export default CoinTile;
