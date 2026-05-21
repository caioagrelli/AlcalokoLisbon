import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { pub } from '../config';

/*
 * ════════════════════════════════════════════════════════════════
 *  FOTO DO METRO / LOCALIZAÇÃO
 *  Substitua `METRO_PHOTO_SRC` pelo URL ou caminho da sua foto.
 *  Exemplos:
 *    const METRO_PHOTO_SRC = '/fotos/metro-lisboa.jpg';
 *    const METRO_PHOTO_SRC = 'https://...';
 *  Deixe como null para manter o placeholder.
 *
 *  MAPA GOOGLE:
 *  1. Acesse https://maps.google.com
 *  2. Navegue até o seu endereço exato
 *  3. Clique em "Partilhar" → "Incorporar um mapa"
 *  4. Copie o src do <iframe> e substitua MAP_URL abaixo
 * ════════════════════════════════════════════════════════════════
 */
const METRO_PHOTO_SRC = pub('/METRO.png');

/*
 * ════════════════════════════════════════════════════════════════
 *  OBSERVAÇÃO / NOTA ABAIXO DA FOTO DO METRO
 *  Escreva aqui a sua nota — aparece como um campo de observação
 *  estilizado abaixo da foto.
 *  Exemplos: nome da estação, dica de acesso, horários, etc.
 *  Deixe como string vazia ('') para ocultar o campo.
 * ════════════════════════════════════════════════════════════════
 */
const METRO_NOTE = 'Estação de Metro Odivelas (Linha Amarela) — a apenas 3 minutos a pé do apartamento. Acesso direto ao centro da cidade sem necessidade de carro.';

const MAP_URL =
  'https://www.google.com/maps?q=Av.+Almirante+Reis+166,+1000-053+Lisboa,+Portugal&output=embed';

const labels = {
  pt: {
    title: 'Localização',
    subtitle: 'no Coração de Lisboa',
    tag: 'Como chegar',
    address: 'Av. Almirante Reis 166, Lisboa',
    address_detail: 'Intendente, Lisboa, Portugal',
    items: [
      { icon: '🚇', label: 'Metro', value: '3 min a pé' },
      { icon: '✈️', label: 'Aeroporto', value: '20 min de carro' },
      { icon: '🚌', label: 'Autocarros', value: 'Na porta' },
      { icon: '🏖️', label: 'Rio Tejo', value: '10 min a pé' },
    ],
    open: 'Ver mapa maior',
    photo_hint: 'Foto do Metro / Zona',
    photo_note: 'Defina METRO_PHOTO_SRC em MapSection.jsx para adicionar a foto',
  },
  en: {
    title: 'Location',
    subtitle: 'in the Heart of Lisbon',
    tag: 'Getting Here',
    address: 'Av. Almirante Reis 166, Lisbon',
    address_detail: 'Intendente, Lisboa, Portugal',
    items: [
      { icon: '🚇', label: 'Metro', value: '3 min walk' },
      { icon: '✈️', label: 'Airport', value: '20 min by car' },
      { icon: '🚌', label: 'Bus', value: 'At the door' },
      { icon: '🏖️', label: 'Tagus River', value: '10 min walk' },
    ],
    open: 'View larger map',
    photo_hint: 'Metro / Area Photo',
    photo_note: 'Set METRO_PHOTO_SRC in MapSection.jsx to add the photo',
  },
  fr: {
    title: 'Localisation',
    subtitle: 'au Cœur de Lisbonne',
    tag: 'Comment venir',
    address: 'Av. Almirante Reis 166, Lisbonne',
    address_detail: 'Intendente, Lisboa, Portugal',
    items: [
      { icon: '🚇', label: 'Métro', value: '3 min à pied' },
      { icon: '✈️', label: 'Aéroport', value: '20 min en voiture' },
      { icon: '🚌', label: 'Bus', value: 'À la porte' },
      { icon: '🏖️', label: 'Fleuve Tage', value: '10 min à pied' },
    ],
    open: 'Voir la carte agrandie',
    photo_hint: 'Photo Métro / Zone',
    photo_note: 'Définissez METRO_PHOTO_SRC dans MapSection.jsx pour ajouter la photo',
  },
  es: {
    title: 'Ubicación',
    subtitle: 'en el Corazón de Lisboa',
    tag: 'Cómo llegar',
    address: 'Av. Almirante Reis 166, Lisboa',
    address_detail: 'Intendente, Lisboa, Portugal',
    items: [
      { icon: '🚇', label: 'Metro', value: '3 min caminando' },
      { icon: '✈️', label: 'Aeropuerto', value: '20 min en coche' },
      { icon: '🚌', label: 'Autobús', value: 'En la puerta' },
      { icon: '🏖️', label: 'Río Tajo', value: '10 min caminando' },
    ],
    open: 'Ver mapa más grande',
    photo_hint: 'Foto Metro / Zona',
    photo_note: 'Define METRO_PHOTO_SRC en MapSection.jsx para agregar la foto',
  },
  de: {
    title: 'Lage',
    subtitle: 'im Herzen von Lissabon',
    tag: 'Anreise',
    address: 'Av. Almirante Reis 166, Lissabon',
    address_detail: 'Intendente, Lisboa, Portugal',
    items: [
      { icon: '🚇', label: 'U-Bahn', value: '3 min zu Fuß' },
      { icon: '✈️', label: 'Flughafen', value: '20 min mit dem Auto' },
      { icon: '🚌', label: 'Bus', value: 'Direkt vor der Tür' },
      { icon: '🏖️', label: 'Fluss Tejo', value: '10 min zu Fuß' },
    ],
    open: 'Größere Karte anzeigen',
    photo_hint: 'U-Bahn / Gegend Foto',
    photo_note: 'Setzen Sie METRO_PHOTO_SRC in MapSection.jsx, um das Foto hinzuzufügen',
  },
  it: {
    title: 'Posizione',
    subtitle: 'nel Cuore di Lisbona',
    tag: 'Come arrivare',
    address: 'Av. Almirante Reis 166, Lisbona',
    address_detail: 'Intendente, Lisbona, Portogallo',
    items: [
      { icon: '🚇', label: 'Metro', value: '3 min a piedi' },
      { icon: '✈️', label: 'Aeroporto', value: '20 min in auto' },
      { icon: '🚌', label: 'Autobus', value: 'Proprio alla porta' },
      { icon: '🏖️', label: 'Fiume Tago', value: '10 min a piedi' },
    ],
    open: 'Vedi mappa più grande',
    photo_hint: 'Foto Metro / Zona',
    photo_note: 'Imposta METRO_PHOTO_SRC in MapSection.jsx per aggiungere la foto',
  },
  ja: {
    title: '場所',
    subtitle: 'リスボンの中心に',
    tag: 'アクセス',
    address: 'Av. Almirante Reis 166, リスボン',
    address_detail: 'インテンデンテ、リスボン、ポルトガル',
    items: [
      { icon: '🚇', label: '地下鉄', value: '徒歩3分' },
      { icon: '✈️', label: '空港', value: '車で20分' },
      { icon: '🚌', label: 'バス', value: '目の前' },
      { icon: '🏖️', label: 'テージョ川', value: '徒歩10分' },
    ],
    open: '大きな地図を見る',
    photo_hint: '地下鉄 / エリア写真',
    photo_note: 'MapSection.jsx で METRO_PHOTO_SRC を設定してください',
  },
};

function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
}

export default function MapSection() {
  const { lang } = useLanguage();
  const lbl = labels[lang] || labels.pt;

  return (
    <section className="section map-section" id="map">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-tag">{lbl.tag}</span>
          <h2 className="section-title">
            {lbl.title} <span>{lbl.subtitle}</span>
          </h2>
        </motion.div>

        {/* ── Foto do metro (banner acima do mapa) ── */}
        <motion.div
          className="map-section__photo-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {METRO_PHOTO_SRC ? (
            <img src={METRO_PHOTO_SRC} alt={lbl.photo_hint} loading="lazy" />
          ) : (
            <div className="map-section__photo-placeholder">
              <CameraIcon />
              <div>
                <div className="map-section__photo-placeholder-title">{lbl.photo_hint}</div>
                <div className="map-section__photo-placeholder-note">{lbl.photo_note}</div>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Observação abaixo da foto ── */}
        {METRO_NOTE && (
          <motion.div
            className="map-section__note"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="map-section__note-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            <p className="map-section__note-text">{METRO_NOTE}</p>
          </motion.div>
        )}

        {/* ── Layout: mapa + sidebar ── */}
        <div className="map-section__layout">

          {/* Google Maps interativo */}
          <motion.div
            className="map-section__map-wrap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <iframe
              title="Localização Alcaloko — Lisboa"
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="map-section__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="map-section__address">
              <div className="map-section__address-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <div className="map-section__address-name">{lbl.address}</div>
                <div className="map-section__address-detail">{lbl.address_detail}</div>
              </div>
            </div>

            <div className="map-section__items">
              {lbl.items.map((item, i) => (
                <motion.div key={i} className="map-section__item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <span className="map-section__item-icon">{item.icon}</span>
                  <div>
                    <div className="map-section__item-label">{item.label}</div>
                    <div className="map-section__item-value">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a className="map-section__external"
              href="https://maps.google.com/?q=Av.+Almirante+Reis+166,+1000-053+Lisboa,+Portugal"
              target="_blank" rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              {lbl.open}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
