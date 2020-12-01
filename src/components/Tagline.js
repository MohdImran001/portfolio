import { Link } from "react-router-dom";

import "../styles/tagline.css";

const Tagline = () => {
  return (
    <section className="lg:mt-48 sm:mt-32 md:mt-32 mt-32">
      <div className="container-fluid flex space-x-6 tagline">
        <h1 className="title tagline__title">
          Interested in doing a project together?
        </h1>
        <div className="tagline__line"></div>
        <Link to="/contact" className="btn mt-3">
          contact me
        </Link>
      </div>
    </section>
  );
};

export default Tagline;
