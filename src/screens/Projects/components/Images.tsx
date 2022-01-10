import { FC } from "react";
import styled from "styled-components";

const Image = styled.img.attrs({
  className: "block w-full rounded-lg bg-black",
})``;

export const Images: FC<{ isModal: boolean; images?: string[] }> = (props) => {
  if (!props.isModal) return null;
  if (!props.images) return null;
  return (
    <div className="overflow-auto">
      {props.images.map((imageName) => (
        <Image
          src={require(`../../../assets/images/${imageName}`)}
          alt={imageName}
        />
      ))}
    </div>
  );
};
