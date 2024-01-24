import { useContext } from "react";
import { HeadingProps } from "../../types/types";
import { ReactTyped } from "react-typed";
import { LoadingContext } from "../layout/Layout";

const Heading: React.FC<HeadingProps> = ({
  headingText,
  fontSize,
  additionalStyles,
}) => {
  const loading = useContext(LoadingContext);
  return (
    <h2
      className={`${fontSize} font-grandslang text-brown mb-6 lg:mb-7 relative ${additionalStyles}`}
    >
      {loading === 100 && (
        <ReactTyped
          className="font-grandslang"
          strings={[headingText]}
          typeSpeed={80}
        />
      )}
    </h2>
  );
};

export default Heading;
