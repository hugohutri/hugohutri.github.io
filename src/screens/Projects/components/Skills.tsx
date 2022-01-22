import { FC } from "react";
import styled from "styled-components";
import { Skill } from "./Skill";

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
