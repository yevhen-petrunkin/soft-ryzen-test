"use client";

import { IStylishButtonProps } from "@/interfaces/IStylishButtonProps";

import { useTextProps } from "@/hooks";

import { Link } from "react-scroll";

const StylishButton: React.FC<IStylishButtonProps> = ({
  text,
  size,
  line,
  type,
  wider,
  lowercase,
  weight,
  color,
  customClass,
  onClick,
  link,
}) => {
  const { fontSize, lineHeight } = useTextProps({ size, line });

  const fontWeight = weight ? weight : 400;
  const textColor = color ? color : "#ffffff";

  return (
    <button
      style={{ fontSize, fontWeight, color: textColor, lineHeight }}
      className={`${lowercase ? "lowercase" : "uppercase"} ${
        wider && "tracking-[0.1em]"
      } stylish-btn ${customClass && customClass}`}
      type={type ? type : "button"}
      onClick={onClick}
      aria-label={`${text} button`}
    >
      <Link to={link} spy={true} smooth={true} offset={0} duration={1000}>
        {text}
      </Link>
    </button>
  );
};

export default StylishButton;
