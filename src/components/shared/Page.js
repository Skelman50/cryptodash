import React, { useContext, Fragment } from "react";
import { AppContext } from "../../context/app/appContext";

const Page = ({ name, children }) => {
  const appContext = useContext(AppContext);
  const { page } = appContext;
  return page === name && <Fragment>{children}</Fragment>;
};

export default Page;
