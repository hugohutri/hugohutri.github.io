import { FC } from "react";
import styled from "styled-components";

const Skill = styled.p.attrs({
  className:
    "px-1.5 py-0.5 mx-0.5 mb-1 rounded-full text-gray-500 dark:text-white bg-gray-200 dark:bg-gray-600 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition-colors duration-1000 ease",
})``;

const SkillRow = styled.div.attrs({
  className: "flex flex-wrap",
})``;

export const Skills: FC<{ skills: string[] }> = ({ skills }) => (
  <SkillRow>
    {skills.map((skill) => (
      <Skill>{skill}</Skill>
    ))}
  </SkillRow>
);
