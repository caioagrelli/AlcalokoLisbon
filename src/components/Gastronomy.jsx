import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const gastroImages = [
  'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1597690374680-f73defc72c26?auto=format&fit=crop&w=600&q=80',
];

export default function Gastronomy() {
  const { t } = useLanguage();
  const g = t.gastronomy;

  return (
    <section className="section gastronomy" id="gastronomy">
      <div className="container">
        <div className="gastronomy__header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Portugal</span>
            <h2 className="section-title">
              {g.title} <span>{g.subtitle}</span>
            </h2>
            <p className="gastronomy__intro">{g.intro}</p>
          </motion.div>
        </div>

        <div className="gastronomy__grid">
          {g.items.map((item, i) => (
            <motion.div
              key={i}
              className="gastronomy__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="gastronomy__card-img">
                <img
                  src={gastroImages[i]}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span>${item.emoji}</span>`;
                  }}
                />
              </div>
              <div className="gastronomy__card-body">
                <h3 className="gastronomy__card-name">{item.name}</h3>
                <p className="gastronomy__card-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
