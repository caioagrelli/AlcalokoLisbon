import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const cardVariants = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
};

export default function Experience() {
  const { t } = useLanguage();
  const ex = t.experience;

  return (
    <section className="section experience" id="experience">
      <div className="experience__bg" />
      <div className="container experience__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{ex.subtitle}</span>
          <h2 className="section-title">
            {ex.title} <span>{ex.subtitle}</span>
          </h2>
          <p className="experience__intro">{ex.intro}</p>
        </motion.div>

        <div className="experience__cards">
          {ex.highlights.map((h, i) => (
            <motion.div
              key={i}
              className="experience__card"
              {...cardVariants}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="experience__card-icon">{h.icon}</div>
              <h3 className="experience__card-title">{h.title}</h3>
              <p className="experience__card-text">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
