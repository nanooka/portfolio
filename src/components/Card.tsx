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
        <a href={live} target="_blank">
          <b>Live </b>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
            style={{ position: "absolute" }}
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </a>
        <br></br>
        <a href={repo} target="_bank">
          {backRepo && (
            <span>
              <b>Front-end </b>
            </span>
          )}
          <span>
            <b>Repository </b>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
              style={{ position: "absolute" }}
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </span>
        </a>
        <br></br>
        {backRepo !== null ? (
          <a href={backRepo} target="_bank">
            <b>Back-end repository</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
              style={{ position: "absolute" }}
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </a>
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
