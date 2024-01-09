import { Form, Heading } from "../components";

const Contact = () => {
  return (
    <div className="pt-12 pb-8 lg:pb-0 lg:pt-5 ">
      <Heading headingText="Contact" fontSize="text-[19vw] lg:text-[11vw]" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 mb-10 lg:mb-0 ">
          <h3 className="text-brown text-xl font-medium tracking-wider mb-[14px] lg:mb-4">
            Get In Touch
          </h3>
          <p className="text-sm text-gray mb-3">
            Send me a brief message and I will respond to you promptly.
          </p>
          <p className="text-sm text-gray">
            Email: <u>damir.pavlik@gmail.com</u>
          </p>
          <p className="text-sm text-gray">
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
          <Form />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Contact;
