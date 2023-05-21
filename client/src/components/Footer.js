import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center bg-white text-dark border border-dark">
      <div>
        <div>
          <div className="copyright">
            <i className="bi bi-c-circle"></i> 2023{" "}
            <a href="https://github.com/AMess33">
              <i className="bi bi-github"></i>
            </a>
            Andrew Messer,{" "}
            <a href="https://github.com/jboyce313">
              <i className="bi bi-github"></i>
            </a>
            Jacob Boyce, and{" "}
            <a href="https://github.com/kitrath">
              <i className="bi bi-github"></i>
            </a>
            Chris Rathmel
          </div>
          <div>Designed with Bootstrap</div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/creativecons"
            title="CreativeCons"
          >
            CreativeCons
          </a>
          {", "}
          <a href="https://www.flaticon.com/authors/noomtah" title="noomtah">
            noomtah
          </a>
          {", and "}
          <a
            href="https://www.flaticon.com/authors/smashingstocks"
            title="smashingstocks"
          >
            smashingstocks
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
