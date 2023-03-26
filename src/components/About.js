import React from "react";
import "./About.css";
import resume from "../resume/Shadi-Haggag-Resume.pdf";

const About = () => {
  return (
    <>
      <section id="about">
        <div className=" card__about">
          <img className="me " src="./images/my-photo.jpg" alt="Myself" />
          <div>
            <h2>Hi, my name is Shadi Haggag</h2>

            <h3> Software Developer</h3>
            <p>
              In the past year I started my journey as a software developer,
              thanks to the guidance and training of Thinkful's Software
              Engineering Bootcamp. I have an insane curosity of how things
              work, spending hours watching videos and reading about the inner
              working of the mechanics that run the world, so naturally I found
              a passion in coding. Learning to code has had its ups & downs but
              the outcome was worth it, and there is still so much to learn and
              grow from. As a creative individual, coming from a background
              education in Finance and a career in the Insurance industry, I
              felt as if my individuality was dwindling away. My one take away
              from all this is that there is no creative boundries in code!
            </p>
            <a href={resume} download className="btn ">
              Download Resume
            </a>

            <a href="#contact" className="btn ">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
