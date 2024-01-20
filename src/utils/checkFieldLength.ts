import { SetStateAction } from "react";
import { FormErrors, FormValues } from "../types/types";

export const checkFieldLength = (formValues: FormValues, setErrors: React.Dispatch<SetStateAction<FormErrors[]>>) => {
    let isValid = true;
    Object.entries(formValues).forEach(([key, value]) => {
      if (value.length < 3) {
        setErrors((prevState: FormErrors[]) => [
          ...prevState,
          { [key]: `${key} must be atleast 3 characters long` },
        ]);
        isValid = false;
      }
    });
    return isValid;
  };