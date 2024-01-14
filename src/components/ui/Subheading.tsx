import { SubheadingProps } from "../../types/types";

const Subheading: React.FC<SubheadingProps> = ({ text }) => {
  return (
    <h3 className="text-brown text-xl font-medium tracking-wider mb-[14px] lg:mb-4">
      {text}
    </h3>
  );
};

export default Subheading;
