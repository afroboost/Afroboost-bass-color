# Afroboost - Product Requirements Document

## Original Problem Statement
Application de réservation de casques audio pour des cours de fitness Afroboost. Design sombre néon avec fond noir pur (#000000) et accents rose/violet.

## User Personas
- **Utilisateurs**: Participants aux cours de fitness qui réservent des casques audio
- **Coach**: Administrateur qui gère les cours, offres, réservations et codes promo

## Core Requirements

### Système de Réservation
- [x] Sélection de cours et dates
- [x] Choix d'offres (Cours à l'unité, Carte 10 cours, Abonnement)
- [x] Formulaire d'information utilisateur (Nom, Email, WhatsApp)
- [x] Application de codes promo avec validation en temps réel
- [x] Liens de paiement (Stripe, PayPal, Twint)
- [x] Confirmation de réservation avec code unique

### Mode Coach Secret
- [x] Accès par 3 clics rapides sur le copyright
- [x] Login avec credentials (coach@afroboost.com / afroboost123)
- [x] Tableau de bord avec 6 onglets

### Administration (Mode Coach)
- [x] **Réservations**: Tableau complet avec export CSV
- [x] **Concept & Visuel**: 
  - Description du concept (textarea)
  - URL Média 16:9 (YouTube/Vimeo/Image)
  - URL du Logo (Splash Screen & PWA)
- [x] **Cours**: CRUD complet avec jour, heure, lieu, lien Maps
- [x] **Offres**: 
  - Nom, Prix, URL miniature, Visible
  - Description pour icône "i" (max 150 caractères)
- [x] **Paiements**: Configuration liens Stripe/PayPal/Twint, WhatsApp Coach
- [x] **Codes Promo**: 
  - Création avec type (100%, %, CHF), valeur, bénéficiaire
  - Liste cours autorisés avec scroll
  - Bouton supprimer (poubelle rouge)
  - Import CSV

### Internationalisation (i18n)
- [x] FR, EN, DE
- [x] Changement instantané via icône globe

### Design
- [x] Fond noir pur (#000000)
- [x] Bordures néon rose/violet
- [x] Effets de lueur
- [x] Bouton paiement avec dégradé pulsant

---

## What's Been Implemented (Jan 2026)

### Corrections techniques (13 Jan 2026)
1. ✅ **Lecteur vidéo étanche 16:9**: 
   - Paramètres YouTube: `modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&fs=0`
   - Overlays CSS noir en haut (80px) et en bas (70px) pour masquer titre/logo YouTube
   - Overlay complet pour bloquer tous les clics
2. ✅ **Description du concept**: 
   - Textarea dans Mode Coach → sauvegarde via API → rechargement automatique sur la page d'accueil
   - useEffect avec dépendance `coachMode` pour rafraîchir les données
3. ✅ **Favicon & Logo dynamique**: 
   - useEffect qui met à jour `<link rel="icon">` quand `concept.logoUrl` change
   - Aussi mis à jour pour `apple-touch-icon`
4. ✅ **Cadre vide**: Condition `{concept.heroImageUrl && concept.heroImageUrl.trim() !== ''}` pour ne rien afficher si vide

### Tests
- Backend: 23/23 tests passés (pytest)
- Frontend: Toutes les fonctionnalités vérifiées

---

## Technical Architecture

```
/app/
├── backend/
│   ├── server.py       # FastAPI avec MongoDB
│   ├── requirements.txt
│   └── tests/
│       └── test_afroboost_api.py
└── frontend/
    ├── src/
    │   ├── App.js      # Composant React principal
    │   └── App.css     # Styles néon
    └── public/
        ├── index.html  # PWA meta tags
        └── manifest.json
```

### Data Models (MongoDB)
- `courses`: id, name, weekday, time, locationName, mapsUrl
- `offers`: id, name, price, thumbnail, description, visible
- `users`: id, name, email, whatsapp, createdAt
- `reservations`: id, reservationCode, userId, userName, userEmail, courseId, ...
- `discount_codes`: id, code, type, value, assignedEmail, courses, maxUses, used, active
- `concept`: id, description, heroImageUrl, logoUrl
- `payment_links`: id, stripe, paypal, twint, coachWhatsapp

---

## Prioritized Backlog

### P0 - Completed ✅
- [x] 6 améliorations demandées

### P1 - Future
- [ ] Migration complète localStorage → MongoDB (déjà fait partiellement)
- [ ] Refactoring App.js en composants modulaires

### P2 - Backlog
- [ ] Notifications email après réservation
- [ ] Historique des réservations par utilisateur
- [ ] Dashboard analytics pour le coach
- [ ] Mode sombre/clair toggle

---

## Credentials
- **Coach Login**: coach@afroboost.com / afroboost123
- **Coach Access**: 3 clics rapides sur "© Afroboost 2026"
