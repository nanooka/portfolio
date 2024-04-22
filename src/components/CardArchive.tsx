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
        <img src={img.src} className="img" alt={img.alt} />
      </div>
      <div>
        <span style={{ display: "block" }}>
          Live:{" "}
          <a href={live} target="_blank">
            {live}
          </a>
        </span>
        <span style={{ display: "block" }}>
          repository:{" "}
          <a href={repo} target="_bank">
            {repo}
          </a>
        </span>
      </div>
    </div>
  );
};

export default CardArchive;
