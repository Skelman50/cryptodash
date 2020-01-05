import React, { useContext, Fragment } from "react";
import { AppContext } from "../../context/app/appContext";

const Content = ({ children }) => {
  const appContext = useContext(AppContext);
  const { coins, prices, firstVisit } = appContext;
  if (!coins) {
    return <div>Loading coins...</div>;
  }
  if (!firstVisit && !prices) {
    return <div>Loading prices...</div>;
  }
  return <Fragment>{children}</Fragment>;
};

export default Content;
