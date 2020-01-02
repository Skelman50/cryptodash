import React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px
  grid-template-columns: 180px auto 100px 100px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtomElement = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

function ControlButton({ name, active }) {
  return (
    <ControlButtomElement active={active}>
      {toProperCase(name)}
    </ControlButtomElement>
  );
}

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton name="dashboard" active />
      <ControlButton name="settings" />
    </Bar>
  );
};

export default AppBar;
