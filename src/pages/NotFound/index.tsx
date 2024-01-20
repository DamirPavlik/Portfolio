import { Heading } from "../../components";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <Heading
        fontSize="lg:text-[11vw] text-[19vw]"
        headingText="404"
        additionalStyles="leading-none !mb-0"
      />
      <p>Page Not Found</p>
    </div>
  );
};

export default NotFound;
