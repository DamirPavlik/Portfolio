import { Navigation } from "../components/index";

const Home = () => {
  return (
    <div className="grid grid-cols-12 h-screen lg:items-center">
      <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-[90%] lg:-ml-[30px]">
        <h1 className="text-xl font-medium tracking-wider">Damir Pavlik</h1>
        <div className="my-8">
          <p className="text-sm text-gray">
            Front End Web Developer / UI UX Designer
          </p>
          <p className="text-sm text-gray">
            Transforming Visions into Engaging Digital Experiences
          </p>
        </div>
        <p className="text-sm text-gray">
          Currently working at <br className="block lg:hidden" />
          <u>
            <a href="https://omnistreak.com/" target="_blank">
              OmniStreak Digital Solutions
            </a>
          </u>
        </p>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
