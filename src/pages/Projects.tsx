import shopImage from "../assets/shopping.png";
import todoListImage from "../assets/todolist.png";
import usePopcornImage from "../assets/usepopcorn.png";

export default function Projects() {
  return (
    <div className="container">
      <h2>Latest projects</h2>
      <div className="card">
        <div>
          <h3>E-commerce website</h3>
          <img src={shopImage} className="img" alt="preview" />
        </div>
        <div>
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
            user registers, user's pasword is saving encrypted, so you can
            register safely. User can add products to cart and also to favorite
            list and see them later. Users, their cart items and favorite
            products are saving in MongoDB. The design is mine.
          </p>
          <span style={{ display: "block" }}>
            Live:{" "}
            <a
              href={"https://online-shop-nanooka.netlify.app/"}
              target="_blank"
            >
              https://online-shop-nanooka.netlify.app/
            </a>
          </span>
          <span style={{ display: "block" }}>
            Front-end repository:{" "}
            <a
              href={"https://github.com/nanooka/online-shopping"}
              target="_bank"
            >
              https://github.com/nanooka/online-shopping
            </a>
          </span>
          <span style={{ display: "block", marginBottom: "10px" }}>
            Back-end repository:{" "}
            <a
              href={"https://github.com/nanooka/online-shopping-backend"}
              target="_blank"
            >
              https://github.com/nanooka/online-shopping-backend
            </a>
          </span>
          <div>
            <div className="used-technologies">React</div>
            <div className="used-technologies">React-Router</div>
            <div className="used-technologies">TypeScript</div>
            <div className="used-technologies">Bootstrap</div>
            <div className="used-technologies">Node js</div>
            <div className="used-technologies">Express</div>
            <div className="used-technologies">MongoDB</div>
            <div className="used-technologies">Mongoose</div>
            <div className="used-technologies">REST</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div>
          <h3>Todo List</h3>
          <img src={todoListImage} className="img" alt="preview" />
        </div>
        <div>
          <p className="describe">
            This is simple Todo List with localstorage. You can add, edit and
            delete todos, also mark as done. design is mine.
          </p>
          <span style={{ display: "block" }}>
            Live:{" "}
            <a href={"https://todo-list-nanooka.netlify.app/"} target="_blank">
              https://todo-list-nanooka.netlify.app/
            </a>
          </span>
          <span style={{ display: "block" }}>
            Repository:{" "}
            <a
              href={"https://github.com/nanooka/todo-list-react"}
              target="_bank"
            >
              https://github.com/nanooka/todo-list-react
            </a>
          </span>
          <div>
            <div className="used-technologies">React</div>
            <div className="used-technologies">Typescript</div>
            <div className="used-technologies">CSS</div>
          </div>
        </div>
      </div>
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
