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
    desc:  'A TIMI é uma empresa de mobilidade urbana sustentável que opera um sistema de bicicletas elétricas partilhadas em Lisboa. O funcionamento é simples: descarregue a app, leia o código QR na bicicleta com o smartphone e comece a pedalar. O serviço funciona por aluguel por tempo de uso e ainda recompensa os utilizadores mais frequentes. Uma forma ecológica, económica e divertida de descobrir a cidade — e as bicicletas ficam mesmo aqui perto!',
  },
  en: {
    tag:   'Mobility',
    title: 'Explore Lisbon by',
    subtitle: 'Electric Bike',
    desc:  'TIMI is a sustainable urban mobility company operating a shared electric bike system in Lisbon. It\'s simple: download the app, scan the QR code on the bike with your smartphone, and start riding. The service runs on a pay-per-use model and rewards frequent users. An eco-friendly, affordable and fun way to explore the city — and the bikes are right nearby!',
  },
  fr: {
    tag:   'Mobilité',
    title: 'Explorez Lisbonne en',
    subtitle: 'Vélo Électrique',
    desc:  'TIMI est une entreprise de mobilité urbaine durable qui exploite un système de vélos électriques partagés à Lisbonne. C\'est simple : téléchargez l\'application, scannez le QR code sur le vélo avec votre smartphone et commencez à pédaler. Le service fonctionne à la minute et récompense les utilisateurs réguliers. Une façon écologique, économique et amusante de découvrir la ville !',
  },
  es: {
    tag:   'Movilidad',
    title: 'Explora Lisboa en',
    subtitle: 'Bicicleta Eléctrica',
    desc:  'TIMI es una empresa de movilidad urbana sostenible que opera un sistema de bicicletas eléctricas compartidas en Lisboa. El funcionamiento es sencillo: descarga la app, escanea el código QR de la bici con tu smartphone y empieza a pedalear. El servicio funciona por tiempo de uso y recompensa a los usuarios frecuentes. ¡Una forma ecológica, económica y divertida de descubrir la ciudad!',
  },
  de: {
    tag:   'Mobilität',
    title: 'Lissabon erkunden mit',
    subtitle: 'E-Bike',
    desc:  'TIMI ist ein Unternehmen für nachhaltige urbane Mobilität, das in Lissabon ein System mit geteilten E-Bikes betreibt. Einfach die App herunterladen, den QR-Code am Fahrrad mit dem Smartphone scannen und losfahren. Der Service wird nach Nutzungszeit abgerechnet und belohnt Stammnutzer. Eine umweltfreundliche, günstige und spaßige Art, die Stadt zu entdecken!',
  },
  it: {
    tag:   'Mobilità',
    title: 'Esplora Lisbona in',
    subtitle: 'Bici Elettrica',
    desc:  'TIMI è un\'azienda di mobilità urbana sostenibile che gestisce un sistema di biciclette elettriche condivise a Lisbona. È semplice: scarica l\'app, scansiona il codice QR sulla bici con lo smartphone e inizia a pedalare. Il servizio funziona a consumo e premia gli utenti abituali. Un modo ecologico, conveniente e divertente per scoprire la città!',
  },
  ja: {
    tag:   'モビリティ',
    title: '電動自転車で',
    subtitle: 'リスボンを探索',
    desc:  'TIMIはリスボンでシェア電動自転車システムを運営する持続可能な都市モビリティ企業です。使い方はシンプル：アプリをダウンロードして、スマートフォンで自転車のQRコードをスキャンするだけ。利用時間に応じた料金制で、頻繁に利用するユーザーへの特典もあります。環境に優しく、お得で楽しい街の探索方法です！',
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
