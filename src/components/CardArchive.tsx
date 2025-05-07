import { HiArrowSmRight } from "react-icons/hi";

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
        <a
          href={live}
          target="_blank"
          style={{ position: "relative" }}
          className="img-link"
        >
          <div className="img-div-color"></div>
          <div>
            <img src={img.src} className="img" alt={img.alt} />
          </div>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <a href={repo} target="_bank" className="repo">
          Repository
          <HiArrowSmRight className="arrow" />
        </a>
      </div>
    </div>
  );
};

export default CardArchive;
