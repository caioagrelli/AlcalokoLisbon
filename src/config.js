// Configuração do site — substitua pelos seus dados reais
export const WHATSAPP_NUMBER = '+351916900536';
export const TELEGRAM_HANDLE = 'alcaloko';          // sem o @, ex: 'alcaloko'
export const CONTACT_EMAIL   = 'alcaloko@gmail.com'; // substitua pelo email real

/* Prefixo correto para arquivos em /public — funciona em dev e GitHub Pages */
export const pub = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export const PROPERTY_NAME = 'Alcaloko';
export const PROPERTY_LOCATION = 'Lisboa, Portugal';

export const getWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encoded}`;
};
