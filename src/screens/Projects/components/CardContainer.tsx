import { FC } from "react";
import styled from "styled-components";

const CardBase = styled.div.attrs({
  className:
    "p-8 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex flex-col overflow-y-auto shadow-md shadow-blue-400/20",
})``;

const ModalContainer = styled.div.attrs({
  className:
    "container fixed mt-auto top-24 z-90 bg-white dark:bg-neutral-900 lg:w-2/5 left-1/2 -translate-x-1/2",
})``;

export const CardContainer: FC<{ isModal: boolean }> = (props) => {
  if (!props.isModal) return <CardBase>{props.children}</CardBase>;

  return (
    <ModalContainer>
      <CardBase>{props.children}</CardBase>
    </ModalContainer>
  );
};
