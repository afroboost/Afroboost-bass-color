// Configuration globale de l'application Afroboost
// Compatible Vercel / Node.js

export const APP_CONFIG = {
  // Admin
  ADMIN_EMAIL: 'contact.artboost@gmail.com',
  COACH_DEFAULT_EMAIL: 'coach@afroboost.com',
  
  // API
  API_URL: process.env.REACT_APP_BACKEND_URL || '',
  
  // App Info
  APP_NAME: 'Afroboost',
  APP_VERSION: '2.0.0',
  
  // Defaults
  DEFAULT_LANGUAGE: 'fr',
  SUPPORTED_LANGUAGES: ['fr', 'en', 'de'],
  
  // Limits
  MAX_IMAGES_PER_OFFER: 5,
  MIN_PASSWORD_LENGTH: 6,
  
  // Storage Keys
  STORAGE_KEYS: {
    COACH_AUTH: 'coachAuth',
    USER_LANG: 'userLang',
    RESERVATIONS: 'afroboost_reservations'
  }
};

export default APP_CONFIG;
