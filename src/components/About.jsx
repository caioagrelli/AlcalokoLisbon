import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/* ── Descrição completa TIMI por idioma ─────────────────────────── */
const timiDesc = {
  pt: [
    'O Alcaloko Home Lisbon está situado numa zona estratégica de Lisboa, entre o centro histórico e o aeroporto, permitindo fácil acesso tanto às principais atrações turísticas como às ligações internacionais da cidade.',
    'A localização é particularmente conveniente para deslocações rápidas e eficientes, com acesso próximo a duas das principais linhas do metro de Lisboa: a Linha Verde e a Linha Vermelha. Estas ligações permitem chegar rapidamente a pontos centrais como o centro da cidade, zonas comerciais, universidades e o aeroporto.',
    'Além disso, a área oferece uma boa rede de transportes públicos, comércio local, serviços essenciais e acesso fácil a diferentes bairros emblemáticos de Lisboa — tornando-a uma excelente base para estadias curtas ou longas.',
  ],
  en: [
    'Alcaloko Home Lisbon is situated in a strategic area of Lisbon, between the historic centre and the airport, allowing easy access to both the city\'s main tourist attractions and international connections.',
    'The location is particularly convenient for quick and efficient travel, with nearby access to two of Lisbon\'s main metro lines: the Green Line and the Red Line. These connections allow you to quickly reach central points such as the city centre, commercial areas, universities and the airport.',
    'The area also offers an excellent public transport network, local shops, essential services and easy access to Lisbon\'s iconic neighbourhoods — making it an excellent base for short or long stays.',
  ],
  fr: [
    'Le Alcaloko Home Lisbon est situé dans une zone stratégique de Lisbonne, entre le centre historique et l\'aéroport, offrant un accès facile aux principales attractions touristiques et aux connexions internationales.',
    'L\'emplacement est particulièrement pratique pour des déplacements rapides, avec un accès proche aux deux principales lignes de métro de Lisbonne : la Ligne Verte et la Ligne Rouge. Ces liaisons permettent d\'atteindre rapidement des points centraux tels que le centre-ville, les zones commerciales, les universités et l\'aéroport.',
    'La zone offre également un excellent réseau de transports en commun, des commerces locaux, des services essentiels et un accès facile aux différents quartiers emblématiques de Lisbonne — en faisant une excellente base pour des séjours courts ou longs.',
  ],
  es: [
    'El Alcaloko Home Lisbon está situado en una zona estratégica de Lisboa, entre el centro histórico y el aeropuerto, permitiendo fácil acceso tanto a las principales atracciones turísticas como a las conexiones internacionales.',
    'La ubicación es especialmente conveniente para desplazamientos rápidos, con acceso próximo a las dos principales líneas de metro de Lisboa: la Línea Verde y la Línea Roja. Estas conexiones permiten llegar rápidamente a puntos centrales como el centro de la ciudad, zonas comerciales, universidades y el aeropuerto.',
    'La zona también ofrece una excelente red de transporte público, comercios locales, servicios esenciales y fácil acceso a los diferentes barrios emblemáticos de Lisboa — convirtiéndola en una excelente base para estancias cortas o largas.',
  ],
  de: [
    'Alcaloko Home Lisbon befindet sich in einer strategischen Lage in Lissabon, zwischen dem historischen Zentrum und dem Flughafen, mit einfachem Zugang zu den wichtigsten Touristenattraktionen und internationalen Verbindungen.',
    'Der Standort ist besonders günstig für schnelle und effiziente Reisen, mit Zugang zu zwei Hauptlinien der Lissaboner U-Bahn: der Grünen Linie und der Roten Linie. Diese Verbindungen ermöglichen schnelle Fahrten in das Stadtzentrum, Einkaufszonen, Universitäten und den Flughafen.',
    'Das Gebiet bietet außerdem ein ausgezeichnetes öffentliches Verkehrsnetz, lokale Geschäfte, wesentliche Dienstleistungen und einfachen Zugang zu den verschiedenen emblematischen Stadtvierteln Lissabons — eine ausgezeichnete Basis für kurze oder lange Aufenthalte.',
  ],
  it: [
    'Alcaloko Home Lisbon è situato in una zona strategica di Lisbona, tra il centro storico e l\'aeroporto, consentendo un facile accesso alle principali attrazioni turistiche e ai collegamenti internazionali della città.',
    'La posizione è particolarmente conveniente per spostamenti rapidi ed efficienti, con accesso nelle vicinanze a due delle principali linee della metropolitana di Lisbona: la Linea Verde e la Linea Rossa. Questi collegamenti permettono di raggiungere rapidamente punti centrali come il centro città, le aree commerciali, le università e l\'aeroporto.',
    'L\'area offre inoltre un\'eccellente rete di trasporti pubblici, negozi locali, servizi essenziali e facile accesso ai diversi quartieri emblematici di Lisbona — rendendola un\'ottima base per soggiorni brevi o lunghi.',
  ],
  ja: [
    'アルカロコ・ホーム・リスボンは、リスボンの歴史地区と空港の間という戦略的なエリアに位置し、主要な観光スポットへも国際線へもアクセスが容易です。',
    'この立地は快適な移動に特に便利で、リスボンの2つの主要地下鉄路線——グリーンライン（緑の線）とレッドライン（赤の線）——へのアクセスも近接しています。これらの路線を使えば、市内中心部、商業エリア、大学、空港などの主要な場所へ素早く移動できます。',
    'さらに、この地域は充実した公共交通網、地元の商店、生活に必要なサービスを備え、リスボンの各象徴的な地区へも簡単にアクセスできます。短期・長期滞在どちらにも最適な拠点です。',
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
