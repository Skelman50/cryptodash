import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/app/appContext";
import { color3, fontSize1, greenBoxShadow } from "../ui/styles";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => {
  const appContext = useContext(AppContext);
  const { confirmFavorites } = appContext;
  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
};

export default ConfirmButton;
