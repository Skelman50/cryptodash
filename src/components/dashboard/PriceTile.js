import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../ui/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../ui/styles";
import { CoinHeaderGridStyled } from "../settings/CoinHeaderGrid";
import { AppContext } from "../../context/app/appContext";

const numberFormat = number => {
  return +(number + "").slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3}
      grid-gap: 5px;
      grid-template-columns: repeat(3 1fr);
    `}
  ${props =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow}
      pointer0events: none;
    `}
`;

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: ${props => (props.red ? "red" : "green")};
`;

const ChangePercent = ({ data }) => {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  );
};

const PriceTileContent = ({
  sym,
  data,
  compact,
  currentFavorite,
  changeCurrenFavorite
}) => {
  return (
    <PriceTileStyled
      compact={compact}
      currentFavorite={currentFavorite}
      onClick={changeCurrenFavorite}
    >
      <CoinHeaderGridStyled>
        <JustifyLeft>{sym}</JustifyLeft>
        <ChangePercent data={data} />
        {!compact ? (
          <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
        ) : (
          <div>${numberFormat(data.PRICE)}</div>
        )}
      </CoinHeaderGridStyled>
    </PriceTileStyled>
  );
};

const PriceTile = ({ price, index }) => {
  const appContext = useContext(AppContext);
  const { currentFavorite, changeCurrenFavorite } = appContext;
  const sym = Object.keys(price)[0];
  const data = price[sym] && price[sym]["USD"];
  const compact = index > 4;
  return (
    <PriceTileContent
      sym={sym}
      data={data}
      compact={compact}
      currentFavorite={currentFavorite === sym}
      changeCurrenFavorite={() => changeCurrenFavorite(sym)}
    />
  );
};

export default PriceTile;
