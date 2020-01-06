import React, { useContext } from "react";
import styled from "styled-components";
import { Tile } from "../ui/Tile";
import { AppContext } from "../../context/app/appContext";
import CoinImage from "../shared/CoinImage";

const SpotlightName = styled.h2`
  text-align: center;
`;

const CoinSpotlight = () => {
  const appContext = useContext(AppContext);
  const { currentFavorite, coins } = appContext;
  return (
    <Tile>
      <SpotlightName>{coins[currentFavorite].CoinName}</SpotlightName>
      <CoinImage coin={coins[currentFavorite]} spotlight />
    </Tile>
  );
};

export default CoinSpotlight;
