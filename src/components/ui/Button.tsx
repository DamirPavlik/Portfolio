import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({ buttonText, align }) => {
  return (
    <div className={align}>
      <button className="bg-brown text-beige rounded-[4px] py-[5px] px-[20px] text-sm">
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
