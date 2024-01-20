import { ChangeEvent, SetStateAction } from "react";

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

export interface ExperienceTabsContentProps {
    activeTab: number;
}

export interface HeadingProps {
    headingText: string;
    fontSize: string;
    additionalStyles?: string;
}

export interface ExperienceTabsProps {
    activeTab: number;
    handleTabClick: (tabNumber: number) => void;
}

export interface SubheadingProps {
    text: string;
}

export interface EmailJSApiResolve {
    status: number,
    text: string
}

export interface FormErrors {
    [key: string]: string
}

export interface FormProps {
    setEmailSendingMessage: React.Dispatch<SetStateAction<string>>
}

export type ErrorsObject = Record<string, string>

export interface FormErrorMessageProps {
    message: string
}