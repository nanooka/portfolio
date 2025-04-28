import shopImage from "../assets/shopping.png";
import todoListImage from "../assets/todolist.png";
import calculatorImage from "../assets/calculator.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { ScrollToTop } from "./AboutMe";
import primeEstateImage from "../assets/prime-estate.png";
import AnimatedSection from "../components/AnimatedSection";

export default function Projects() {
  return (
    <div className="container">
      <h2>Latest projects</h2>
      <AnimatedSection>
        <Card
          title="PrimeEstate"
          img={{ src: primeEstateImage, alt: "PrimeEstate website preview" }}
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
              wishlist. (still in building process)
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
          img={{ src: shopImage, alt: "E-commerce website preview" }}
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
          img={{ src: todoListImage, alt: "Todo List preview" }}
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
          img={{ src: calculatorImage, alt: "Calculator preview" }}
          describe="This is a simple calculator web application with responsive design. There are Addition, subtraction, multiplication, and division operations. Styling is from Figma.com"
          live="https://master--peaceful-centaur-f4582a.netlify.app/"
          repo="https://github.com/nanooka/calculator-react"
          backRepo={null}
          docker={null}
          technologies={["React", "TypeScript", "CSS"]}
        />
      </AnimatedSection>

      <Link
        to="https://scratch.mit.edu/projects/789893487/"
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "60px",
        }}
        className="link-to-projects"
      >
        <p>See my simple game in Scratch </p>
        <div className="svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
            />
            <path
              fillRule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </div>
      </Link>
      <br />

      <Link to={"/archive"} onClick={ScrollToTop} className="link-to-projects">
        <p>See my early JavaScript projects</p>
        <div className="svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
            />
            <path
              fillRule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
