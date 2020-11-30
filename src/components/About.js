import { Link } from "react-router-dom";

import "../styles/about.css";

const About = () => {
  return (
    <section className="mt-48">
      <div className="container-fluid flex space-x-32">
        <div className="profile-image">
          <img src="./images/desktop/profile.jpg" alt="my-profile-pic" />
        </div>
        <article id="about-me">
          <h1 className="title">About Me</h1>
          <p className="text mt-6 mb-8">
            I’m an aspiring front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Delhi, India, but I’m happy working remotely.
            When I’m not coding, you’ll find me outdoors. I love being out in
            nature whether that’s going for a walk, run or playing football. I’d
            love you to check out my work.
          </p>
          <Link to="/portfolio" className="btn uppercase">
            go to portfolio
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
