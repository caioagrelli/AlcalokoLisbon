import { createContext, useContext, useState } from 'react';
import translations from '../locales';

const LanguageContext = createContext(null);

export const languages = [
  { code: 'pt', name: 'Português', country: 'pt' },
  { code: 'en', name: 'English',   country: 'gb' },
  { code: 'fr', name: 'Français',  country: 'fr' },
  { code: 'es', name: 'Español',   country: 'es' },
  { code: 'de', name: 'Deutsch',   country: 'de' },
  { code: 'it', name: 'Italiano',  country: 'it' },
  { code: 'ja', name: '日本語',    country: 'jp' },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
