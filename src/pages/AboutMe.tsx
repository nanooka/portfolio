import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default function AboutMe() {
  return (
    <div className="container about-container">
      <div>
        <p>Hi, I'm</p>
        <h1>Nanuka Grdzelishvili</h1>
        <p>A React developer who loves making cool and simple websites.</p>
      </div>

      <div>
        <p style={{ color: "#319c89", marginLeft: "38px", marginTop: "60px" }}>
          Skills:
        </p>
        <div className="skills-list">
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Vite</li>
            <li>EmailJS</li>
          </ul>
          <ul style={{ marginTop: "-16px" }}>
            <li>Node JS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Postman</li>
            <li>REST client</li>
            <li>Git/Github</li>
          </ul>
        </div>
      </div>

      <p style={{ fontSize: "19px", marginTop: "100px" }}>
        I am a junior developer enthusiastic about coding and problem-solving. I
        have very small experience, however I’m super motivated to start my
        career as a developer. I’ve completed Harvard CS50x course. also I
        studied at a non-certified, but very good training place called Bitcamp,
        where I had a mentor who helped me to learn the basics of programming.
        And now I am studying by myself and am trying to be better every day.
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Check out my projects </p>
        <Link
          to={"/projects"}
          style={{ marginLeft: "10px", marginTop: "7px" }}
          onClick={ScrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </Link>
      </div>

      <div>
        <p>Certificates: </p>
        <b>Harvard CS50x Certificate: </b>
        <a
          href="https://certificates.cs50.io/f6e4bbb1-65b3-40aa-88d8-d47ca72298f4.pdf?size=letter"
          target="_blank"
          style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
        >
          https://certificates.cs50.io/f6e4bbb1-65b3-40aa-88d8-d47ca72298f4.pdf?size=letter
        </a>
        <br></br>
        <br></br>
        <b>FreeCodeCamp Certificate: </b>
        <a
          href="https://www.freecodecamp.org/certification/nanooka/responsive-web-design
"
          target="_blank"
          style={{
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          https://www.freecodecamp.org/certification/nanooka/responsive-web-design
        </a>
      </div>

      <div className="green-circle"></div>
      <div className="white-circle"></div>
    </div>
  );
}
