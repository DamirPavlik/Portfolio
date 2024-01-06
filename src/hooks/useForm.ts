import { ChangeEvent, useState } from "react";
import { FormValues, UseFormHook } from "../types/types";

export const useForm = (initialValues: FormValues ): UseFormHook => {
  const [values, setValues]  = useState<FormValues>(initialValues)

  const handleValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleValues];
}