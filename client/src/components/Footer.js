import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center bg-white text-dark border border-dark">
      <div>
        <div>
          <div>
            <i className="bi bi-c-circle"></i> 2023{" "}
            <a
              href="https://github.com/AMess33"
              target="_blank"
              className="text-dark"
            >
              <i className="bi bi-github"></i>
            </a>
            Andrew Messer,{" "}
            <a
              href="https://github.com/jboyce313"
              target="_blank"
              className="text-dark"
            >
              <i className="bi bi-github"></i>
            </a>
            Jacob Boyce, and{" "}
            <a
              href="https://github.com/kitrath"
              target="_blank"
              className="text-dark"
            >
              <i className="bi bi-github"></i>
            </a>
            Chris Rathmel
          </div>
          <div>Designed with Bootstrap</div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/creativecons"
            title="CreativeCons"
            className="text-dark"
            target="_blank"
          >
            CreativeCons
          </a>
          {", "}
          <a
            href="https://www.flaticon.com/authors/noomtah"
            title="noomtah"
            className="text-dark"
            target="_blank"
          >
            noomtah
          </a>
          {", and "}
          <a
            href="https://www.flaticon.com/authors/smashingstocks"
            title="smashingstocks"
            className="text-dark"
            target="_blank"
          >
            smashingstocks
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className="text-dark"
            target="_blank"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
