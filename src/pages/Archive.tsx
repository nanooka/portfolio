import CardArchive from "../components/CardArchive";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

export default function Archive() {
  return (
    <div className="container archive">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        Little JavaScript Projects
      </motion.h1>
      {/* <h2>Little JavaScript Projects</h2> */}
      <div className="archive-container">
        <AnimatedSection>
          <CardArchive
            title="Movie Seat"
            img={{ src: "/movie-seat.png", alt: "Movie Seat preview" }}
            live="https://movie-seat-nanooka.netlify.app/"
            repo="https://github.com/nanooka/movie-seat"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Advice Generator"
            img={{
              src: "/advice-generator.png",
              alt: "Advice generator preview",
            }}
            live="https://nanooka.github.io/advice-generator/"
            repo="https://github.com/nanooka/advice-generator"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Weather"
            img={{ src: "/weather.png", alt: "Weather preview" }}
            live="https://clever-twilight-293feb.netlify.app/"
            repo="https://github.com/nanooka/weather"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Trivia Quiz"
            img={{ src: "/trivia-quiz.png", alt: "Trivia Quiz preview" }}
            live="https://nanooka.github.io/general-knowledge-quiz/"
            repo="https://github.com/nanooka/general-knowledge-quiz"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="Tip Calculator"
            img={{ src: "/tip-calculator.jpg", alt: "Tip Calculator preview" }}
            live="https://lovely-hotteok-1887db.netlify.app/"
            repo="https://github.com/nanooka/tip-calculator-app"
          />
        </AnimatedSection>
        <AnimatedSection>
          <CardArchive
            title="FAQ Accordion"
            img={{ src: "/faq.png", alt: "FAQ Accordion preview" }}
            live="https://nanooka.github.io/FAQ-accordion-card/"
            repo="https://github.com/nanooka/FAQ-accordion-card"
          />
        </AnimatedSection>
      </div>
    </div>
  );
}
