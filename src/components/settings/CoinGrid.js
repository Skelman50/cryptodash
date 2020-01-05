import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/app/appContext";
import CoinTile from "./CoinTIle";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

const getLowerSection = (filteredCoins, coins) => {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coins).slice(0, 100)
  );
};

const getCoinToDisplay = (coins, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getLowerSection(filteredCoins, coins);
};

const CoinGrid = ({ topSection }) => {
  const appContext = useContext(AppContext);
  const { coins, favorites, filteredCoins } = appContext;
  return (
    <CoinGridStyled>
      {getCoinToDisplay(coins, topSection, favorites, filteredCoins).map(
        (coinKey, idx) => (
          <CoinTile key={idx} coinKey={coinKey} topSection={topSection} />
        )
      )}
    </CoinGridStyled>
  );
};

export default CoinGrid;
