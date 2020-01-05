import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/app/appContext";
import PriceTile from "./PriceTile";

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const PriceGrid = () => {
  const appContext = useContext(AppContext);
  const { prices } = appContext;
  return (
    <PriceGridStyled>
      {prices.map((price, idx) => (
        <PriceTile price={price} key={idx} index={idx} />
      ))}
    </PriceGridStyled>
  );
};

export default PriceGrid;
