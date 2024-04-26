type CardArchiveProps = {
  title: string;
  img: { src: string; alt: string };
  live: string;
  repo: string;
};

const CardArchive: React.FC<CardArchiveProps> = ({
  title,
  img,
  live,
  repo,
}) => {
  return (
    <div className="archive-card">
      <div>
        <h3>{title}</h3>
        <a href={live} target="_blank">
          <img src={img.src} className="img" alt={img.alt} />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <a href={repo} target="_bank">
          Repository{" "}
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
      </div>
    </div>
  );
};

export default CardArchive;
