import React from "react";
import "./Skills.css";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

function Skills() {
  return (
    <>
      <section id="skills">
        <h2 className="skills"> My Skills </h2>
        <br />
        <div className="card-deck">
          <div className="card-skills  ">
            <div className="card-body-skills ">
              <div className="skills-display">
                <SiJavascript className="js" /> <p>JavaScript</p>
                <GrReactjs className="react" /> <p>React</p>
                <ImHtmlFive className="html" /> <p>HTML5</p>
                <IoLogoCss3 className="cascade" /> <p>Css</p>
                <BsFillBootstrapFill className="bootstrap" /> <p>Bootstrap</p>
                <FaNode className="node" /> <p>Node.js</p>
                <SiExpress className="exprs" /> <p>Express</p>
                <SiPostgresql className="pstgrs" /> <p>PostgresSQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
