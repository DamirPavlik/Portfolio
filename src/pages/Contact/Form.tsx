import { useState } from "react";
import { Button } from "../../components";
import { useForm } from "../../hooks/useForm";
import {
  EmailJSApiResolve,
  ErrorsObject,
  FormErrors,
  FormProps,
  FormValues,
} from "../../types/types";
import emailjs from "@emailjs/browser";

const Form: React.FC<FormProps> = ({ setEmailSendingMessage }) => {
  const [values, handleValues] = useForm({
    fullName: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState<FormErrors[]>([]);

  let errorsObject: ErrorsObject = Object.assign({}, ...errors);

  const checkFieldLength = (formValues: FormValues) => {
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

  const isValidEmail = (email: string) => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_REGEX.test(email)) {
      setErrors((prevState: any) => [
        ...prevState,
        { email: "Email is Invalid" },
      ]);
      return false;
    }
    return true;
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_7aem87f",
        "template_8eodo6f",
        values as unknown as Record<string, unknown>,
        "CDKPFEnAPM1IXLS5G"
      )
      .then(
        (res: EmailJSApiResolve) => {
          setEmailSendingMessage("Email Sent Successfully!");
        },
        (error) => {
          setEmailSendingMessage("Email Was Not Sent");
        }
      );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors([]);

    if (isValidEmail(values.email) && checkFieldLength(values)) {
      setEmailSendingMessage("Email Sending...");
      sendEmail();
      values.fullName = "";
      values.email = "";
      values.subject = "";
      values.body = "";
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST">
      <div className="grid grid-cols-12 mb-4 lg:mb-5">
        <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0 lg:mr-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={values.fullName}
            onChange={handleValues}
            className="block w-full bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] outline-none"
          />
          {errorsObject.fullName && (
            <div className="text-[#c62727] font-medium mt-2">
              {errorsObject.fullName}
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleValues}
            className="block w-full bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] outline-none"
          />
          {errorsObject.email && (
            <div className="text-[#c62727] font-medium mt-2">
              {errorsObject.email}
            </div>
          )}
        </div>
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={values.subject}
        onChange={handleValues}
        className="block w-full  bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] outline-none"
      />
      {errorsObject.subject && (
        <div className="text-[#c62727] font-medium mt-2">
          {errorsObject.subject}
        </div>
      )}

      <textarea
        cols={30}
        rows={10}
        placeholder="Body"
        name="body"
        value={values.body}
        onChange={handleValues}
        className="block w-full bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] mt-4 lg:mt-5 outline-none"
      ></textarea>
      {errorsObject.body && (
        <div className="text-[#c62727] font-medium mt-2">
          {errorsObject.body}
        </div>
      )}
      <div className="mt-4 lg:mt-5">
        <Button buttonText="Send" align="text-right" />
      </div>
    </form>
  );
};

export default Form;
