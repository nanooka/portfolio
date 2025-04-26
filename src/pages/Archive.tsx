import adviceGeneratorImage from "../assets/advice-generator.png";
import weatherImage from "../assets/weather.png";
import quizImage from "../assets/trivia-quiz.png";
import tipCalculatorImage from "../assets/tip-calculator.jpg";
import faqImage from "../assets/faq.png";
import movieSeatImage from "../assets/movie-seat.png";

import CardArchive from "../components/CardArchive";
import AnimatedSection from "../components/AnimatedSection";

export default function Archive() {
  return (
    <div className="container">
      <h2>Little JavaScript Projects</h2>
      <div className="archive-container">
        <AnimatedSection>
          <CardArchive
            title="Advice Generator"
            img={{ src: adviceGeneratorImage, alt: "Advice generator preview" }}
            live="https://nanooka.github.io/advice-generator/"
            repo="https://github.com/nanooka/advice-generator"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Weather"
            img={{ src: weatherImage, alt: "Weather preview" }}
            live="https://clever-twilight-293feb.netlify.app/"
            repo="https://github.com/nanooka/weather"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Trivia Quiz"
            img={{ src: quizImage, alt: "Trivia Quiz preview" }}
            live="https://nanooka.github.io/general-knowledge-quiz/"
            repo="https://github.com/nanooka/general-knowledge-quiz"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Tip Calculator"
            img={{ src: tipCalculatorImage, alt: "Tip Calculator preview" }}
            live="https://lovely-hotteok-1887db.netlify.app/"
            repo="https://github.com/nanooka/tip-calculator-app"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="FAQ Accordion"
            img={{ src: faqImage, alt: "FAQ Accordion preview" }}
            live="https://nanooka.github.io/FAQ-accordion-card/"
            repo="https://github.com/nanooka/FAQ-accordion-card"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Movie Seat"
            img={{ src: movieSeatImage, alt: "Movie Seat preview" }}
            live="https://movie-seat-nanooka.netlify.app/"
            repo="https://github.com/nanooka/movie-seat"
          />
        </AnimatedSection>
      </div>
    </div>
  );
}
