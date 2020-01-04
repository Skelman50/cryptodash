import React, { useContext } from "react";
import { AppContext } from "../../context/app/appContext";
import { SelectableTile, DeletableTile } from "../ui/Tile";
import CoinHeaderGrid from "../coin-header-grid/CoinHeaderGrid";
import CoinImage from "../coin-image/CoinImage";

const CoinTile = ({ coinKey, topSection }) => {
  const appContext = useContext(AppContext);
  const { coins } = appContext;
  const coin = coins[coinKey];
  let Content = SelectableTile;
  if (topSection) {
    Content = DeletableTile;
  }
  return (
    <Content>
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
