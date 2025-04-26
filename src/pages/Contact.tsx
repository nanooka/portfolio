import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTypewriter } from "../useTypewriter";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");
  const placeholder = useTypewriter("Type your message here...", 80);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !textarea) {
      alert("Please fill the inputs 😊");
    }

    if (form.current && name && textarea) {
      emailjs
        .sendForm("service_bvw4zec", "template_ln7semd", form.current, {
          publicKey: "4W7iqpzQysHsndBXK",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      alert("Message sent. Thank you! 😊");
      setName("");
      setTextarea("");
    }
  };

  return (
    <div className="container contact-container">
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <h2>Send me a message</h2>
        <label>Your name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>To:</label>
        <input
          type="email"
          name="user_email"
          value="nana.grdzelishvili7@gmail.com"
          readOnly
        />
        <label>Message</label>
        <textarea
          placeholder={placeholder}
          name="message"
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
      <div className="contact-info">
        <span style={{ color: "#319c89" }}>{"{"}</span>
        <br></br>
        <br></br>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#319c89"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
        <span style={{ color: "#319c89" }}> : "</span>
        <a
          className="contact-link"
          href="https://github.com/nanooka"
          target="_blank"
          style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
        >
          https://github.com/nanooka
        </a>
        <span style={{ color: "#319c89" }}>"</span>
        <span style={{ color: "#319c89" }}>;</span>
        <br></br>
        <br></br>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#319c89"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
        <span style={{ color: "#319c89" }}> : "</span>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/nanuka-grdzelishvili/"
          target="_blank"
          style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
        >
          https://www.linkedin.com/in/nanuka-grdzelishvili/
        </a>
        <span style={{ color: "#319c89" }}>"</span>
        <span style={{ color: "#319c89" }}>;</span>
        <br></br>
        <br></br>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="leetcode"
          width="16"
          height="16"
        >
          <path
            fill="#319c89"
            d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
          ></path>
          <path
            fill="#319c89"
            d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
          ></path>
          <path
            fill="#319c89"
            d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
          ></path>
        </svg>
        <span style={{ color: "#319c89" }}> : "</span>
        <a
          className="contact-link"
          href="https://leetcode.com/u/nanooka/"
          target="_blank"
          style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
        >
          https://leetcode.com/u/nanooka/
        </a>
        <span style={{ color: "#319c89" }}>"</span>
        <span style={{ color: "#319c89" }}>;</span>
        <br></br>
        <br></br>
        <span style={{ color: "#319c89" }}>{"}"}</span>
      </div>
    </div>
  );
}
