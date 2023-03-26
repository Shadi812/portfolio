import React from "react";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("about");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <a
        href="#about"
        onClick={() => handleLinkClick("about")}
        className={activeLink === "about" ? "active" : ""}
      >
        About
      </a>
      <a
        href="#skills"
        onClick={() => handleLinkClick("skills")}
        className={activeLink === "skills" ? "active" : ""}
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={() => handleLinkClick("projects")}
        className={activeLink === "projects" ? "active" : ""}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => handleLinkClick("contact")}
        className={activeLink === "contact" ? "active" : ""}
      >
        Contact
      </a>
    </nav>
  );
}

//     <nav>
//       <a
//         href="#About"
//         onClick={() => setActive("#About")}
//         className={active === "#About" ? "active" : ""}
//       >
//         {" "}
//         About{" "}
//       </a>
//       <a
//         href="#skils"
//         onClick={() => setActive("#skills")}
//         className={active === "#skills" ? "active" : ""}
//       >
//         {" "}
//         Skills{" "}
//       </a>
//       <a
//         href="#projects"
//         onClick={() => setActive("#projects")}
//         className={active === "#Projects" ? "active" : ""}
//       >
//         {" "}
//         Projects
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setActive("#contact")}
//         className={active === "#contact" ? "active" : ""}
//       >
//         Contact
//       </a>
//     </nav>
//   );
// };

export default Navbar;
