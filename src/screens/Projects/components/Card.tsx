/* eslint-disable jsx-a11y/anchor-is-valid */
import { ExitFullscreen, Fullscreen } from "@styled-icons/boxicons-regular";
import { useState } from "react";
import styled from "styled-components";
import { Project } from "../../../assets/project-list";
import { Button } from "./Button";
import { CardContainer } from "./CardContainer";
import { CardTopContent } from "./CardTopContent";
import { CloseButton } from "./CloseButton";
import { Images } from "./Images";
import { LinkButton } from "./LinkButton";

const CardTop = styled.div.attrs({
  className: "flex flex-col space-y-3",
})``;

const CardBottom = styled.div.attrs({
  className: "mt-auto pt-5 flex space-x-3",
})``;

const BackgroundDim = styled.div.attrs({
  className: "w-screen h-screen bg-white/90 dark:bg-neutral-900/90 fixed top-0",
})``;

export const Card = (props: Project) => {
  const { repo, images } = props;
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && <BackgroundDim />}

      <CardContainer isModal={isModal}>
        <CardTop>
          {isModal && <CloseButton onClick={() => setIsModal(!isModal)} />}
          <CardTopContent {...props} />
          <Images isModal={isModal} images={images} />
        </CardTop>

        <CardBottom>
          {repo && <LinkButton href={repo} />}
          {images && (
            <Button
              icon={isModal ? ExitFullscreen : Fullscreen}
              onClick={() => setIsModal(!isModal)}
              label={isModal ? "Minimize" : "Show image"}
            />
          )}
        </CardBottom>
      </CardContainer>
    </>
  );
};
