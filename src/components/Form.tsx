import { Button } from ".";
import { useForm } from "../hooks/useForm";

const Form = () => {
  const [values, handleValues] = useForm({
    fullName: "",
    email: "",
    subject: "",
    body: "",
  });

  return (
    <form>
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
        </div>
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={values.subject}
        onChange={handleValues}
        className="block w-full mb-4 lg:mb-5 bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] outline-none"
      />
      <textarea
        cols={30}
        rows={10}
        placeholder="Body"
        name="body"
        value={values.body}
        onChange={handleValues}
        className="block w-full bg-blueish drop-shadow-lg p-[14px] rounded-[7px] placeholder:text-[14px] mb-4 lg:mb-5 outline-none"
      ></textarea>
      <Button buttonText="Send" align="text-right" />
    </form>
  );
};

export default Form;
