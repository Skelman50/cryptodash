import React, { useContext } from "react";
import { Welcome } from "../ui/WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import { AppContext } from "../../context/app/appContext";
import Page from "../page/Page";
import CoinGrid from "../coin-grid/CoinGrid";

const WelcomeMessage = () => {
  const appContext = useContext(AppContext);
  const { firstVisit } = appContext;

  return (
    <Page name="settings">
      {firstVisit && (
        <Welcome>
          Hello from cryptodashboard. Please enter your favorit coin!
        </Welcome>
      )}
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
};

export default WelcomeMessage;
