import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=900&q=80',
    alt: 'Vista panorâmica de Lisboa',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-db97920430bf?auto=format&fit=crop&w=700&q=80',
    alt: 'Sala de estar moderna',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    alt: 'Alfama, Lisboa',
  },
  {
    src: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=700&q=80',
    alt: 'Torre de Belém',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80',
    alt: 'Eléctrico de Lisboa',
  },
  {
    src: 'https://images.unsplash.com/photo-1584464491033-fe7b1b9d3a27?auto=format&fit=crop&w=700&q=80',
    alt: 'Azulejos portugueses',
  },
  {
    src: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=700&q=80',
    alt: 'Praça do Comércio',
  },
  {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80',
    alt: 'Vinho português',
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{g.subtitle}</span>
          <h2 className="section-title">
            {g.title} <span style={{ fontStyle: 'italic' }}>—</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            {g.subtitle}
          </p>
        </motion.div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gallery__item"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
