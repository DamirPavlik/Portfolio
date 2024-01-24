import { SetStateAction } from "react";
import { FormErrors } from "../types/types";

export const isValidEmail = (email: string, setErrors: React.Dispatch<SetStateAction<FormErrors[]>>) => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_REGEX.test(email)) {
      setErrors((prevState: FormErrors[]) => [
        ...prevState,
        { email: "Email is Invalid" },
      ]);
      return false;
    }
    return true;
};