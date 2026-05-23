---
title: "DIMA Navigator : parcourir la matrice et documenter ses campagnes"
date: 2026-05-23
author: Sébastien Larinier
tags: [LMI, désinformation, DIMA, outils]
---

Après le [framework](https://m82-project.org/articles/dima/dima/), le [plugin navigateur](https://m82-project.org/articles/dima_vigilance/dima_vigilance/) et la [présentation à l'ECW](https://m82-project.org/articles/dima_ecw/dima_ecw/), il manquait une brique : un outil léger pour **parcourir la matrice DIMA** sans avoir à ouvrir le PDF, et surtout pour **documenter une campagne** en cochant les techniques observées. C'est désormais en ligne :

👉 **[m82-project.github.io/DIMA](https://m82-project.github.io/DIMA/)**

## Ce que ça fait

Le Navigator est une application web statique, sans backend, qui charge la matrice DIMA et permet trois choses :

1. **Naviguer** dans les quatre phases (Detect, Inform, Memorise, Act), leurs tactiques (TA) et leurs techniques (TE) avec leurs descriptions
2. **Sélectionner** les techniques observées dans un contenu ou une campagne donnée
3. **Générer un rapport de campagne** structuré (nom, période d'observation, contexte général, techniques retenues) exportable en JSON ou en PDF

L'idée est de proposer à l'analyste OSINT/LMI le même geste que l'ATT&CK Navigator pour les TTPs offensives : sélectionner des cases, annoter, exporter, partager.

## Pourquoi un outil de plus

Le PDF de référence ([DIMA V7](https://m82-project.org/files/DIMA_V7.pdf)) est très bien pour lire, mais peu pratique dès qu'il s'agit de **construire un livrable**. La carte [Framindmap](https://framindmap.org/c/maps/1457115/public) est sympa pour explorer mais ne sait pas exporter une analyse. Le plugin navigateur fait de la **détection automatique** sur une page, pas de la **caractérisation manuelle** sur une campagne.

Le Navigator vient combler ce trou : produire en quelques clics un artefact partageable qui dit *"sur cette campagne, voici les techniques DIMA mobilisées"*. C'est le pendant cognitif d'un rapport TTP en CTI.

## L'import/export JSON

Le format JSON permet trois usages :

- **Reprendre** un rapport partiellement renseigné plus tard
- **Partager** une analyse entre membres d'un même groupe de travail
- **Industrialiser** la production de rapports DIMA depuis un pipeline (un script qui pré-coche des techniques détectées automatiquement, puis un analyste qui valide dans le Navigator)

C'est aussi le format pivot envisagé pour relier le plugin (qui détecte) et le Navigator (qui caractérise) : un export du plugin pourra à terme être réimporté dans le Navigator pour validation manuelle.

## Le code

Tout est dans le dépôt [M82-project/DIMA](https://github.com/M82-project/DIMA) sous licence Apache 2.0. Les techniques sont stockées dans les répertoires `DETECT/`, `INFORM/`, `MEMORISE/`, `ACT/` — ajouter ou amender une technique, c'est éditer un fichier puis ouvrir une PR.

Le déploiement passe par GitHub Pages via les workflows du dépôt, donc toute modif validée se retrouve en ligne automatiquement.

## La suite

Quelques chantiers ouverts :

- **Visualisation** : représenter graphiquement la couverture des phases par campagne (heatmap, radar)
- **Comparaison** : superposer plusieurs rapports pour identifier des signatures comportementales d'acteurs
- **Connexion DIOD** : exporter directement vers le [wiki DIOD](https://diod.m82-project.org/) qui documente les opérations d'influence

Comme toujours, les contributions sont les bienvenues — issues, PR, ou simplement un retour d'usage sur Mastodon ([@M82_project@infosec.exchange](https://infosec.exchange/@M82_project)).

---

**Liens utiles** :
- [DIMA Navigator](https://m82-project.github.io/DIMA/)
- [Dépôt GitHub](https://github.com/M82-project/DIMA)
- [Plugin Firefox](https://addons.mozilla.org/fr/firefox/addon/)
- [Plugin Chrome](https://github.com/M82-project/DIMA_Plugin_Chrome)
- [Wiki DIOD](https://diod.m82-project.org/index.php/Matrice_DIMA)
