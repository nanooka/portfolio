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
      <div
        style={{
          display: "flex",
          gap: "60px",
        }}
      >
        <a href={live} target="_blank">
          Live
        </a>
        <a href={repo} target="_bank">
          Repository
        </a>
      </div>
    </div>
  );
};

export default CardArchive;
