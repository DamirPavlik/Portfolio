const Hero = () => {
  return (
    <>
      <h1 className="text-xl font-medium tracking-wider">Damir Pavlik</h1>
      <div className="my-8">
        <p className="lg:text-base text-sm text-gray mb-2">
          Front End Web Developer / UI UX Designer
        </p>
        <p className="lg:text-base text-sm text-gray">
          {/* Transforming Visions into Engaging Digital Experiences */}
          Creating engaging experiences that awaken{" "}
          <br className="lg:block hidden " />
          people in the post-print era.
        </p>
      </div>
      <p className="lg:text-base text-sm text-gray">
        Currently working at <br className="block lg:hidden" />
        <u>
          <a href="https://omnistreak.com/" target="_blank">
            OmniStreak Digital Solutions
          </a>
        </u>
      </p>
    </>
  );
};

export default Hero;
