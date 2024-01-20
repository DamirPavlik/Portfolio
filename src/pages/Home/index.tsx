import Hero from "./Hero";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="grid grid-cols-12  h-screen lg:items-center">
      <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-[90%] lg:-ml-[30px]">
        <Hero />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
