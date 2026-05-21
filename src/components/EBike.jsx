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
    feat1: 'Reserva pela app', feat2: 'QR Code', feat3: 'Por tempo de uso',
  },
  en: {
    tag:   'Mobility',
    title: 'Explore Lisbon by',
    subtitle: 'Electric Bike',
    desc:  'TIMI is a sustainable urban mobility company operating a shared electric bike system in Lisbon. It\'s simple: download the app, scan the QR code on the bike with your smartphone, and start riding. The service runs on a pay-per-use model and rewards frequent users. An eco-friendly, affordable and fun way to explore the city — and the bikes are right nearby!',
    feat1: 'Book via app', feat2: 'QR Code', feat3: 'Pay per use',
  },
  fr: {
    tag:   'Mobilité',
    title: 'Explorez Lisbonne en',
    subtitle: 'Vélo Électrique',
    desc:  'TIMI est une entreprise de mobilité urbaine durable qui exploite un système de vélos électriques partagés à Lisbonne. C\'est simple : téléchargez l\'application, scannez le QR code sur le vélo avec votre smartphone et commencez à pédaler. Le service fonctionne à la minute et récompense les utilisateurs réguliers. Une façon écologique, économique et amusante de découvrir la ville !',
    feat1: 'Réservation via app', feat2: 'QR Code', feat3: 'À la minute',
  },
  es: {
    tag:   'Movilidad',
    title: 'Explora Lisboa en',
    subtitle: 'Bicicleta Eléctrica',
    desc:  'TIMI es una empresa de movilidad urbana sostenible que opera un sistema de bicicletas eléctricas compartidas en Lisboa. El funcionamiento es sencillo: descarga la app, escanea el código QR de la bici con tu smartphone y empieza a pedalear. El servicio funciona por tiempo de uso y recompensa a los usuarios frecuentes. ¡Una forma ecológica, económica y divertida de descubrir la ciudad!',
    feat1: 'Reserva por app', feat2: 'Código QR', feat3: 'Pago por uso',
  },
  de: {
    tag:   'Mobilität',
    title: 'Lissabon erkunden mit',
    subtitle: 'E-Bike',
    desc:  'TIMI ist ein Unternehmen für nachhaltige urbane Mobilität, das in Lissabon ein System mit geteilten E-Bikes betreibt. Einfach die App herunterladen, den QR-Code am Fahrrad mit dem Smartphone scannen und losfahren. Der Service wird nach Nutzungszeit abgerechnet und belohnt Stammnutzer. Eine umweltfreundliche, günstige und spaßige Art, die Stadt zu entdecken!',
    feat1: 'Per App buchen', feat2: 'QR-Code', feat3: 'Abrechnung nach Zeit',
  },
  it: {
    tag:   'Mobilità',
    title: 'Esplora Lisbona in',
    subtitle: 'Bici Elettrica',
    desc:  'TIMI è un\'azienda di mobilità urbana sostenibile che gestisce un sistema di biciclette elettriche condivise a Lisbona. È semplice: scarica l\'app, scansiona il codice QR sulla bici con lo smartphone e inizia a pedalare. Il servizio funziona a consumo e premia gli utenti abituali. Un modo ecologico, conveniente e divertente per scoprire la città!',
    feat1: 'Prenota via app', feat2: 'Codice QR', feat3: 'Pagamento a consumo',
  },
  ja: {
    tag:   'モビリティ',
    title: '電動自転車で',
    subtitle: 'リスボンを探索',
    desc:  'TIMIはリスボンでシェア電動自転車システムを運営する持続可能な都市モビリティ企業です。使い方はシンプル：アプリをダウンロードして、スマートフォンで自転車のQRコードをスキャンするだけ。利用時間に応じた料金制で、頻繁に利用するユーザーへの特典もあります。環境に優しく、お得で楽しい街の探索方法です！',
    feat1: 'アプリで予約', feat2: 'QRコード', feat3: '時間制課金',
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

        {/* Vídeo */}
        <motion.div
          className="ebike-section__video-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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

        {/* Card: Logo + Descrição */}
        <motion.div
          className="ebike-section__card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Lado esquerdo: logo */}
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

          {/* Divider vertical */}
          <div className="ebike-section__divider" />

          {/* Lado direito: info */}
          <div className="ebike-section__info">
            {/* Nome + badge */}
            <div className="ebike-section__brand">
              <span className="ebike-section__brand-name">
                <span style={{ color: '#22c55e' }}>TIMI</span>
                {' '}
                <span style={{ color: '#9b1c1c' }}>Alcaloko Airbnb Lisboa</span>
                {' '}
                <span style={{ color: '#94a3b8', fontSize: '0.85em', letterSpacing: '0.04em' }}>No.001</span>
              </span>
              <span className="ebike-section__brand-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                Lisboa
              </span>
            </div>

            {/* Descrição */}
            <p className="ebike-section__desc">{c.desc}</p>

            {/* Ícones de destaque */}
            <div className="ebike-section__features">
              <div className="ebike-section__feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                <span>{c.feat1}</span>
              </div>
              <div className="ebike-section__feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM22 7h-2V4h-3V2h5v5zm0 15v-5h-2v3h-3v2h5zM2 22h5v-2H4v-3H2v5zM2 2v5h2V4h3V2H2z"/></svg>
                <span>{c.feat2}</span>
              </div>
              <div className="ebike-section__feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                <span>{c.feat3}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
