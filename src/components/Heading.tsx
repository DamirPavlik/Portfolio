import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ headingText, fontSize }) => {
  return (
    <h2 className={`${fontSize} font-grandslang text-brown mb-6 lg:mb-7`}>
      {headingText}
    </h2>
  );
};

export default Heading;
