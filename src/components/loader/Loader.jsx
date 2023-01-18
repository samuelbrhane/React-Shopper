import React from "react";
import loader from "../../assets/loader.gif";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={loader} alt="loader" />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: calc(100vh -100px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  img {
    width: 140px;
    border-radius: 0.6rem;
  }
`;

export default Loader;
