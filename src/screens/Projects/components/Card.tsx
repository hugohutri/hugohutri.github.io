/* eslint-disable jsx-a11y/anchor-is-valid */
import { ExitFullscreen, Fullscreen } from "@styled-icons/boxicons-regular";
import { useState } from "react";
import styled from "styled-components";
import { Project, Year } from "../../../assets/project-list";
import { Button } from "./Button";
import { Text } from "../../../components/Text";
import { CloseButton } from "./CloseButton";
import { Images } from "./Images";
import { LinkButton } from "./LinkButton";
import { ProjectIcon } from "./ProjectIcon";
import { Skills } from "./Skills";
import { CardContainer } from "./CardContainer";

const CardTitle = styled.h1.attrs({
  className: "text-2xl font-semibold text-gray-700 capitalize dark:text-white ",
})``;

const YearText = styled.p.attrs({
  className:
    "text-gray-500 dark:text-gray-200 font-semibold mt-auto align-text-bottom",
})``;

const CardTop = styled.div.attrs({
  className: "flex flex-col space-y-3",
})``;

const CardBottom = styled.div.attrs({
  className: "mt-auto pt-5 flex space-x-3",
})``;

const Row = styled.div.attrs({
  className: "flex flex-row space-x-3",
})``;

const BackgroundDim = styled.div.attrs({
  className: "w-screen h-screen bg-white/90 dark:bg-neutral-900/90 fixed top-0",
})``;

export const Card = (props: Project) => {
  const { title, description, repo: link, icon, year, images, skills } = props;
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && <BackgroundDim />}

      <CardContainer isModal={isModal}>
        <CardTop>
          {isModal && <CloseButton onClick={() => setIsModal(!isModal)} />}
          <Row>
            <ProjectIcon icon={icon} />
            <YearText>{yearToString(year)}</YearText>
          </Row>
          <CardTitle>{title}</CardTitle>
          <Skills skills={skills} />
          <Text>{description}</Text>
          <Images isModal={isModal} images={images} />
        </CardTop>

        <CardBottom>
          {link && <LinkButton href={link} />}
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

const yearToString = (year: Year) => {
  if (typeof year === "number") return `${year}`;
  return `${year.from}  -  ${year?.to ?? ""}`;
};
