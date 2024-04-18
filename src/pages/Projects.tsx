import shopImage from "../assets/shopping.png";
import todoListImage from "../assets/todolist.png";
import usePopcornImage from "../assets/usepopcorn.png";
import Card from "../components/Card";

export default function Projects() {
  return (
    <div className="container">
      <h2>Latest projects</h2>
      <Card
        title="E-commerce website"
        img={{ src: shopImage, alt: "E-commerce website preview" }}
        describe={
          <p className="describe">
            This is my first full-stack project. I used{" "}
            <a
              href={"https://fakestoreapi.com/products"}
              target="_blank"
              className="anchor"
            >
              Face Store API
            </a>{" "}
            to store products. I used JWT for authentication for log in. When
            user registers, user's password is saved encrypted, so you can
            register safely. User can add products to cart and also to favorite
            list and see them later. Users, their cart items, and favorite
            products are saved in MongoDB. The design is mine.
          </p>
        }
        live="https://online-shop-nanooka.netlify.app/"
        repo="https://github.com/nanooka/online-shopping"
        backRepo="https://github.com/nanooka/online-shopping-backend"
        technologies={[
          "React",
          "React-Router",
          "TypeScript",
          "Bootstrap",
          "Node js",
          "Express",
          "MongoDB",
          "Mongoose",
          "REST",
        ]}
      />
      <Card
        title="Todo List"
        img={{ src: todoListImage, alt: "Todo List preview" }}
        describe="This is simple Todo List with localstorage. You can add, edit and
        delete todos, also mark as done. design is mine."
        live="https://todo-list-nanooka.netlify.app/"
        repo="https://github.com/nanooka/todo-list-react"
        backRepo={null}
        technologies={["React", "TypeScript", "CSS"]}
      />

      <div className="card">
        <div>
          <h3>UsePopcorn</h3>
          <img src={usePopcornImage} className="img" alt="preview" />
        </div>
        <div>
          <p className="describe">
            This is project about movies. You can search movies, rate them, add
            them to your favorite list and they will be set in your
            localstorage.
          </p>
          <span style={{ display: "block" }}>
            Live:{" "}
            <a href={"http://usepopcorn.io/"} target="_blank">
              http://usepopcorn.io/
            </a>
          </span>
          <span style={{ display: "block" }}>
            Repository:{" "}
            <a href={"https://github.com/nanooka/usepopcorn"} target="_bank">
              https://github.com/nanooka/usepopcorn
            </a>
          </span>
          <div>
            <div className="used-technologies">ReactJS</div>
            <div className="used-technologies">CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
