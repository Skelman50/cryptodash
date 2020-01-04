import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/app/appContext";
import CoinTile from "../coin-tile/CoinTIle";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const getCoinToDisplay = coins => {
  return Object.keys(coins).slice(0, 100);
};

const CoinGrid = () => {
  const appContext = useContext(AppContext);
  const { coins } = appContext;
  return (
    <CoinGridStyled>
      {getCoinToDisplay(coins).map(coinKey => (
        <CoinTile key={coinKey} coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
