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

const getCoinToDisplay = (coins, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coins).slice(0, 100);
};

const CoinGrid = ({ topSection }) => {
  const appContext = useContext(AppContext);
  const { coins, favorites } = appContext;
  return (
    <CoinGridStyled>
      {getCoinToDisplay(coins, topSection, favorites).map((coinKey, idx) => (
        <CoinTile key={idx} coinKey={coinKey} topSection={topSection} />
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
