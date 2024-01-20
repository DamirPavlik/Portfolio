import { useState } from "react";
import { Button } from "../../components";
import { useForm } from "../../hooks/useForm";
import { ErrorsObject, FormErrors, FormProps } from "../../types/types";
import { sendEmail } from "../../utils/sendEmail";
import FormErrorMessage from "./FormErrorMessage";
import { isValidEmail } from "../../utils/isValidEmail";
import { checkFieldLength } from "../../utils/checkFieldLength";

const Form: React.FC<FormProps> = ({ setEmailSendingMessage }) => {
  const [values, handleValues] = useForm({
    fullName: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState<FormErrors[]>([]);

  let errorsObject: ErrorsObject = Object.assign({}, ...errors);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors([]);

    if (
      isValidEmail(values.email, setErrors) &&
      checkFieldLength(values, setErrors)
    ) {
      setEmailSendingMessage("Email Sending...");
      sendEmail({ values, setEmailSendingMessage });
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
            <FormErrorMessage message={errorsObject.fullName} />
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
            <FormErrorMessage message={errorsObject.email} />
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
        <FormErrorMessage message={errorsObject.subject} />
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
      {errorsObject.body && <FormErrorMessage message={errorsObject.body} />}
      <div className="mt-4 lg:mt-5">
        <Button buttonText="Send" align="text-right" />
      </div>
    </form>
  );
};

export default Form;
