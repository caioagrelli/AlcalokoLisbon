import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/* ── Descrição completa TIMI por idioma ─────────────────────────── */
const timiDesc = {
  pt: [
    'O Alcaloko Home Lisbon está situado no coração de Lisboa, numa zona residencial tranquila com tudo a poucos passos.',
    'Estação de Metro Alameda (Linha Amarela) — a apenas 3 minutos a pé do apartamento. Acesso direto ao centro da cidade sem necessidade de carro.',
    'A área dispõe ainda de comércio local, restaurantes, serviços essenciais e acesso fácil aos bairros mais emblemáticos de Lisboa.',
  ],
  en: [
    'Alcaloko Home Lisbon is located in the heart of Lisbon, in a quiet residential area with everything just steps away.',
    'Alameda Metro Station (Yellow Line) — just 3 minutes\' walk from the apartment. Direct access to the city centre with no need for a car.',
    'The area also has local shops, restaurants, essential services and easy access to Lisbon\'s most iconic neighbourhoods.',
  ],
  fr: [
    'L\'Alcaloko Home Lisbon est situé au cœur de Lisbonne, dans un quartier résidentiel calme avec tout à portée de main.',
    'Station de Métro Alameda (Ligne Jaune) — à seulement 3 minutes à pied de l\'appartement. Accès direct au centre-ville sans besoin de voiture.',
    'Le quartier dispose aussi de commerces locaux, restaurants, services essentiels et d\'un accès facile aux quartiers emblématiques de Lisbonne.',
  ],
  es: [
    'El Alcaloko Home Lisbon está ubicado en el corazón de Lisboa, en una zona residencial tranquila con todo a pocos pasos.',
    'Estación de Metro Alameda (Línea Amarilla) — a solo 3 minutos a pie del apartamento. Acceso directo al centro de la ciudad sin necesidad de coche.',
    'La zona cuenta también con comercios locales, restaurantes, servicios esenciales y fácil acceso a los barrios más emblemáticos de Lisboa.',
  ],
  de: [
    'Das Alcaloko Home Lisbon liegt im Herzen von Lissabon, in einem ruhigen Wohngebiet mit allem in unmittelbarer Nähe.',
    'U-Bahn-Station Alameda (Gelbe Linie) — nur 3 Gehminuten von der Wohnung entfernt. Direkter Zugang zum Stadtzentrum ohne Auto.',
    'Das Viertel bietet zudem lokale Geschäfte, Restaurants, wichtige Dienstleistungen und einfachen Zugang zu Lissabons emblematischen Stadtvierteln.',
  ],
  it: [
    'L\'Alcaloko Home Lisbon si trova nel cuore di Lisbona, in una zona residenziale tranquilla con tutto a pochi passi.',
    'Stazione Metro Alameda (Linea Gialla) — a soli 3 minuti a piedi dall\'appartamento. Accesso diretto al centro città senza bisogno di auto.',
    'La zona dispone anche di negozi locali, ristoranti, servizi essenziali e facile accesso ai quartieri più iconici di Lisbona.',
  ],
  ja: [
    'アルカロコ・ホーム・リスボンは、リスボンの中心部に位置する静かな住宅街にあり、あらゆるものが徒歩圏内です。',
    'オディヴェラス地下鉄駅（イエローライン）— アパートから徒歩わずか3分。車なしで市内中心部へ直通アクセス。',
    'この地域には地元の商店、レストラン、生活に必要なサービスが揃い、リスボンの象徴的な各地区へも簡単にアクセスできます。',
  ],
};

/* ── Badge "12 anos" por idioma ─────────────────────────────────── */
const yearsBadge = {
  pt: 'Há mais de 12 anos a receber hóspedes',
  en: 'Welcoming guests for over 12 years',
  fr: 'Plus de 12 ans d\'accueil de nos hôtes',
  es: 'Más de 12 años recibiendo huéspedes',
  de: 'Seit über 12 Jahren Gäste empfangen',
  it: 'Oltre 12 anni ad accogliere ospiti',
  ja: '12年以上のおもてなしの歴史',
};

/* ── Label "anos" no stat card ──────────────────────────────────── */
const yearsLabel = {
  pt: 'Anos', en: 'Years', fr: 'Ans', es: 'Años', de: 'Jahre', it: 'Anni', ja: '年',
};

/* ── Metro labels ───────────────────────────────────────────────── */
const metroLabel = {
  pt: 'Metro', en: 'Metro', fr: 'Métro', es: 'Metro', de: 'U-Bahn', it: 'Metro', ja: '地下鉄',
};
const greenLine = { pt: 'Linha Verde', en: 'Green Line', fr: 'Ligne Verte',  es: 'Línea Verde',  de: 'Grüne Linie',  it: 'Linea Verde',  ja: 'グリーンライン' };
const redLine   = { pt: 'Linha Vermelha', en: 'Red Line', fr: 'Ligne Rouge', es: 'Línea Roja',   de: 'Rote Linie',   it: 'Linea Rossa',  ja: 'レッドライン'   };

/* ── Label de localização no stat card ─────────────────────────── */
const locationLabel = {
  pt: 'Lisboa Centro', en: 'Lisbon Centre', fr: 'Centre de Lisbonne',
  es: 'Centro de Lisboa', de: 'Lissabon Zentrum', it: 'Centro di Lisbona', ja: 'リスボン中心部',
};

/* ── Título da secção de comodidades ────────────────────────────── */
const amenitiesTitle = {
  pt: 'Comodidades', en: 'Amenities', fr: 'Équipements',
  es: 'Comodidades', de: 'Ausstattung', it: 'Servizi', ja: '設備・アメニティ',
};

/*
 * ════════════════════════════════════════════════════════════════
 *  COMODIDADES — adicione ou remova itens aqui facilmente!
 *
 *  Cada objeto = uma comodidade no grid.
 *  Para adicionar mais, copie um bloco { icon, pt, en, fr, es, de, it }
 *  e cole-o a seguir ao último item da lista.
 *  O grid ajusta-se automaticamente à quantidade de itens.
 * ════════════════════════════════════════════════════════════════
 */
const AMENITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    pt: { title: 'WiFi de Alta Velocidade', desc: 'Conexão rápida e estável para trabalho e entretenimento' },
    en: { title: 'High-Speed WiFi', desc: 'Fast and stable connection for work and entertainment' },
    fr: { title: 'WiFi Haute Vitesse', desc: 'Connexion rapide et stable pour le travail et les loisirs' },
    es: { title: 'WiFi de Alta Velocidad', desc: 'Conexión rápida y estable para trabajo y entretenimiento' },
    de: { title: 'Hochgeschwindigkeits-WLAN', desc: 'Schnelle und stabile Verbindung für Arbeit und Unterhaltung' },
    it: { title: 'WiFi ad Alta Velocità', desc: 'Connessione rapida e stabile per lavoro e intrattenimento' },
    ja: { title: '高速WiFi', desc: '仕事や娯楽のための安定した高速接続' },
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    pt: { title: 'Localização Premium', desc: 'No coração histórico de Lisboa, próximo a tudo' },
    en: { title: 'Premium Location', desc: 'In the historic heart of Lisbon, close to everything' },
    fr: { title: 'Emplacement Premium', desc: 'Au cœur historique de Lisbonne, proche de tout' },
    es: { title: 'Ubicación Premium', desc: 'En el corazón histórico de Lisboa, cerca de todo' },
    de: { title: 'Premium-Lage', desc: 'Im historischen Herzen Lissabons, in der Nähe von allem' },
    it: { title: 'Posizione Premium', desc: 'Nel cuore storico di Lisbona, vicino a tutto' },
    ja: { title: 'プレミアムロケーション', desc: 'リスボンの歴史的中心部、あらゆる場所に近い' },
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    pt: { title: 'Conforto Total', desc: 'Ar condicionado, roupa de cama premium e amenities de qualidade' },
    en: { title: 'Total Comfort', desc: 'Air conditioning, premium bedding and quality amenities' },
    fr: { title: 'Confort Total', desc: 'Climatisation, literie premium et équipements de qualité' },
    es: { title: 'Comodidad Total', desc: 'Aire acondicionado, ropa de cama premium y amenidades de calidad' },
    de: { title: 'Totaler Komfort', desc: 'Klimaanlage, Premium-Bettwäsche und hochwertige Ausstattung' },
    it: { title: 'Comfort Totale', desc: 'Aria condizionata, biancheria premium e servizi di qualità' },
    ja: { title: '完全な快適さ', desc: 'エアコン、プレミアム寝具、高品質アメニティ' },
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    pt: { title: 'Cozinha Equipada', desc: 'Cozinha totalmente equipada para preparar as suas refeições' },
    en: { title: 'Fully Equipped Kitchen', desc: 'Complete kitchen to prepare your own meals' },
    fr: { title: 'Cuisine Équipée', desc: 'Cuisine complète pour préparer vos propres repas' },
    es: { title: 'Cocina Equipada', desc: 'Cocina completamente equipada para preparar comidas' },
    de: { title: 'Voll ausgestattete Küche', desc: 'Komplette Küche zum Zubereiten eigener Mahlzeiten' },
    it: { title: 'Cucina Attrezzata', desc: 'Cucina completamente attrezzata per preparare i propri pasti' },
    ja: { title: '完備キッチン', desc: '自炊のための完全装備キッチン' },
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
      </svg>
    ),
    pt: { title: 'Apoio 24/7', desc: 'Estamos sempre disponíveis para qualquer necessidade' },
    en: { title: '24/7 Support', desc: 'We are always available for any need' },
    fr: { title: 'Support 24/7', desc: 'Nous sommes toujours disponibles pour tout besoin' },
    es: { title: 'Soporte 24/7', desc: 'Siempre disponibles para cualquier necesidad' },
    de: { title: '24/7 Support', desc: 'Wir sind immer für Sie da' },
    it: { title: 'Supporto 24/7', desc: 'Sempre disponibili per qualsiasi esigenza' },
    ja: { title: '24時間サポート', desc: 'いつでもご要望にお応えします' },
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    pt: { title: 'Vistas Deslumbrantes', desc: 'Acorde com as vistas únicas da cidade de Lisboa' },
    en: { title: 'Stunning Views', desc: 'Wake up to unique views of the city of Lisbon' },
    fr: { title: 'Vues Magnifiques', desc: 'Se réveiller avec des vues uniques sur Lisbonne' },
    es: { title: 'Vistas Impresionantes', desc: 'Despertarse con las vistas únicas de la ciudad de Lisboa' },
    de: { title: 'Atemberaubende Aussicht', desc: 'Mit einzigartigen Ausblicken auf die Stadt Lissabon aufwachen' },
    it: { title: 'Viste Mozzafiato', desc: 'Svegliarsi con viste uniche sulla città di Lisbona' },
    ja: { title: '絶景', desc: 'リスボンの街並みを一望できる唯一無二の眺め' },
  },
  // ── Adicione mais comodidades aqui ──────────────────────────────
  // {
  //   icon: (<svg .../>),
  //   pt: { title: 'Nova Comodidade', desc: 'Descrição aqui' },
  //   en: { title: 'New Amenity', desc: 'Description here' },
  //   fr: { title: 'Nouvel Équipement', desc: 'Description ici' },
  //   es: { title: 'Nueva Comodidad', desc: 'Descripción aquí' },
  //   de: { title: 'Neue Ausstattung', desc: 'Beschreibung hier' },
  //   it: { title: 'Nuovo Servizio', desc: 'Descrizione qui' },
  // },
];

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export default function About() {
  const { lang, t } = useLanguage();
  const a    = t.about;
  const desc = timiDesc[lang] || timiDesc.pt;

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">

          {/* ── Coluna da imagem ── */}
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Stats flutuantes */}
            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-value">2–3</div>
                <div className="about__stat-label">{a.stat_label_cap}</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value">3</div>
                <div className="about__stat-label">{a.stat_label_rooms}</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value" style={{ color: '#e8a020' }}>12+</div>
                <div className="about__stat-label">{yearsLabel[lang]}</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value" style={{ fontSize: '0.78rem', lineHeight: 1.2 }}>📍</div>
                <div className="about__stat-label">{locationLabel[lang]}</div>
              </div>
            </div>

            <div className="about__image-main">
              <img
                src={import.meta.env.BASE_URL + 'OVERVIEW.jpeg'}
                alt="Apartamento Alcaloko"
                loading="lazy"
              />
            </div>

            <div className="about__image-accent">
              <img
                src={import.meta.env.BASE_URL + 'PORTUGUESES.jpg'}
                alt="Azulejos portugueses"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* ── Coluna de texto ── */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge "12 anos" */}
            <div className="about__years-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              {yearsBadge[lang]}
            </div>

            <span className="section-tag">Alcaloko Home Lisbon</span>
            <h2 className="section-title">
              {a.title} <span>{a.subtitle}</span>
            </h2>

            {/* Descrição TIMI em parágrafos */}
            <div className="about__description">
              {desc.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* ── Texto extra — edite aqui quando quiser ── */}
            {/* <p className="about__extra-note">O seu texto aqui...</p> */}
          </motion.div>
        </div>

        {/* ── Comodidades — secção completa abaixo do grid ── */}
        <motion.div
          className="about__amenities"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="about__amenities-title">{amenitiesTitle[lang]}</h3>
          <div className="about__amenities-grid">
            {AMENITIES.map((item, i) => {
              const text = item[lang] || item.pt;
              return (
                <motion.div
                  key={i}
                  className="about__feature"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="about__feature-icon">{item.icon}</div>
                  <div>
                    <div className="about__feature-title">{text.title}</div>
                    <div className="about__feature-desc">{text.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
