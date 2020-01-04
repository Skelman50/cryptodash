import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/app/appContext";
import { SelectableTile } from "../ui/Tile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const CoinGrid = () => {
  const appContext = useContext(AppContext);
  const { coins } = appContext;
  return (
    <CoinGridStyled>
      {Object.keys(coins).map(coinKey => (
        <SelectableTile key={coinKey}>{coinKey}</SelectableTile>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
