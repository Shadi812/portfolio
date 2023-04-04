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
              Over the past year, I embarked on a journey as a software
              developer, thanks to the training and guidance provided by
              Thinkful's Software Engineering Bootcamp. Driven by an insatiable
              curiosity about how the world works, I spent countless hours
              watching videos and reading up on the mechanics that power it all,
              which naturally led me to discover a passion for coding. Although
              learning to code had its ups and downs, the end result was
              definitely worth it. I recognize that there is still much more to
              learn and grow from in this field.
            </p>
            <p>
              As a creative person who came from a background in Finance and
              previously worked in the Insurance industry, I felt like my
              individuality was being stifled. However, I realized that there
              are no limits to creativity in coding, which has been liberating.
              Overall, my takeaway from this experience is that there are
              endless opportunities for innovation and expression in the world
              of code.
            </p>
            <div className="about__item-CTA">
              <a href={resume} download className="about__btn ">
                Download Resume
              </a>

              <a href="#contact" className="about__btn ">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
