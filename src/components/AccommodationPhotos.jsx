import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { pub } from '../config';

/*
 * ════════════════════════════════════════════════════════════════
 *  CAPACIDADE POR OPÇÃO  ←  edite aqui!
 *  [0] = texto do botão "Todos"
 *  [1] = texto do botão "Quarto 1"
 *  [2] = texto do botão "Quarto 2"
 *  [3] = texto do botão "Quarto 3"
 * ════════════════════════════════════════════════════════════════
 */
const ROOM_CAPACITY = [
  '2 – 3 pessoas',   // Todos
  'Até 2 pessoas',   // Quarto 1
  'Até 2 pessoas',   // Quarto 2
  'Até 3 pessoas',   // Quarto 3
];

/*
 * ════════════════════════════════════════════════════════════════
 *  COMO ADICIONAR SUAS FOTOS:
 *  Substitua `src: null` pelo URL ou caminho da sua foto.
 *  • room: 0  → aparece em "Todos" (áreas comuns)
 *  • room: 1  → Quarto 1
 *  • room: 2  → Quarto 2
 *  • room: 3  → Quarto 3
 *
 *  Exemplos de src:
 *    src: '/fotos/sala.jpg'   ← arquivo em /public/fotos/
 *    src: 'https://...'       ← URL externo
 * ════════════════════════════════════════════════════════════════
 */
const photos = [
  // ── Áreas Comuns (room: 0) — adicione fotos aqui quando tiver ──
  { src: null, alt: 'Foto 1', span: 'large',  room: 0 },
  { src: null, alt: 'Foto 2', span: 'normal', room: 0 },
  { src: null, alt: 'Foto 3', span: 'normal', room: 0 },
  { src: null, alt: 'Foto 4', span: 'normal', room: 0 },
  { src: null, alt: 'Foto 5', span: 'large',  room: 0 },
  { src: null, alt: 'Foto 6', span: 'normal', room: 0 },

  // ── Quarto 1 (room: 1) ──────────────────────────────
  { src: pub('/photos/rooms/room1/r1_1.png'), alt: 'Quarto 1', span: 'large',  room: 1 },
  { src: pub('/photos/rooms/room1/r1_2.png'), alt: 'Quarto 1', span: 'normal', room: 1 },
  { src: pub('/photos/rooms/room1/r1_3.png'), alt: 'Quarto 1', span: 'normal', room: 1 },
  { src: pub('/photos/rooms/room1/r1_4.png'), alt: 'Quarto 1', span: 'normal', room: 1 },
  { src: pub('/photos/rooms/room1/r1_5.png'), alt: 'Quarto 1', span: 'large',  room: 1 },
  { src: pub('/photos/rooms/room1/r1_6.png'), alt: 'Quarto 1', span: 'normal', room: 1 },
  { src: pub('/photos/rooms/room1/r1_7.png'), alt: 'Quarto 1', span: 'normal', room: 1 },

  // ── Quarto 2 (room: 2) ──────────────────────────────
  { src: pub('/photos/rooms/room2/r2_1.png'), alt: 'Quarto 2', span: 'large',  room: 2 },
  { src: pub('/photos/rooms/room2/r2_2.png'), alt: 'Quarto 2', span: 'normal', room: 2 },
  { src: pub('/photos/rooms/room2/r2_3.png'), alt: 'Quarto 2', span: 'normal', room: 2 },
  { src: pub('/photos/rooms/room2/r2_4.png'), alt: 'Quarto 2', span: 'normal', room: 2 },
  { src: pub('/photos/rooms/room2/r2_5.png'), alt: 'Quarto 2', span: 'large',  room: 2 },
  { src: pub('/photos/rooms/room2/r2_6.png'), alt: 'Quarto 2', span: 'normal', room: 2 },
  { src: pub('/photos/rooms/room2/r2_7.png'), alt: 'Quarto 2', span: 'normal', room: 2 },
  { src: pub('/photos/rooms/room2/r2_8.png'), alt: 'Quarto 2', span: 'normal', room: 2 },

  // ── Quarto 3 (room: 3) ──────────────────────────────
  { src: pub('/photos/rooms/room3/r3_1.png'), alt: 'Quarto 3', span: 'large',  room: 3 },
  { src: pub('/photos/rooms/room3/r3_2.png'), alt: 'Quarto 3', span: 'normal', room: 3 },
  { src: pub('/photos/rooms/room3/r3_3.png'), alt: 'Quarto 3', span: 'normal', room: 3 },
  { src: pub('/photos/rooms/room3/r3_4.png'), alt: 'Quarto 3', span: 'normal', room: 3 },
  { src: pub('/photos/rooms/room3/r3_5.png'), alt: 'Quarto 3', span: 'large',  room: 3 },
  { src: pub('/photos/rooms/room3/r3_6.png'), alt: 'Quarto 3', span: 'normal', room: 3 },
  { src: pub('/photos/rooms/room3/r3_7.png'), alt: 'Quarto 3', span: 'normal', room: 3 },
  { src: pub('/photos/rooms/room3/r3_8.png'), alt: 'Quarto 3', span: 'normal', room: 3 },
];

const i18n = {
  pt: {
    title: 'Fotos da', subtitle: 'Acomodação',
    all: 'Todos', rooms: ['Quarto 1', 'Quarto 2', 'Quarto 3'],
    hint: 'Edite AccommodationPhotos.jsx e coloque o URL da sua foto',
    note: 'Para adicionar fotos, edite o array',
    common: 'Áreas Comuns',
  },
  en: {
    title: 'Accommodation', subtitle: 'Photos',
    all: 'All', rooms: ['Room 1', 'Room 2', 'Room 3'],
    hint: 'Edit AccommodationPhotos.jsx and set the photo URL',
    note: 'To add photos, edit the array',
    common: 'Common Areas',
  },
  fr: {
    title: 'Photos de', subtitle: "l'Appartement",
    all: 'Tout', rooms: ['Chambre 1', 'Chambre 2', 'Chambre 3'],
    hint: 'Modifiez AccommodationPhotos.jsx et ajoutez l\'URL de votre photo',
    note: 'Pour ajouter des photos, modifiez le tableau',
    common: 'Espaces Communs',
  },
  es: {
    title: 'Fotos del', subtitle: 'Alojamiento',
    all: 'Todo', rooms: ['Habitación 1', 'Habitación 2', 'Habitación 3'],
    hint: 'Edita AccommodationPhotos.jsx y pon la URL de tu foto',
    note: 'Para agregar fotos, edita el array',
    common: 'Áreas Comunes',
  },
  de: {
    title: 'Fotos der', subtitle: 'Unterkunft',
    all: 'Alle', rooms: ['Zimmer 1', 'Zimmer 2', 'Zimmer 3'],
    hint: 'Bearbeiten Sie AccommodationPhotos.jsx und fügen Sie Ihre Foto-URL hinzu',
    note: 'Um Fotos hinzuzufügen, bearbeiten Sie das Array',
    common: 'Gemeinschaftsbereiche',
  },
  it: {
    title: "Foto dell'", subtitle: 'Alloggio',
    all: 'Tutti', rooms: ['Camera 1', 'Camera 2', 'Camera 3'],
    hint: 'Modifica AccommodationPhotos.jsx e inserisci l\'URL della tua foto',
    note: 'Per aggiungere foto, modifica l\'array',
    common: 'Aree Comuni',
  },
  ja: {
    title: '宿泊施設の', subtitle: '写真',
    all: 'すべて', rooms: ['部屋 1', '部屋 2', '部屋 3'],
    hint: 'AccommodationPhotos.jsx を編集して写真URLを設定してください',
    note: '写真を追加するには配列を編集してください',
    common: '共用エリア',
  },
};

function CameraIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
}

export default function AccommodationPhotos() {
  const { lang } = useLanguage();
  const lbl = i18n[lang] || i18n.pt;

  // 0 = Todos, 1/2/3 = Quarto específico
  const [activeRoom, setActiveRoom] = useState(0);

  const filteredPhotos = photos.filter(p => p.room === activeRoom);

  const tabs = [
    { id: 0, label: lbl.all,       capacity: ROOM_CAPACITY[0] },
    { id: 1, label: lbl.rooms[0],  capacity: ROOM_CAPACITY[1] },
    { id: 2, label: lbl.rooms[1],  capacity: ROOM_CAPACITY[2] },
    { id: 3, label: lbl.rooms[2],  capacity: ROOM_CAPACITY[3] },
  ];

  return (
    <section className="section apt-photos" id="photos">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-tag">Alcaloko Home Lisbon</span>
          <h2 className="section-title">
            {lbl.title} <span>{lbl.subtitle}</span>
          </h2>
        </motion.div>

        {/* ── Filtro de quartos ── */}
        <motion.div
          className="room-filter"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`room-filter__btn${activeRoom === tab.id ? ' active' : ''}`}
              onClick={() => setActiveRoom(tab.id)}
            >
              {/* Linha principal: ícone + nome */}
              <span className="room-filter__btn-top">
                {tab.id === 0 ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                  </svg>
                )}
                {tab.label}
              </span>

              {/* Linha de capacidade */}
              <span className="room-filter__btn-cap">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                {tab.capacity}
              </span>

              {activeRoom === tab.id && (
                <motion.div className="room-filter__indicator" layoutId="room-indicator" />
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Grid de fotos (com transição ao trocar filtro) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoom}
            className="apt-photos__grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {filteredPhotos.map((photo, i) => (
              <div
                key={`${activeRoom}-${i}`}
                className={`apt-photos__slot${photo.span === 'large' ? ' large' : ''}`}
              >
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                ) : (
                  <div className="apt-photos__placeholder">
                    <div className="apt-photos__placeholder-inner">
                      <div className="apt-photos__placeholder-icon"><CameraIcon /></div>
                      <span className="apt-photos__placeholder-label">{photo.alt}</span>
                    </div>
                    <div className="apt-photos__slot-num">{String(i + 1).padStart(2, '0')}</div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
}
