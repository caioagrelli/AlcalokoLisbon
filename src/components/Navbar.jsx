import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config';

const sections = ['about', 'space', 'photos', 'spots', 'map', 'ebike'];

/* SVG escalável — sem restrições de tamanho, funciona em todos os sistemas */
function Flag({ country, size = 20 }) {
  return (
    <img
      src={`https://flagcdn.com/${country}.svg`}
      width={size}
      height={Math.round(size * 0.75)}
      alt={country}
      loading="eager"
      style={{ borderRadius: '3px', objectFit: 'cover', flexShrink: 0, display: 'block' }}
    />
  );
}

export default function Navbar() {
  const { lang, setLang, t, languages } = useLanguage();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [langOpen,  setLangOpen]  = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const currentLang = languages.find(l => l.code === lang);
  const whatsappLink = getWhatsAppLink(t.whatsapp_msg);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar__inner">

            <a className="navbar__logo" href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Alcaloko Home Lisbon" className="navbar__logo-img" />
              <span className="navbar__logo-name">
                <span style={{ color: '#22c55e' }}>TIMI</span>
                {' '}
                <span style={{ color: '#9b1c1c' }}>Alcaloko Airbnb Lisboa</span>
                {' '}
                <span style={{ color: '#cbd5e1', fontSize: '0.8em', letterSpacing: '0.04em' }}>No.001</span>
              </span>
            </a>

            <ul className="navbar__links">
              {sections.map((s) => (
                <li key={s}>
                  <a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>
                    {s === 'ebike'
                      ? <span style={{ color: '#22c55e', fontWeight: 700 }}>TIMI</span>
                      : t.nav[s] || s}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar__right">
              <div className="lang-selector" ref={langRef}>
                <button
                  className="lang-selector__btn"
                  onClick={() => setLangOpen(!langOpen)}
                  aria-label="Selecionar idioma"
                >
                  <Flag country={currentLang?.country} size={22} />
                  <span className="lang-selector__code">{lang.toUpperCase()}</span>
                  <svg className={`lang-selector__chevron${langOpen ? ' open' : ''}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {langOpen && (
                  <div className="lang-selector__dropdown">
                    {languages.map((l) => (
                      <button key={l.code}
                        className={`lang-selector__option${lang === l.code ? ' active' : ''}`}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                      >
                        <Flag country={l.country} size={24} />
                        <span className="lang-selector__opt-name">{l.name}</span>
                        {lang === l.code && (
                          <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a className="navbar__book-btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {t.nav.book}
              </a>

              <button className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {sections.map((s) => (
          <a key={s} href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>
            {s === 'ebike'
              ? <span style={{ color: '#22c55e', fontWeight: 700 }}>TIMI</span>
              : t.nav[s]}
          </a>
        ))}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          {t.nav.book}
        </a>
        <div className="navbar__mobile-langs">
          {languages.map((l) => (
            <button key={l.code} className={lang === l.code ? 'active' : ''}
              onClick={() => { setLang(l.code); setMenuOpen(false); }} title={l.name}>
              <Flag country={l.country} size={28} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700 }}>{l.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
