import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { pub } from '../config';

/*
 * ════════════════════════════════════════════════════════════════
 *  FOTOS DOS PONTOS TURÍSTICOS
 *  Substitua `src: null` pelo URL ou caminho da sua foto.
 *  A ordem corresponde à ordem dos spots nas traduções:
 *  [0] Torre de Belém            [1] Castelo de São Jorge
 *  [2] Mosteiro dos Jerónimos    [3] Praça do Comércio
 *  [4] Padrão dos Descobrimentos [5] Oceanário de Lisboa
 *  [6] Elevador de Santa Justa   [7] Sé de Lisboa
 *  [8] Arco Triunfal Rua Augusta
 * ════════════════════════════════════════════════════════════════
 */
const spotPhotos = [
  { src: pub('/photos/points/torrebelem.webp'),         alt: 'Torre de Belém'            },
  { src: pub('/photos/points/castelosaojorge.jpg'),     alt: 'Castelo de São Jorge'      },
  { src: pub('/photos/points/mosteiros.jpg'),           alt: 'Mosteiro dos Jerónimos'    },
  { src: pub('/photos/points/pracacomercio.jpg'),       alt: 'Praça do Comércio'         },
  { src: pub('/photos/points/pracadescobrimento.webp'), alt: 'Padrão dos Descobrimentos' },
  { src: pub('/photos/points/oceanario.avif'),          alt: 'Oceanário de Lisboa'       },
  { src: pub('/photos/points/elevador.webp'),           alt: 'Elevador de Santa Justa'   },
  { src: pub('/photos/points/selisboa.jpeg'),           alt: 'Sé de Lisboa'              },
  { src: pub('/photos/points/arcotriunfal.jpg'),        alt: 'Arco Triunfal Rua Augusta' },
];

/*
 * ════════════════════════════════════════════════════════════════
 *  TRANSPORTE POR PONTO TURÍSTICO — edite aqui!
 *  uber: preço médio de Uber/Bolt  |  boat: barco (Tejo ferry)
 *  Deixe boat: null se não houver opção de barco.
 *  A ordem é a mesma dos spotPhotos acima.
 * ════════════════════════════════════════════════════════════════
 */
const SPOT_TRANSPORT = [
  { uber: '~€14', boat: null }, // [0] Torre de Belém
  { uber: '~€6',  boat: null }, // [1] Castelo de São Jorge
  { uber: '~€14', boat: null }, // [2] Mosteiro dos Jerónimos
  { uber: '~€5',  boat: null }, // [3] Praça do Comércio
  { uber: '~€15', boat: null }, // [4] Padrão dos Descobrimentos
  { uber: '~€12', boat: null }, // [5] Oceanário de Lisboa
  { uber: '~€5',  boat: null }, // [6] Elevador de Santa Justa
  { uber: '~€5',  boat: null }, // [7] Sé de Lisboa
  { uber: '~€5',  boat: null }, // [8] Arco Triunfal Rua Augusta
];

/* Labels de transporte por idioma */
const transportLabels = {
  pt: { uber: 'Uber / Bolt', boat: 'Barco (Tejo)' },
  en: { uber: 'Uber / Bolt', boat: 'Ferry (Tejo)' },
  fr: { uber: 'Uber / Bolt', boat: 'Bateau (Tage)' },
  es: { uber: 'Uber / Bolt', boat: 'Barco (Tajo)' },
  de: { uber: 'Uber / Bolt', boat: 'Fähre (Tejo)' },
  it: { uber: 'Uber / Bolt', boat: 'Traghetto (Tago)' },
  ja: { uber: 'Uber / Bolt', boat: 'フェリー (テージョ)' },
};

function PhotoPlaceholder({ alt }) {
  return (
    <div className="spot-card__photo-placeholder">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span>{alt}</span>
    </div>
  );
}

export default function TouristSpots() {
  const { lang, t } = useLanguage();
  const s = t.spots;
  const tLabels = transportLabels[lang] || transportLabels.pt;

  return (
    <section className="section spots" id="spots">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="section-tag">Lisboa</span>
          <h2 className="section-title">
            {s.title} <span>{s.subtitle}</span>
          </h2>
        </motion.div>

        <div className="spots__grid">
          {s.items.map((spot, i) => {
            const photo = spotPhotos[i];
            const transport = SPOT_TRANSPORT[i];
            return (
              <motion.div
                key={i}
                className="spot-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* ── Foto do ponto turístico ── */}
                <div className="spot-card__photo">
                  {photo?.src ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      onError={(e) => {
                        e.target.parentElement.innerHTML = `<div class="spot-card__photo-placeholder"><span>${spot.name}</span></div>`;
                      }}
                    />
                  ) : (
                    <PhotoPlaceholder alt={spot.name} />
                  )}

                  {/* Badge de distância sobreposto na foto */}
                  <span className={`spot-card__badge-photo${spot.unit === 'car' ? ' car' : ''}`}>
                    {spot.unit === 'car'
                      ? <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                      : <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/></svg>
                    }
                    {spot.distance} {spot.unit === 'car' ? s.car : s.walk}
                  </span>
                </div>

                {/* ── Conteúdo do card ── */}
                <div className="spot-card__body">
                  <h3 className="spot-card__name">{spot.name}</h3>
                  <p className="spot-card__desc">{spot.desc}</p>

                  {/* ── Preços de transporte ── */}
                  {transport && (
                    <div className="spot-card__transport">
                      <div className="spot-card__transport-row">
                        {/* Uber/Bolt */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                        </svg>
                        <span className="spot-card__transport-label">{tLabels.uber}</span>
                        <span className="spot-card__transport-price">{transport.uber}</span>
                      </div>
                      {transport.boat && (
                        <div className="spot-card__transport-row">
                          {/* Barco */}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 11V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v5l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v4.43l-6-1.98-6 1.98V6z"/>
                          </svg>
                          <span className="spot-card__transport-label">{tLabels.boat}</span>
                          <span className="spot-card__transport-price">{transport.boat}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
