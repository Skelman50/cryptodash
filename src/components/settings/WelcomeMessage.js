import React from "react";
import { Welcome } from "../ui/WelcomeMessage";

const WelcomeMessage = ({ firstVisit }) => {
  return (
    firstVisit && (
      <Welcome>
        Hello from cryptodashboard. Please enter your favorit coin!
      </Welcome>
    )
  );
};

export default WelcomeMessage;
