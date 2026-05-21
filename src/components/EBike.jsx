import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { pub } from '../config';

/*
 * ════════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DA SEÇÃO DE BICICLETAS ELÉTRICAS
 *
 *  VIDEO_URL:
 *    Cole aqui o link de embed do YouTube ou Vimeo.
 *    YouTube: clique em Compartilhar → Incorporar → copie só o src do iframe
 *    Exemplo: 'https://www.youtube.com/embed/SEU_VIDEO_ID'
 *    Deixe null para ocultar o vídeo.
 *
 *  EBIKE_LOGO_SRC:
 *    Coloque o arquivo da logo em /public/ e escreva o nome aqui.
 *    Exemplo: pub('/logo-empresa.png')
 *    Deixe null para ocultar a logo.
 *
 *  EBIKE_LOGO_ALT:
 *    Texto alternativo da logo (nome da empresa).
 *
 *  EBIKE_LOGO_LINK:
 *    Link do site da empresa. Deixe null para sem link.
 * ════════════════════════════════════════════════════════════════
 */
const VIDEO_URL      = 'https://www.youtube.com/embed/k1XaOQuDwQ0';
const EBIKE_LOGO_SRC = pub('/timi.jpeg');
const EBIKE_LOGO_ALT = 'Empresa de Bicicletas Elétricas';
const EBIKE_LOGO_LINK = null;           // ex: 'https://empresa.com'

/*
 * ════════════════════════════════════════════════════════════════
 *  DESCRIÇÃO — edite o texto de cada idioma aqui.
 * ════════════════════════════════════════════════════════════════
 */
const content = {
  pt: {
    tag:   'Mobilidade',
    title: 'Explore Lisboa de',
    subtitle: 'Bicicleta Elétrica',
    desc:  'Escreva aqui a sua descrição sobre a parceria ou ideia das bicicletas elétricas.',
  },
  en: {
    tag:   'Mobility',
    title: 'Explore Lisbon by',
    subtitle: 'Electric Bike',
    desc:  'Write here your description about the e-bike partnership or concept.',
  },
  fr: {
    tag:   'Mobilité',
    title: 'Explorez Lisbonne en',
    subtitle: 'Vélo Électrique',
    desc:  'Écrivez ici votre description sur le partenariat ou l\'idée des vélos électriques.',
  },
  es: {
    tag:   'Movilidad',
    title: 'Explora Lisboa en',
    subtitle: 'Bicicleta Eléctrica',
    desc:  'Escribe aquí tu descripción sobre la asociación o idea de las bicicletas eléctricas.',
  },
  de: {
    tag:   'Mobilität',
    title: 'Lissabon erkunden mit',
    subtitle: 'E-Bike',
    desc:  'Schreiben Sie hier Ihre Beschreibung über die E-Bike-Partnerschaft oder Idee.',
  },
  it: {
    tag:   'Mobilità',
    title: 'Esplora Lisbona in',
    subtitle: 'Bici Elettrica',
    desc:  'Scrivi qui la tua descrizione sulla partnership o sull\'idea delle bici elettriche.',
  },
  ja: {
    tag:   'モビリティ',
    title: '電動自転車で',
    subtitle: 'リスボンを探索',
    desc:  'eバイクのパートナーシップやコンセプトについての説明をここに書いてください。',
  },
};

export default function EBike() {
  const { lang } = useLanguage();
  const c = content[lang] || content.pt;

  return (
    <section className="section ebike-section" id="ebike">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="section-tag">{c.tag}</span>
          <h2 className="section-title">
            {c.title} <span>{c.subtitle}</span>
          </h2>
        </motion.div>

        <div className="ebike-section__layout">

          {/* Vídeo */}
          <motion.div
            className="ebike-section__video-wrap"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {VIDEO_URL ? (
              <iframe
                src={VIDEO_URL}
                title="E-Bike"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="ebike-section__video-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                <span>Cole o link do vídeo em<br /><code>VIDEO_URL</code> — EBike.jsx</span>
              </div>
            )}
          </motion.div>

          {/* Logo + Descrição */}
          <motion.div
            className="ebike-section__info"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Logo */}
            <div className="ebike-section__logo-wrap">
              {EBIKE_LOGO_SRC ? (
                EBIKE_LOGO_LINK ? (
                  <a href={EBIKE_LOGO_LINK} target="_blank" rel="noopener noreferrer">
                    <img src={EBIKE_LOGO_SRC} alt={EBIKE_LOGO_ALT} className="ebike-section__logo" />
                  </a>
                ) : (
                  <img src={EBIKE_LOGO_SRC} alt={EBIKE_LOGO_ALT} className="ebike-section__logo" />
                )
              ) : (
                <div className="ebike-section__logo-placeholder">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="17.5" r="3.5"/>
                    <circle cx="18.5" cy="17.5" r="3.5"/>
                    <path d="M15 6h-5L7 17.5"/>
                    <path d="M15 6l3 5.5-3.5 6"/>
                    <path d="M15 6h3"/>
                  </svg>
                  <span>Logo da empresa</span>
                </div>
              )}
            </div>

            {/* Descrição */}
            <p className="ebike-section__desc">{c.desc}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
