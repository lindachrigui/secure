# OSINT Simulation Lab

Application web locale et fictive pour un exercice pedagogique interne de sensibilisation a l'analyse front-end et au stockage cote client.

## Objectif

Ce projet simule une petite plateforme d'entreprise avec :

- une page de login
- un dashboard moderne
- des donnees de demonstration fictives
- un exercice defensif de recuperation de coordonnees GPS factices cachees dans l'application

Tout le contenu est invente. Aucune collecte reelle, aucun backend sensible et aucune exfiltration ne sont inclus.

## Stack

- React + Vite
- Tailwind CSS
- stockage local navigateur
- mock API servie par fichier statique

## Lancement

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichee par Vite, en general `http://localhost:5173`.

## Deploiement Vercel

Le projet est maintenant adapte a un hebergement Vercel standard.

### Option 1. Import depuis GitHub

1. ouvrir `https://vercel.com/new`
2. importer le depot `lindachrigui/secure`
3. laisser les parametres par defaut pour un projet `Vite`
4. cliquer sur `Deploy`

### Option 2. Deploy avec Vercel CLI

```bash
npm install -g vercel
vercel
```

Puis suivre l'assistant interactif.

### Notes

- `vercel.json` contient une rewrite vers `index.html`
- cela permet a `React Router` de fonctionner correctement sur `/login` et `/dashboard`
- aucune configuration speciale de base path n'est necessaire sur Vercel

## Identifiants de demonstration

- Email : `analyst@northbridge.lab`
- Mot de passe : `DemoAccess!2026`

## Arborescence principale

```text
.
|-- public/
|   `-- mock/
|       `-- briefing.json
|-- src/
|   |-- components/
|   |   |-- Sidebar.jsx
|   |   |-- StatCard.jsx
|   |   `-- TopBar.jsx
|   |-- config/
|   |   `-- runtimeProfile.js
|   |-- lib/
|   |   |-- auth.js
|   |   |-- clues.js
|   |   |-- crypto.js
|   |   `-- mockApi.js
|   |-- pages/
|   |   |-- DashboardPage.jsx
|   |   `-- LoginPage.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- README.md
`-- WALKTHROUGH.md
```

## Nature de l'exercice

Ce lab est strictement educatif et defensif. Il sert a illustrer comment des informations apparemment anodines peuvent etre reconstruites a partir :

- du code source front-end
- des cookies
- du `localStorage` / `sessionStorage`
- du HTML
- d'une reponse reseau mockee

Le detail de la cachette et de la resolution se trouve dans [WALKTHROUGH.md](./WALKTHROUGH.md).

# secure
coordonnées : 
mdp : DemoAccess!2026
