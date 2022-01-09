import styled from "styled-components";
import Projects from "./Projects/Projects";

const Background = styled.div.attrs({
  className:
    "w-screen h-screen bg-white dark:bg-neutral-900 fixed transition-colors duration-1000",
})``;

const Container = styled.div.attrs({
  className: "container mx-auto px-4 pt-48 pb-10 relative",
})``;

const PageContainer = () => {
  return (
    <>
      <Background />
      <Container>
        <Projects />
      </Container>
    </>
  );
};

export default PageContainer;
