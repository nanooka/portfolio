import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection";
import "./aboutme.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const techData = [
  {
    title: "Frontend",
    emoji: "🎨",
    items: [
      "React (Vite, React Router)",
      "Next.js",
      "TypeScript, JavaScript",
      "HTML5, CSS3, SASS",
      "Tailwind CSS, Bootstrap",
    ],
  },
  {
    title: "Backend",
    emoji: "🛠️",
    items: [
      "Node.js, Express",
      "MongoDB, Prisma",
      "RESTful APIs, Postman",
      "WebSockets, Socket.IO",
      "Authentication (JWT, bcrypt, Google OAuth)",
    ],
  },
];

export default function AboutMe() {
  return (
    <div className="container about-me-page">
      {/* <h1>About Me</h1> */}

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        About Me
      </motion.h1>

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

      <section className="tech-stack-section">
        <motion.h2
          className="title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 1 }}
        >
          Technologies I Work With
        </motion.h2>
        {/* <h2 className="title">Technologies I Work With</h2> */}
        <div className="tech-grid">
          {techData.map((section) => (
            <AnimatedSection>
              <div className="tech-card" key={section.title}>
                <h3 className="card-title">
                  <span>{section.emoji}</span> {section.title}
                </h3>
                <div className="pill-container">
                  {section.items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* <AnimatedSection> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Link to="/contact" className="cta-btn cta-contact">
          Get in Touch
        </Link>
      </motion.div>
      {/* </AnimatedSection> */}
    </div>
  );
}
