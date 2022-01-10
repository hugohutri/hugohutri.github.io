import { CodeAlt } from "@styled-icons/boxicons-regular";
import { Button } from "./Button";

export const LinkButton = ({ href }: { href: string }) => (
  <Button
    icon={CodeAlt}
    onClick={() => window.open(href, "_blank")}
    label="Source"
  />
);
