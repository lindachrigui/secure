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

## Deploiement GitHub Pages

Le projet est configure pour etre deploye sur GitHub Pages depuis le depot :

`https://github.com/lindachrigui/secure`

Le workflow deploiement est dans `.github/workflows/deploy.yml`.

Apres un push sur `main` :

1. ouvrir l'onglet `Settings > Pages` sur GitHub
2. verifier que la source est `GitHub Actions`
3. attendre la fin du workflow `Deploy to GitHub Pages`
4. l'application sera publiee sur :

`https://lindachrigui.github.io/secure/`

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
