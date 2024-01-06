import { ChangeEvent } from "react";

export interface ButtonProps {
    buttonText: string,
    align?: string
}

export interface FormValues {
    fullName: string;
    email: string;
    subject: string;
    body: string;
};
  
export type UseFormHook = [
    FormValues,
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
];