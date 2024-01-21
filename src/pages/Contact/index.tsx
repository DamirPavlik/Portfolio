import { useState } from "react";
import { Heading, Subheading } from "../../components";
import Form from "./Form";

const Contact = () => {
  const [emailSendingMessage, setEmailSendingMessage] = useState<string>("");

  const handleCloseEmail = () => {
    setEmailSendingMessage("");
  };

  return (
    <div className="pt-12 pb-8 lg:pb-0 lg:pt-5 relative">
      {emailSendingMessage && (
        <>
          <p
            className="absolute -right-3 top-7 bg-[#fff] py-1 px-[10px] rounded-[50%] z-10 font-semibold drop-shadow-md select-none cursor-pointer"
            onClick={handleCloseEmail}
          >
            X
          </p>
          <div className="absolute right-0 top-10 bg-[#fff] px-6 py-9 rounded-md drop-shadow-md">
            <p>{emailSendingMessage}</p>
          </div>
        </>
      )}
      <Heading headingText="Contact" fontSize="text-[19vw] lg:text-[11vw]" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 mb-10 lg:mb-0 ">
          <Subheading text="Get in touch" />
          <p className="lg:text-base text-sm text-gray mb-3">
            Send me a brief message and I will respond to you promptly.
          </p>
          <p className="lg:text-base text-sm text-gray">
            Email: <u>damir.pavlik@gmail.com</u>
          </p>
          <p className="lg:text-base text-sm text-gray">
            On the internet:{" "}
            <a href="#" className="text-gray underline">
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="#" className="text-gray underline">
              GitHub
            </a>
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Form setEmailSendingMessage={setEmailSendingMessage} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Contact;
