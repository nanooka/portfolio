import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import AnimatedSection from "../../components/AnimatedSection";
import "./aboutme.css";
import { MdOutlineFileDownload } from "react-icons/md";

export default function AboutMe() {
  return (
    <div className="container about-me-page">
      <h1>About Me</h1>

      <AnimatedSection>
        <div className="about-me-container">
          <div className="photo-container">
            <img className="photo" src="/profile.jpg" alt="Nanuka's photo" />
          </div>
          <div className="about-me-side">
            <div className="about-me-text">
              <p>I'll tell you my story shortly.</p>
              <p>
                I originally studied economics, but I was always fascinated by
                programming. Eventually, I made the decision to change careers
                and dive into development.
              </p>
              <p>
                I started learning from scratch. At first, I had a mentor who
                helped me build a solid foundation. Then, like many others, I
                explored courses on Udemy and kept practicing. Along the way, I
                also took{" "}
                <Link
                  to={
                    "https://certificates.cs50.io/f6e4bbb1-65b3-40aa-88d8-d47ca72298f4.pdf?size=letter"
                  }
                >
                  Harvard’s CS50 course
                </Link>
                , which really deepened my understanding of computer science and
                problem-solving.
              </p>
              <p>
                Now I build responsive full-stack web applications using tools
                like React, Node.js, MongoDB, and Prisma. I care about writing
                clean code and crafting intuitive user experiences.
              </p>
            </div>
            <a
              href="/CVNanukaGrdzelishvili.pdf"
              download
              className="download-resume"
            >
              <span>Download My Resume</span>
              <MdOutlineFileDownload className="arrow-icon" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* <AnimatedSection>
        <section className="dev-values">
          <h2>What I Bring</h2>
          <ul>
            <li>
              <strong>Problem Solver:</strong> I enjoy breaking down complex
              challenges into elegant solutions.
            </li>
            <li>
              <strong>User-Focused:</strong> I care deeply about how users
              interact with my apps.
            </li>
            <li>
              <strong>Continuous Learner:</strong> I stay updated with modern
              tools like Vite, Prisma, and OAuth.
            </li>
          </ul>
        </section>
      </AnimatedSection> */}

      <AnimatedSection>
        <section>
          <h2>Technologies I Work With</h2>
          <div className="stack-section">
            <div className="frontend">
              <span>Frontend</span>
              <ul>
                <li>React (Vite, React Router)</li>
                <li>Next.js</li>
                <li>TypeScript, JavaScript</li>
                <li>HTML5, CSS3, SASS</li>
                <li>Tailwind CSS, Bootstrap</li>
              </ul>
            </div>
            <div className="backend">
              <span>Backend</span>
              <ul>
                <li>Node.js, Express</li>
                <li>MongoDB, Prisma</li>
                <li>RESTful APIs, Postman</li>
                <li>WebSockets, Socket.IO</li>
                <li>Authentication (JWT, bcrypt, Google OAuth)</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* <AnimatedSection>
        <section className="stack-section">
          <h2>Technologies I Work With</h2>
          <div className="stack-icons">
            {[
              "react",
              "vite",
              "nextjs",
              "typescript",
              "nodejs",
              "express",
              "mongodb",
              "prisma",
              "javascript",
              "html5",
              "css3",
              "sass",
              "tailwindcss",
              "socketio",
              "jwt",
            ].map((tech) => (
              <img
                key={tech}
                src={`/${tech}.svg`}
                alt={tech}
                className="stack-icon"
              />
            ))}
          </div>
        </section>
      </AnimatedSection> */}

      {/* <AnimatedSection>
        <section className="about-cta">
          <p>
            Want to see my code in action? Check out my latest projects or drop
            me a message — I'm always open to collaboration!
          </p>
          <div className="about-buttons">
            <Link to="/projects" className="cta-projects">
              <span>View Projects</span>
              <HiArrowSmRight className="arrow-icon" />
            </Link>
            <Link to="/contact" className="cta-projects">
              <span>Contact Me</span>
              <HiArrowSmRight className="arrow-icon" />
            </Link>
          </div>
        </section>
      </AnimatedSection> */}
    </div>
  );
}
