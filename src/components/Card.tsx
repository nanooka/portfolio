type CardProps = {
  title: string;
  img: { src: string; alt: string };
  describe: string | JSX.Element;
  live: string;
  repo: string;
  backRepo: string | null;
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
        <img src={img.src} className="img" alt={img.alt} />
      </div>
      <div>
        <p className="describe">{describe}</p>
        <span style={{ display: "block" }}>
          Live:{" "}
          <a href={live} target="_blank">
            {live}
          </a>
        </span>
        <span style={{ display: "block" }}>
          {backRepo && <span>Front-end </span>}
          repository:{" "}
          <a href={repo} target="_bank">
            {repo}
          </a>
        </span>
        {backRepo !== null ? (
          <span style={{ display: "block" }}>
            Back-end repository:{" "}
            <a href={backRepo} target="_bank">
              {backRepo}
            </a>
          </span>
        ) : null}
        <div>
          {technologies.map((tech) => (
            <div className="used-technologies">{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
