import styled from "styled-components";
import Projects from "./Projects/Projects";

const Background = styled.div.attrs({
  className:
    "w-screen h-screen bg-white dark:bg-neutral-900 fixed transition-colors duration-1000",
})``;

const Wrapper = styled.div.attrs({
  className: "container mx-auto px-4 pt-48 pb-10 relative",
})``;

const PageContainer = () => {
  return (
    <>
      <Background />
      <Wrapper>
        <Projects />
      </Wrapper>
    </>
  );
};

export default PageContainer;
