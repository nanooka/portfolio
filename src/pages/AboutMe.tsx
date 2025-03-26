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
        <p>
          A Frontend developer who loves making plain and user-friendly
          websites.
        </p>
      </div>

      <div>
        <p className="skills-p">Skills:</p>

        <div className="skills-container main">
          <div className="skills-container">
            <div className="skills-section">
              <span>Frontend</span>
              <ul>
                <li>React-Vite</li>
                <li>React Query</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div className="skills-section">
              <span>Backend</span>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Prisma</li>
                <li>RESTful API</li>
                <li>Socket.io</li>
                <li>JWT</li>
                <li>bcrypt</li>
              </ul>
            </div>
          </div>

          <div className="skills-section">
            <span>Tools</span>
            <ul>
              <li>Git/Github</li>
              <li>Postman</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <p style={{ fontSize: "19px", marginTop: "100px" }}>
        I am a Frontend Developer enthusiastic about coding. I have created many
        of my own projects and also I have experience in teamwork. I absorb new
        technologies easily and I’m good at problem-solving. I’m trying to learn
        something new every day to be better and better...
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/projects"}
          style={{
            marginLeft: "10px",
            marginTop: "7px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          onClick={ScrollToTop}
          className="link-to-projects"
        >
          <p style={{ display: "inline" }}>Check out my projects </p>
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
        <p style={{ color: "#319c89" }}>Certificates: </p>
        <a
          className="certificate-link"
          href="https://certificates.cs50.io/f6e4bbb1-65b3-40aa-88d8-d47ca72298f4.pdf?size=letter"
          target="_blank"
          style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
        >
          <b>Harvard CS50x Certificate</b>
        </a>
      </div>
      <div className="green-circle"></div>
      <div className="white-circle"></div>
    </div>
  );
}
