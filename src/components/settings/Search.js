import React, { useContext } from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../ui/styles";
import { AppContext } from "../../context/app/appContext";
import fuzzy from "fuzzy";
import _ from "lodash";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`;

const Search = () => {
  const appContext = useContext(AppContext);
  const { changeFilteredCoins, coins } = appContext;

  const filterCoins = _.debounce((inputValue, coins, changeFilteredCoins) => {
    if (!inputValue) {
      return changeFilteredCoins(null);
    }
    const coinsSymbols = Object.keys(coins);
    const coinsNames = coinsSymbols.map(sym => coins[sym].CoinName);
    const allStringsToSearch = coinsSymbols.concat(coinsNames);
    const fuzzyResult = fuzzy
      .filter(inputValue, allStringsToSearch, {})
      .map(result => result.string);
    const filteredCoin = _.pickBy(coins, (result, symKey) => {
      const coinName = result.CoinName;
      return (
        _.includes(fuzzyResult, symKey) || _.includes(fuzzyResult, coinName)
      );
    });
    changeFilteredCoins(filteredCoin);
  }, 500);
  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <SearchInput
        onKeyUp={e => filterCoins(e.target.value, coins, changeFilteredCoins)}
      />
    </SearchGrid>
  );
};

export default Search;
