import { HeadingProps } from "../../types/types";

const Heading: React.FC<HeadingProps> = ({ headingText, fontSize, zIndex }) => {
  return (
    <h2
      className={`${fontSize} ${zIndex} font-grandslang text-brown mb-6 lg:mb-7 relative`}
    >
      {headingText}
    </h2>
  );
};

export default Heading;
