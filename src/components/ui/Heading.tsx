import { HeadingProps } from "../../types/types";

const Heading: React.FC<HeadingProps> = ({
  headingText,
  fontSize,
  additionalStyles,
}) => {
  return (
    <h2
      className={`${fontSize} font-grandslang text-brown mb-6 lg:mb-7 relative ${additionalStyles}`}
    >
      {headingText}
    </h2>
  );
};

export default Heading;
