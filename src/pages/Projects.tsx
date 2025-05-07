import Card from "../components/Card";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { HiArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="container project-page">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        My Projects
      </motion.h1>
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
      <AnimatedSection>
        <Card
          title="E-commerce website"
          img={{ src: "/shopping.png", alt: "E-commerce website preview" }}
          describe={
            <span className="describe">
              This is my first full-stack project. I used{" "}
              <a href={"https://fakestoreapi.com/products"} target="_blank">
                Fake Store API
              </a>{" "}
              to store products. I used <b>JWT</b> for authentication for log
              in. When user registers, user's password is saved encrypted, so
              you can register safely. User can add products to cart and also to
              favorite list and see them later. Users, their cart items, and
              favorite products are saved in <b>MongoDB</b>. The design is mine.
            </span>
          }
          live="https://online-shop-nanooka.netlify.app/"
          repo="https://github.com/nanooka/online-shopping"
          backRepo="https://github.com/nanooka/online-shopping-backend"
          docker={null}
          technologies={[
            "React+Vite",
            "React-Router",
            "TypeScript",
            "Bootstrap",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
          ]}
        />
      </AnimatedSection>
      <AnimatedSection>
        <Card
          title="Todo List"
          img={{ src: "/todolist.png", alt: "Todo List preview" }}
          describe="This is simple Todo List with localstorage. You can add, edit and
        delete todos, also mark as done. design is mine."
          live="https://todo-list-nanooka.netlify.app/"
          repo="https://github.com/nanooka/todo-list-react"
          backRepo={null}
          docker={null}
          technologies={["React", "TypeScript", "CSS"]}
        />
      </AnimatedSection>
      <AnimatedSection>
        <Card
          title="Calculator"
          img={{ src: "/calculator.png", alt: "Calculator preview" }}
          describe="This is a simple calculator web application with responsive design. There are Addition, subtraction, multiplication, and division operations. Styling is from Figma.com"
          live="https://master--peaceful-centaur-f4582a.netlify.app/"
          repo="https://github.com/nanooka/calculator-react"
          backRepo={null}
          docker={null}
          technologies={["React", "TypeScript", "CSS"]}
        />
      </AnimatedSection>

      <div className="projects-links">
        <Link
          to="https://scratch.mit.edu/projects/789893487/"
          target="_blank"
          className="link-to-projects"
        >
          <span>See my simple game in Scratch </span>
          <HiArrowSmRight className="arrow-icon" />
        </Link>

        <Link to={"/archive"} className="link-to-projects">
          <span>See my early JavaScript projects</span>
          <HiArrowSmRight className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}
