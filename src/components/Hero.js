import "../styles/hero.css";
const Hero = () => {
  return (
    <section className="mt-14">
      <div className="container-fluid relative">
        <div className="hero__image"></div>
        <div className="hero__content">
          <h1 className="heading">
            Hey, I’m <span className="underline">Mohd Imran</span> and I love
            building beautiful websites
          </h1>
          <a href="#about-me" id="aboutme" className="flex mt-12 w-48">
            <div className="btn-aboutme__icon p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#5FB4A2"
                  className="icon"
                >
                  <path d="M0 9l8 4 8-4"></path>
                  <path opacity=".5" d="M0 5l8 4 8-4"></path>
                  <path opacity=".25" d="M0 1l8 4 8-4"></path>
                </g>
              </svg>
            </div>
            <div className="btn-aboutme__content uppercase font-sans py-4 px-8 text-xs">
              About me
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
