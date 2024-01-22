import { useContext, useState } from "react";
import { Button } from "../../components";
import { useForm } from "../../hooks/useForm";
import { ErrorsObject, FormErrors, FormProps } from "../../types/types";
import FormErrorMessage from "./FormErrorMessage";
import { checkFieldLength, sendEmail, isValidEmail } from "../../utils/";
import { LoadingContext } from "../../components/layout/Layout";
import { motion } from "framer-motion";

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

  const loading = useContext(LoadingContext);

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST">
      <div className="grid grid-cols-12 mb-4 lg:mb-5">
        <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0 lg:mr-5">
          <motion.input
            initial={{ y: 20, opacity: 0 }}
            animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
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
          <motion.input
            initial={{ y: 20, opacity: 0 }}
            animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
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
      <motion.input
        initial={{ y: 20, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.4,
        }}
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

      <motion.textarea
        initial={{ y: 20, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.5,
        }}
        cols={30}
        rows={10}
        placeholder="Body"
        name="body"
        value={values.body}
        onChange={handleValues}
        className="block w-full bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] mt-4 lg:mt-5 outline-none"
      ></motion.textarea>
      {errorsObject.body && <FormErrorMessage message={errorsObject.body} />}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={loading === 100 ? { y: 0, opacity: 1 } : undefined}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.6,
        }}
        className="mt-4 lg:mt-5"
      >
        <Button buttonText="Send" align="text-right" />
      </motion.div>
    </form>
  );
};

export default Form;
