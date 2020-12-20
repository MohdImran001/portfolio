import "../styles/portfolio.css";

const Left = () => {
  return (
    <div className="project project-left mt-20 lg:mt-14 sm:mb-10 md:mb-20">
      <div className="project-image">
        <img src="./images/desktop/manage.jpg" alt="project" />
      </div>
      <div className="project-content">
        <h1 className="title">Manage</h1>
        <p className="text mt-6">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <a href="/" className="btn mt-8">
          view project
        </a>
      </div>
    </div>
  );
};

export default Left;
