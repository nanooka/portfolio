import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from "../../useTypewriter";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection";
import "./home.css";
import { HiArrowSmRight } from "react-icons/hi";
import Card from "../../components/Card";

export default function Home() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const movePupil = (
        eye: HTMLDivElement | null,
        pupil: HTMLDivElement | null
      ) => {
        if (!eye || !pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);

        const maxDistance = 6;
        const x = Math.cos(angle) * maxDistance;
        const y = Math.sin(angle) * maxDistance;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      };

      movePupil(leftEyeRef.current, leftPupilRef.current);
      movePupil(rightEyeRef.current, rightPupilRef.current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const typeText = useTypewriter(
    "Full-Stack Developer who builds fast, user-friendly, and modern web apps.",
    80
  );

  return (
    <div className="container home">
      <div className="intro-container">
        <div className="intro-text">
          <p>Hi, I'm</p>
          <AnimatedSection>
            <h1>Nanuka</h1>
          </AnimatedSection>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {typeText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              |
            </motion.span>
          </motion.p>
        </div>

        <div className="avatar-container">
          <img src="/avatar.svg" alt="avatar of Nanooka" />
          <div className="eye-container">
            <div className="eye" ref={leftEyeRef}>
              <div className="pupil" ref={leftPupilRef}></div>
            </div>
            <div className="eye" ref={rightEyeRef}>
              <div className="pupil" ref={rightPupilRef}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-skills-section">
        <motion.div
          className="about-me"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 1 }}
        >
          <p>
            I build responsive, high-performance web applications with a focus
            on clean design and smooth user experience. I work mainly with
            React, Node.js, and MongoDB.
          </p>

          <Link to={"/aboutme"} className="cta-btn">
            <span>Learn More About Me</span>
            <HiArrowSmRight className="arrow-icon" />
          </Link>
        </motion.div>

        <div className="skill-slider">
          <h3 className="section-label">Tech Stack</h3>

          <div className="slider-track">
            {[
              "react",
              "vite",
              "typescript",
              "html5",
              "css3",
              "sass",
              "tailwindcss",
              "nodejs",
              "express",
              "javascript",
              "mongodb",
              "prisma",
            ].map((skill) => (
              <img
                key={skill}
                src={`/${skill}.svg`}
                alt={skill}
                className="skill-icon"
              />
            ))}

            {[
              "react",
              "vite",
              "typescript",
              "html5",
              "css3",
              "sass",
              "tailwindcss",
              "nodejs",
              "express",
              "javascript",
              "mongodb",
              "prisma",
            ].map((skill) => (
              <img
                key={skill}
                src={`/${skill}.svg`}
                alt={skill}
                className="skill-icon"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="latest-project-container">
        <h2>My Latest Project</h2>
        <AnimatedSection>
          <Card
            title="PrimeEstate"
            img={{
              src: "/prime-estate.png",
              alt: "PrimeEstate website preview",
            }}
            describe={
              <span className="describe">
                A full-stack real estate platform with a responsive UI and
                light/dark theme support. Users can sign up securely with
                email/password using <b>JWT</b> or log in via{" "}
                <b>Google OAuth 2.0 </b>
                (Google Cloud Console). Passwords are hashed with <b>
                  bcrypt
                </b>{" "}
                for strong security. Properties can be filtered by location,
                price, area, and type (rent/sale). Users can view listings on a
                dynamic
                <b> React Leaflet</b> map, post their own, chat with authors in
                real time via<b> Socket.IO</b>, or just save favorites to a
                wishlist.
              </span>
            }
            live="https://prime-estate-nanooka.netlify.app"
            repo="https://github.com/nanooka/real-estate"
            backRepo={null}
            docker={null}
            technologies={[
              "React+Vite",
              "React-Router",
              "Node.js",
              "Express",
              "MongoDB",
              "Prisma",
              "SCSS",
              "JWT",
              "Bcrypt",
              "Socket.IO",
              "Google OAuth",
            ]}
          />
        </AnimatedSection>
        <Link to={"/projects"} className="cta-btn projects-btn">
          <span>See More Projects</span>
          <HiArrowSmRight className="arrow-icon" />
        </Link>
      </div>

      {/* <div className="contact-cta">
        <p>Want to build something together?</p>
        <Link to="/contact" className="cta-btn">
          Let's Talk
        </Link>
      </div> */}
    </div>
  );
}
