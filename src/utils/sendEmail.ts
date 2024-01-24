import { EmailJSApiResolve, FormValues } from "../types/types";
import emailjs from "@emailjs/browser";

export const sendEmail = ({values, setEmailSendingMessage}: {values: FormValues, setEmailSendingMessage: React.Dispatch<React.SetStateAction<string>>}) => {
    emailjs
      .send(
        "service_7aem87f",
        "template_8eodo6f",
        values as unknown as Record<string, unknown>,
        "CDKPFEnAPM1IXLS5G"
      )
      .then(
        (res: EmailJSApiResolve) => {
          console.log(res);
          setEmailSendingMessage("Email Sent Successfully!");
        },
        (error: EmailJSApiResolve) => {
          console.log(error)
          setEmailSendingMessage("Email Was Not Sent");
        }
      );
  };