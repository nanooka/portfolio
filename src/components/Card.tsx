import { HiArrowSmRight } from "react-icons/hi";

type CardProps = {
  title: string;
  img: { src: string; alt: string };
  describe: string | JSX.Element;
  live: string;
  repo: string;
  backRepo: string | null;
  docker: string | null;
  technologies: string[];
};

const Card: React.FC<CardProps> = ({
  title,
  img,
  describe,
  live,
  repo,
  backRepo,
  technologies,
}) => {
  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
        <a
          href={live}
          target="_blank"
          style={{ position: "relative" }}
          className="img-link"
        >
          <img src={img.src} className="img" alt={img.alt} />
        </a>
      </div>
      <div>
        <p className="describe">{describe}</p>
        <a href={repo} target="_bank" className="repo">
          {backRepo && <span>Front-end</span>}
          <span>Repository </span> <HiArrowSmRight className="arrow" />
        </a>
        <br></br>
        {backRepo !== null ? (
          <a className="repo" href={backRepo} target="_bank">
            <span>Back-end Repository</span>
            <HiArrowSmRight className="arrow" />
          </a>
        ) : null}
        <br></br>
        <div>
          {technologies.map((tech) => (
            <div className="used-technologies" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
