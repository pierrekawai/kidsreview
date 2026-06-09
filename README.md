# KidsReview v1.0

Application de révision scolaire progressive web app (PWA) pour enfants du canton de Vaud (Suisse), calibrée sur le Plan d'Études Romand (PER).

## Profils

| Profil | Âge | Niveau | Rôle |
|--------|-----|--------|------|
| Mika   | 7 ans | 3P | Ingénieure IA |
| Pekka  | 9 ans | 5P | Architecte Robot |

## Branches couvertes

- **Français** — lecture, orthographe, grammaire, conjugaison, production
- **Mathématiques** — numération, calcul mental, problèmes, géométrie, mesures
- **Sciences** — vivant, matière, terre, technologie, corps humain, eau
- **Allemand** — vocabulaire, expressions, compréhension orale, production orale
- **Code** — séquences, boucles, conditions, variables, débogage

## Fichiers

| Fichier | Description |
|---------|-------------|
| `KidsReview_V1.0.html` | Application principale (fichier unique autonome) |
| `manifest.json` | Manifeste PWA pour installation sur écran d'accueil |
| `sw.js` | Service Worker — cache hors-ligne |
| `icon-192.svg` | Icône PWA 192×192 |
| `icon-512.svg` | Icône PWA 512×512 (maskable) |

## Utilisation

Ouvrir `KidsReview_V1.0.html` directement dans un navigateur — aucune dépendance externe, aucune installation requise.

Pour déployer sur GitHub Pages : activer Pages sur la branche `main`, le fichier `KidsReview_V1.0.html` est le point d'entrée.

## Caractéristiques techniques

- Application monopage HTML/CSS/JS sans framework
- Données stockées localement (localStorage)
- Compatible Safari iOS, Chrome Android
- Fonctionne hors-ligne après premier chargement (PWA)
- Synthèse vocale (Web Speech API) compatible Safari et Chrome
