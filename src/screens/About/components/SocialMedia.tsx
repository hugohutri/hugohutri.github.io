import { FC } from "react";
import { SocialIcon as ReactSocialIcon } from "react-social-icons";
import styled from "styled-components";

const Url = {
  LINKEDIN: "https://www.linkedin.com/in/hugo-hutri",
  GITHUB: "https://github.com/hugohutri",
  INSTAGRAM: "https://www.instagram.com/huugooh",
};

const SocialIcon = styled(ReactSocialIcon).attrs({
  className: "m-2 sm:mt-48 mt-8",
})``;

const SocialIcons: FC<{ color: string }> = (props) => (
  <>
    <SocialIcon url={Url.GITHUB} bgColor={props.color} />
    <SocialIcon url={Url.LINKEDIN} bgColor={props.color} />
    <SocialIcon url={Url.INSTAGRAM} bgColor={props.color} />
  </>
);

const SocialMedia: FC<{}> = () => {
  return (
    <>
      <div className="center-content dark:block hidden">
        <SocialIcons color="#ccc" />
      </div>
      <div className="center-content dark:hidden block">
        <SocialIcons color="#444" />
      </div>
    </>
  );
};

export default SocialMedia;
