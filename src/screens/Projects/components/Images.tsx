import { FC } from "react";
import styled from "styled-components";

const image1 = require("../../../assets/images/picatso1.png");
const image2 = require("../../../assets/images/picatso2.jpg");

const Image = styled.img.attrs({
  //   className: "rounded-lg w-1/2",
  className: "block w-full rounded-lg",
})``;

export const Images: FC<{ isModal: boolean }> = (props) => {
  if (!props.isModal) return null;
  return (
    <div className="columns-1 md:columns-2 space-y-4">
      <Image src={image1} alt="picatso" />
      <Image src={image2} alt="picatso" />
    </div>
  );
};
