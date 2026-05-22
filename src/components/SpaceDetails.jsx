import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const content = {
  pt: {
    tag: 'O Espaço',
    title: 'Quarto Privado num',
    subtitle: 'Apartamento Partilhado',
    intro: 'Um quarto espaçoso e confortável para uma, duas ou três pessoas, inserido num apartamento T5 de 98m² com três quartos disponíveis — ideal para grupos pequenos, famílias ou viajantes que procuram conforto com localização excecional.',
    highlights: [
      { icon: '🔑', title: 'Check-in Autónomo', desc: 'Entre sozinho e sem complicações com o teclado numérico.' },
      { icon: '💻', title: 'Espaço de Trabalho', desc: 'Secretária, cadeira e Wi-Fi de alta velocidade em cada quarto.' },
      { icon: '🛏️', title: 'Quarto Espaçoso', desc: 'Opção de duas camas de solteiro ou uma de casal e uma de solteiro — guarda-roupa, cómoda, espelho e ventoinha.' },

      { icon: '🚇', title: 'Metro Alameda', desc: 'Estação Alameda (Linha Amarela) a apenas 3 minutos a pé. Acesso direto ao centro sem carro.' },
      { icon: '🌊', title: 'Rio Tejo', desc: 'O rio Tejo fica a apenas 20 minutos a pé.' },
      { icon: '🚲', title: 'Bicicleta Bem-vinda', desc: 'Pode trazer a sua bicicleta e guardá-la dentro do quarto.' },
    ],
    access_title: 'Acesso dos Hóspedes',
    access_items: [
      'Casa de banho completa',
      'Cozinha totalmente equipada (até às 22h)',
      'Espaços comuns do apartamento',
    ],
    rules_title: 'Informações Práticas',
    rules: [
      { icon: '🕛', label: 'Check-in', value: 'Das 12h às 00h (após meia-noite: +€20)' },
      { icon: '🕙', label: 'Check-out', value: 'Das 00h até às 11h' },
      { icon: '🔇', label: 'Silêncio', value: 'A partir das 22h' },
      { icon: '🧳', label: 'Guardar malas', value: '€5 (sem limite de malas ou horas, até meia-noite)' },
      { icon: '👕', label: 'Lavandaria', value: '€5 por utilização' },
      { icon: '🚗', label: 'Estacionamento gratuito', value: 'Seg–Sex das 19h às 9h; Sáb, Dom e feriados (dia inteiro)' },
    ],
    tour_title: 'Tour Guiado por Lisboa',
    tour_desc: 'Tour particular pelos 4 miradouros mais icónicos de Lisboa — 4 horas, para até 4 pessoas.',
    tour_price: '€50',
  },
  en: {
    tag: 'The Space',
    title: 'Private Room in a',
    subtitle: 'Shared Apartment',
    intro: 'A spacious, comfortable room for one, two or three guests, in a 98m² T5 apartment with three rooms available — perfect for small groups, families or travellers seeking comfort with an exceptional location.',
    highlights: [
      { icon: '🔑', title: 'Self Check-in', desc: 'Check yourself in easily with the keypad — no hassle.' },
      { icon: '💻', title: 'Workspace', desc: 'Desk, chair and high-speed Wi-Fi in every room.' },
      { icon: '🛏️', title: 'Spacious Room', desc: 'Choice of two single beds or one double and one single bed — wardrobe, chest of drawers, mirror and fan.' },

      { icon: '🚇', title: 'Alameda Metro', desc: 'Alameda station (Yellow Line) just 3 minutes\' walk. Direct access to the city centre, no car needed.' },
      { icon: '🌊', title: 'Tagus River', desc: 'The Tagus River is just a 20-minute walk away.' },
      { icon: '🚲', title: 'Bike Welcome', desc: 'Bring your bike and store it inside your room.' },
    ],
    access_title: 'Guest Access',
    access_items: [
      'Full bathroom',
      'Fully equipped kitchen (until 10 pm)',
      'Apartment common areas',
    ],
    rules_title: 'Practical Information',
    rules: [
      { icon: '🕛', label: 'Check-in', value: '12 pm – 12 am (after midnight: +€20)' },
      { icon: '🕙', label: 'Check-out', value: '12 am – 11 am' },
      { icon: '🔇', label: 'Quiet hours', value: 'After 10 pm' },
      { icon: '🧳', label: 'Luggage storage', value: '€5 (unlimited bags & hours, until midnight)' },
      { icon: '👕', label: 'Laundry', value: '€5 per use' },
      { icon: '🚗', label: 'Free parking', value: 'Mon–Fri 7 pm–9 am; Sat, Sun & holidays (all day)' },
    ],
    tour_title: 'Guided Tour of Lisbon',
    tour_desc: 'Private guided tour of Lisbon\'s 4 most iconic viewpoints — 4 hours, up to 4 people.',
    tour_price: '€50',
  },
  fr: {
    tag: 'L\'Espace',
    title: 'Chambre Privée dans un',
    subtitle: 'Appartement Partagé',
    intro: 'Une chambre spacieuse et confortable pour une, deux ou trois personnes, dans un appartement T5 de 98m² avec trois chambres disponibles — idéal pour les petits groupes, les familles ou les voyageurs.',
    highlights: [
      { icon: '🔑', title: 'Check-in Autonome', desc: 'Entrez seul et sans problème avec le clavier numérique.' },
      { icon: '💻', title: 'Espace de Travail', desc: 'Bureau, chaise et Wi-Fi haut débit dans chaque chambre.' },
      { icon: '🛏️', title: 'Chambre Spacieuse', desc: 'Choix de deux lits simples ou d\'un lit double et un lit simple — armoire, commode, miroir et ventilateur.' },

      { icon: '🚇', title: 'Métro Alameda', desc: 'Station Alameda (Ligne Jaune) à 3 minutes à pied. Accès direct au centre-ville sans voiture.' },
      { icon: '🌊', title: 'Fleuve Tage', desc: 'Le Tage est à seulement 20 minutes à pied.' },
      { icon: '🚲', title: 'Vélo Bienvenu', desc: 'Vous pouvez apporter votre vélo et le garder dans la chambre.' },
    ],
    access_title: 'Accès des Voyageurs',
    access_items: [
      'Salle de bain complète',
      'Cuisine entièrement équipée (jusqu\'à 22h)',
      'Espaces communs de l\'appartement',
    ],
    rules_title: 'Informations Pratiques',
    rules: [
      { icon: '🕛', label: 'Check-in', value: '12h – 00h (après minuit : +€20)' },
      { icon: '🕙', label: 'Check-out', value: '00h – 11h' },
      { icon: '🔇', label: 'Silence', value: 'À partir de 22h' },
      { icon: '🧳', label: 'Bagages', value: '€5 (illimité, jusqu\'à minuit)' },
      { icon: '👕', label: 'Lessive', value: '€5 par utilisation' },
      { icon: '🚗', label: 'Parking gratuit', value: 'Lun–Ven 19h–9h ; Sam, Dim & jours fériés (toute la journée)' },
    ],
    tour_title: 'Visite Guidée de Lisbonne',
    tour_desc: 'Tour privé des 4 belvédères les plus emblématiques de Lisbonne — 4 heures, jusqu\'à 4 personnes.',
    tour_price: '€50',
  },
  es: {
    tag: 'El Espacio',
    title: 'Habitación Privada en un',
    subtitle: 'Apartamento Compartido',
    intro: 'Una habitación espaciosa y cómoda para una, dos o tres personas, en un apartamento T5 de 98m² con tres habitaciones disponibles — ideal para grupos pequeños, familias o viajeros.',
    highlights: [
      { icon: '🔑', title: 'Check-in Autónomo', desc: 'Entra solo y sin complicaciones con el teclado numérico.' },
      { icon: '💻', title: 'Espacio de Trabajo', desc: 'Escritorio, silla y Wi-Fi de alta velocidad en cada habitación.' },
      { icon: '🛏️', title: 'Habitación Espaciosa', desc: 'Opción de dos camas individuales o una doble y una individual — armario, cómoda, espejo y ventilador.' },

      { icon: '🚇', title: 'Metro Alameda', desc: 'Estación Alameda (Línea Amarilla) a solo 3 minutos a pie. Acceso directo al centro sin coche.' },
      { icon: '🌊', title: 'Río Tajo', desc: 'El río Tajo está a solo 20 minutos a pie.' },
      { icon: '🚲', title: 'Bicicleta Bienvenida', desc: 'Puedes traer tu bicicleta y guardarla en la habitación.' },
    ],
    access_title: 'Acceso de los Huéspedes',
    access_items: [
      'Baño completo',
      'Cocina totalmente equipada (hasta las 22h)',
      'Zonas comunes del apartamento',
    ],
    rules_title: 'Información Práctica',
    rules: [
      { icon: '🕛', label: 'Check-in', value: '12h – 00h (después de medianoche: +€20)' },
      { icon: '🕙', label: 'Check-out', value: '00h – 11h' },
      { icon: '🔇', label: 'Silencio', value: 'A partir de las 22h' },
      { icon: '🧳', label: 'Guardar maletas', value: '€5 (sin límite, hasta medianoche)' },
      { icon: '👕', label: 'Lavandería', value: '€5 por uso' },
      { icon: '🚗', label: 'Aparcamiento gratuito', value: 'Lun–Vie 19h–9h; Sáb, Dom y festivos (todo el día)' },
    ],
    tour_title: 'Tour Guiado por Lisboa',
    tour_desc: 'Tour privado por los 4 miradores más icónicos de Lisboa — 4 horas, hasta 4 personas.',
    tour_price: '€50',
  },
  de: {
    tag: 'Der Raum',
    title: 'Privates Zimmer in einer',
    subtitle: 'Gemeinschaftswohnung',
    intro: 'Ein geräumiges, komfortables Zimmer für ein bis drei Personen in einer 98m² großen T5-Wohnung mit drei verfügbaren Zimmern — ideal für kleine Gruppen, Familien oder Reisende.',
    highlights: [
      { icon: '🔑', title: 'Selbst-Check-in', desc: 'Einchecken ganz einfach mit dem Nummernblock.' },
      { icon: '💻', title: 'Arbeitsbereich', desc: 'Schreibtisch, Stuhl und Hochgeschwindigkeits-WLAN in jedem Zimmer.' },
      { icon: '🛏️', title: 'Geräumiges Zimmer', desc: 'Wahl zwischen zwei Einzelbetten oder einem Doppelbett und einem Einzelbett — Kleiderschrank, Kommode, Spiegel und Ventilator.' },

      { icon: '🚇', title: 'U-Bahn Alameda', desc: 'Station Alameda (Gelbe Linie) nur 3 Gehminuten entfernt. Direkter Zugang zum Zentrum ohne Auto.' },
      { icon: '🌊', title: 'Fluss Tejo', desc: 'Der Tejo ist nur 20 Gehminuten entfernt.' },
      { icon: '🚲', title: 'Fahrrad willkommen', desc: 'Bringen Sie Ihr Fahrrad mit und bewahren Sie es im Zimmer auf.' },
    ],
    access_title: 'Gästezugang',
    access_items: [
      'Vollständiges Badezimmer',
      'Vollständig ausgestattete Küche (bis 22 Uhr)',
      'Gemeinschaftsbereiche der Wohnung',
    ],
    rules_title: 'Praktische Informationen',
    rules: [
      { icon: '🕛', label: 'Check-in', value: '12–24 Uhr (nach Mitternacht: +€20)' },
      { icon: '🕙', label: 'Check-out', value: '0–11 Uhr' },
      { icon: '🔇', label: 'Ruhezeit', value: 'Ab 22 Uhr' },
      { icon: '🧳', label: 'Gepäckaufbewahrung', value: '€5 (unbegrenzt, bis Mitternacht)' },
      { icon: '👕', label: 'Wäsche', value: '€5 pro Nutzung' },
      { icon: '🚗', label: 'Kostenloser Parkplatz', value: 'Mo–Fr 19–9 Uhr; Sa, So & Feiertage (ganztägig)' },
    ],
    tour_title: 'Geführte Tour durch Lissabon',
    tour_desc: 'Private geführte Tour zu den 4 ikonischsten Aussichtspunkten Lissabons — 4 Stunden, bis zu 4 Personen.',
    tour_price: '€50',
  },
  it: {
    tag: 'Lo Spazio',
    title: 'Camera Privata in un',
    subtitle: 'Appartamento Condiviso',
    intro: 'Una camera spaziosa e confortevole per una, due o tre persone, in un appartamento T5 di 98m² con tre camere disponibili — ideale per piccoli gruppi, famiglie o viaggiatori.',
    highlights: [
      { icon: '🔑', title: 'Check-in Autonomo', desc: 'Entra da solo e senza problemi con il tastierino numerico.' },
      { icon: '💻', title: 'Spazio di Lavoro', desc: 'Scrivania, sedia e Wi-Fi ad alta velocità in ogni camera.' },
      { icon: '🛏️', title: 'Camera Spaziosa', desc: 'Scelta tra due letti singoli o un letto matrimoniale e uno singolo — armadio, cassettiera, specchio e ventilatore.' },

      { icon: '🚇', title: 'Metro Alameda', desc: 'Stazione Alameda (Linea Gialla) a soli 3 minuti a piedi. Accesso diretto al centro senza auto.' },
      { icon: '🌊', title: 'Fiume Tago', desc: 'Il fiume Tago è a soli 20 minuti a piedi.' },
      { icon: '🚲', title: 'Bici Benvenuta', desc: 'Puoi portare la tua bicicletta e tenerla in camera.' },
    ],
    access_title: 'Accesso degli Ospiti',
    access_items: [
      'Bagno completo',
      'Cucina completamente attrezzata (fino alle 22)',
      'Aree comuni dell\'appartamento',
    ],
    rules_title: 'Informazioni Pratiche',
    rules: [
      { icon: '🕛', label: 'Check-in', value: '12–24 (dopo mezzanotte: +€20)' },
      { icon: '🕙', label: 'Check-out', value: '0–11' },
      { icon: '🔇', label: 'Silenzio', value: 'Dalle 22' },
      { icon: '🧳', label: 'Bagagli', value: '€5 (illimitato, fino a mezzanotte)' },
      { icon: '👕', label: 'Lavanderia', value: '€5 per utilizzo' },
      { icon: '🚗', label: 'Parcheggio gratuito', value: 'Lun–Ven 19–9; Sab, Dom e festivi (tutto il giorno)' },
    ],
    tour_title: 'Tour Guidato di Lisbona',
    tour_desc: 'Tour privato dei 4 belvedere più iconici di Lisbona — 4 ore, fino a 4 persone.',
    tour_price: '€50',
  },
  ja: {
    tag: 'スペース',
    title: 'シェアアパートメントの',
    subtitle: 'プライベートルーム',
    intro: '98m²のT5アパートメントに3部屋あり、1〜3名様向けの広々とした快適なお部屋です。小グループ、家族連れ、または快適な滞在を求める旅行者に最適です。',
    highlights: [
      { icon: '🔑', title: 'セルフチェックイン', desc: 'キーパッドで簡単にチェックイン。' },
      { icon: '💻', title: 'ワークスペース', desc: '各部屋にデスク、椅子、高速Wi-Fi完備。' },
      { icon: '🛏️', title: '広々とした部屋', desc: 'シングルベッド2台またはダブルベッド1台＋シングルベッド1台を選択可 — ワードローブ、チェスト、鏡、扇風機。' },

      { icon: '🚇', title: 'オディヴェラス駅', desc: 'オディヴェラス駅（イエローライン）は徒歩3分。車不要で市内中心部へ直通。' },
      { icon: '🌊', title: 'テージョ川', desc: 'テージョ川まで徒歩20分。' },
      { icon: '🚲', title: '自転車歓迎', desc: '自転車を持ち込んで部屋に保管できます。' },
    ],
    access_title: 'ゲストのアクセス',
    access_items: [
      'バスルーム',
      '設備完備のキッチン（22時まで）',
      'アパートメントの共用スペース',
    ],
    rules_title: '実用情報',
    rules: [
      { icon: '🕛', label: 'チェックイン', value: '12時〜24時（深夜以降：+€20）' },
      { icon: '🕙', label: 'チェックアウト', value: '0時〜11時' },
      { icon: '🔇', label: '静粛時間', value: '22時以降' },
      { icon: '🧳', label: '荷物預かり', value: '€5（数量・時間無制限、深夜まで）' },
      { icon: '👕', label: 'ランドリー', value: '€5/回' },
      { icon: '🚗', label: '無料駐車場', value: '月〜金 19時〜翌9時；土日祝（終日）' },
    ],
    tour_title: 'リスボン観光ガイドツアー',
    tour_desc: 'リスボンの4大展望台をめぐるプライベートガイドツアー — 4時間、最大4名。',
    tour_price: '€50',
  },
};

export default function SpaceDetails() {
  const { lang } = useLanguage();
  const c = content[lang] || content.pt;

  return (
    <section className="section space-details" id="space">
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
          <h2 className="section-title">{c.title} <span>{c.subtitle}</span></h2>
          <p className="space-details__intro">{c.intro}</p>
        </motion.div>

        {/* Highlights */}
        <div className="space-details__highlights">
          {c.highlights.map((h, i) => (
            <motion.div
              key={i}
              className="space-details__highlight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <span className="space-details__highlight-icon">{h.icon}</span>
              <div>
                <div className="space-details__highlight-title">{h.title}</div>
                <div className="space-details__highlight-desc">{h.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Access + Rules */}
        <div className="space-details__bottom">

          {/* Acesso */}
          <motion.div
            className="space-details__card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-details__card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              {c.access_title}
            </div>
            <ul className="space-details__access-list">
              {c.access_items.map((item, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Regras / Info */}
          <motion.div
            className="space-details__card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-details__card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
              {c.rules_title}
            </div>
            <ul className="space-details__rules-list">
              {c.rules.map((r, i) => (
                <li key={i}>
                  <span className="space-details__rule-icon">{r.icon}</span>
                  <span className="space-details__rule-label">{r.label}</span>
                  <span className="space-details__rule-value">{r.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tour Banner */}
        <motion.div
          className="space-details__tour"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-details__tour-text">
            <div className="space-details__tour-title">{c.tour_title}</div>
            <div className="space-details__tour-desc">{c.tour_desc}</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
