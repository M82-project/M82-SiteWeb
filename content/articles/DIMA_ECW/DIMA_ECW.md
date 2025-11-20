---
title: "DIMA à l'ECW 2025"
date: 2025-11-19
author: Bertrand Boyer 
tags: [LMI, desinformation, DIMA]
---


# DIMA : Un framework pour décrire et détecter les attaques cognitives

Hier, lors de l'European Cyber Week (ECW), nous avons présenté DIMA, un framework développé par le M82 Project pour analyser et détecter les manipulations de l'information et les attaques cognitives.

## Au-delà de la simple détection de fake news

DIMA ne cherche pas à détecter les fausses informations. Son objectif est d'évaluer dans quelle mesure un contenu est délibérément conçu pour exploiter nos vulnérabilités cognitives - ces biais et heuristiques que notre cerveau utilise pour traiter l'information rapidement.

## La "Cognitive Kill Chain" en 4 phases

Inspiré des méthodologies de cybersécurité comme MITRE ATT&CK et DISARM, DIMA modélise le processus d'une attaque cognitive selon quatre phases clés :

1. **Détecter** : Pourquoi cette information a-t-elle attiré mon attention ?
2. **Informer** : Comment ai-je donné du sens à cette information ?
3. **Mémoriser** : Pourquoi ai-je retenu cette information ?
4. **Agir** : Pourquoi cette information provoque-t-elle une réaction de ma part ?

Chaque phase regroupe des tactiques et techniques d'exploitation de biais cognitifs spécifiques, identifiées par des codes (TA pour tactique, TE pour technique).

## Un exemple concret : l'affaire des "punaises de lit"

En octobre 2023, la panique autour des punaises de lit à Paris illustre parfaitement le fonctionnement de DIMA :

- **Détection** : L'illusion de fréquence (TE0121) amplifie notre perception du phénomène
- **Information** : Un biais de corrélation illusoire (TE0211) crée un lien fallacieux avec les réfugiés ukrainiens
- **Mémorisation** : L'effet de suggestion (TE0314) et les stéréotypes implicites (TE0321) ancrent l'information
- **Action** : Le biais d'autorité (TE0422) déclenche des réactions via des "experts" supposés

## Des outils concrets pour tous

Le framework DIMA s'accompagne d'outils pratiques en cours de développement :

- **Une extension Chrome** pour analyser les pages web en temps réel
- **Un analyseur automatique** de flux RSS
- **Des projets en développement** intégrant l'IA pour une détection avancée

Tous ces outils sont disponibles en open source sur [GitHub](https://github.com/M82-project).

## Participer au projet

DIMA est un projet collaboratif et évolutif. Nous analysons actuellement les cas documentés (projet DIOD) pour :

- Identifier les signatures comportementales des acteurs malveillants
- Mesurer les similitudes entre campagnes via des analyses mathématiques
- Proposer des mesures de remédiation ciblées

Le framework complet est accessible sur [Framindmap](https://framindmap.org/c/maps/1457115/public), et nous encourageons la communauté à contribuer au développement via notre [dépôt GitHub](https://github.com/M82-project).

---

**Pour aller plus loin** : [Télécharger la présentation complète (PDF)](/files/DIMA_V7.pdf)

**Liens utiles** :
- [Extension Chrome DIMA](https://github.com/M82-project/DIMA_Plugin_Chrome)
- [DIMAnalyzer](https://github.com/alexbarbaron/DIMAnalyzer)
- [Framework DIMA sur Framindmap](https://framindmap.org/c/maps/1457115/public)
