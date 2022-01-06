import React, { FC } from "react";
import styled from "styled-components";
import Home from "./Home/Home";
const backgroundImage = require("../assets/bg.jpg");

const Wrapper = styled.div`
  padding: 3%;
  height: max(100vh, 100%);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  -moz-backdrop-filter: blur(13px);
  -ms-backdrop-filter: blur(13px);
  -o-backdrop-filter: blur(13px);
  backdrop-filter: url("data:image/svg+xml;utf9,<svg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'><filter%20id='blur'><feGaussianBlur%20stdDeviation='3'%20/></filter></svg>#blur");
  backdrop-filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
  background-color: #0009;
`;

const Background = styled.div`
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const PageContainer: FC<{}> = () => {
  return (
    <>
      <Background />
      <Wrapper className="container">
        <Home />
      </Wrapper>
    </>
  );
};

export default PageContainer;
