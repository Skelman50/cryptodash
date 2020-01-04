import React, { Fragment, useContext, useEffect } from "react";
import { Welcome } from "../components/ui/WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import { AppContext } from "../context/app/appContext";

const WelcomeMessage = () => {
  const appContext = useContext(AppContext);
  const { firstVisit, saveSettings } = appContext;
  console.log(firstVisit);
  useEffect(() => {
    saveSettings();
  }, [saveSettings]);
  return (
    <Fragment>
      {firstVisit && (
        <Welcome>
          Hello from cryptodashboard. Please enter your favorit coin!
        </Welcome>
      )}
      <ConfirmButton />
    </Fragment>
  );
};

export default WelcomeMessage;
