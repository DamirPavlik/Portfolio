import { FormErrorMessageProps } from "../../types/types";

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ message }) => {
  return <div className="text-[#c62727] font-medium mt-2">{message}</div>;
};

export default FormErrorMessage;
