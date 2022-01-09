/* eslint-disable jsx-a11y/anchor-is-valid */
import { ExitFullscreen, Fullscreen } from "@styled-icons/boxicons-regular";
import { FC, useState } from "react";
import styled from "styled-components";
import { Project, Year } from "../../../assets/project-list";
import { Button } from "./Button";
import { CloseButton } from "./CloseButton";
import { Images } from "./Images";
import { LinkButton } from "./LinkButton";
import { ProjectIcon } from "./ProjectIcon";

const CardTitle = styled.h1.attrs({
  className: "text-2xl font-semibold text-gray-700 capitalize dark:text-white ",
})``;

const CardText = styled.p.attrs({
  className: "text-gray-500 dark:text-gray-200 font-semibold",
})``;

const YearText = styled.p.attrs({
  className: "text-gray-500 dark:text-gray-200 font-semibold mt-auto",
})`
  vertical-align: text-bottom;
`;

const CardTop = styled.div.attrs({
  className: "flex flex-col space-y-3",
})``;

const CardBottom = styled.div.attrs({
  className: "mt-auto pt-3 flex space-x-3",
})``;

const Row = styled.div.attrs({
  className: "flex flex-row space-x-3",
})``;

const BackgroundDim = styled.div.attrs({
  className:
    "w-screen h-screen backdrop-blur-[4px] bg-white/90 dark:bg-neutral-900/90 fixed top-0",
})``;

const CardContainer: FC<{ isModal: boolean }> = (props) => {
  return (
    <div
      className={`p-8 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex flex-col  ${
        props.isModal
          ? "absolute mt-auto z-90 bg-white dark:bg-neutral-900 "
          : ""
      }`}
    >
      {props.children}
    </div>
  );
};
export const Card = (props: Project) => {
  const { title, description, link, icon, year } = props;
  const [isModal, setIsModal] = useState(false);

  // "hover:absolute hover:bottom-0 hover:top-0 hover:z-10"

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
          <CardText>{description}</CardText>
          <Images isModal={isModal} />
        </CardTop>
        <CardBottom>
          {link && <LinkButton href={link} />}
          <Button
            icon={isModal ? ExitFullscreen : Fullscreen}
            onClick={() => setIsModal(!isModal)}
          />
        </CardBottom>
      </CardContainer>
    </>
  );
};

const yearToString = (year: Year) => {
  if (typeof year === "number") return `${year}`;
  return `${year.from}  -  ${year?.to ?? ""}`;
};
