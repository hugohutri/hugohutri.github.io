import { FC } from "react";
import styled from "styled-components";

const image = require("../../../assets/images/profile.jpg");

const ProfileImg = styled.img.attrs({
  className: "rounded-full w-64 m-10",
})``;

const ImageContainer = styled.div.attrs({
  className: "flex justify-center",
})``;

const ProfilePicture: FC<{}> = () => {
  return (
    <ImageContainer>
      <ProfileImg src={image} alt="Hugo" />
    </ImageContainer>
  );
};

export default ProfilePicture;
