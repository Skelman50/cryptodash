import React, { useContext } from "react";
import ConfirmButton from "./ConfirmButton";
import { AppContext } from "../../context/app/appContext";
import Page from "../shared/Page";
import CoinGrid from "./CoinGrid";
import WelcomeMessage from "./WelcomeMessage";
import Search from "./Search";

const Settings = () => {
  const appContext = useContext(AppContext);
  const { firstVisit } = appContext;

  return (
    <Page name="settings">
      <WelcomeMessage firstVisit={firstVisit} />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
};

export default Settings;
