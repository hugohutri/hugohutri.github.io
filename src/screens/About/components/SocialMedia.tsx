import { FC } from "react";
import { SocialIcon as ReactSocialIcon } from "react-social-icons";
import styled from "styled-components";

const SocialIcon = styled(ReactSocialIcon).attrs({
  className: "m-2 mt-48",
})``;

const SocialIcons: FC<{ color: string }> = (props) => (
  <>
    <SocialIcon url="https://github.com/hugohutri" bgColor={props.color} />
    <SocialIcon
      url="https://fi.linkedin.com/in/hugo-hutri-9401a815b"
      bgColor={props.color}
    />
    <SocialIcon url="https://www.instagram.com/huugooh" bgColor={props.color} />
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
