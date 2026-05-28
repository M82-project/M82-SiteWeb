---
title: "Augmentez votre vigilance en ligne avec DIMA"
date: 2026-05-10
author: Bertrand Boyer
tags: [LMI,désinformation,DISARM,cognitive warfare]
---

Après quelques ajustements (il y en a sans doute encore !) l'add-on DIMA est enfin disponible en un clic sur le [store Firefox](https://addons.mozilla.org/fr/firefox/addon/dima-analyzer/) et sur le [store Chrome](https://chromewebstore.google.com/detail/dima-analyzer/idefpkpjaihgehhoppojpoboifblfcmm).

Ce petit outil, léger et sans LLM, analyse en statique les pages web que vous visitez pour identifier des mots clés et des structures de phrases régulièrement associées à des exploitations de biais cognitifs. Il repose sur le **framework DIMA** que le collectif M82_project développe depuis trois ans.

[DIMA est un framework d'analyse des opérations d'influence](https://m82-project.org/articles/dima_ecw/dima_ecw/) inspiré de la logique du kill chain militaire et des travaux sur la cognition et la persuasion de Mc Guire. Il décompose la manipulation cognitive en quatre phases : Détecter et attirer l'attention de l'audience cible, Informer en injectant un récit dans l'écosystème informationnel pour donner du sens, Mémoriser en ancrant ce récit, Agir en convertissant l'information reçue en comportements concrets.

À chacune de ces phases correspond un répertoire de techniques — 130 au total — permettant d'identifier, dans un contenu donné, les procédés rhétoriques, narratifs et cognitifs mobilisés par un acteur cherchant à influencer une audience.

Le second volet du plugin permet de signaler si le site visité a été identifié et cité dans un ou des rapports sur la désinformation. Le plugin alerte alors sur la vigilance à accordé aux informations et propose le lien vers le rapport source (permettant à chacun de se forger une opinion).

## Est-ce que ça marche ? 

Le plugin ne "détecte pas la désinformation" mais souligne l'utilisation de techniques pour court-circuiter votre cerveau. C'est un outil de sensibilisation dont l'objectif est de nous faire reprendre un peu de distance et de limiter les réactions "émotionnelles" face à des contenus délibérément construits pour que nous réagissions.

### Mais pourquoi "Le Monde" a un score "élevé" ? 

Plusieurs utilisateurs sont surpris car les sites d'information peuvent parfois avoir des scores "élevés" voire "très élevés". Et bien, c'est tout à fait normal... 

![Article du Monde](/images/DIMA_vigilance/LeMonde_10mai.png)


Prenons cet article du jour : ["Superprofits : les entreprises cotées multiplient les bénéfices record à travers le monde"](https://www.lemonde.fr/economie/article/2026/05/10/superprofits-a-travers-le-monde-les-entreprises-cotees-multiplient-des-benefices-record_6687681_3234.html) , DIMA indique un score de 31/100 = élevé, en cliquant sur le bouton pour avoir l'analyse complète on note ainsi la détection de 5 techniques avec un "équilibre entre Informer et Mémoriser". L'article cherche donc à "donner du sens" et à nous faire retenir l'information. Rien de plus normal pour un média ! De même les sites de ventes en ligne auront des scores élevés car ils incitent à l'action (acte d'achat).

![Analyse DIMA de l'article](/images/DIMA_vigilance/Analyse_1.png)

##Et la désinformation alors ? 

Notre outils ne "détecte pas la désinformation" il vous informe sur les techniques utilisées qui peuvent exploiter des biais cognitifs (c'est pas forcément un mal). C'est un outil de vigilance et de reprise de contrôle ! Pourtant nous avons également mis en base plus de 1200 sites ou noms de domaines qui on été identifiés dans plusieurs rapports comme faisant partie d'infrastructures diffusant délibérément des informations tronqués et manipulatoires. Toutes les sources sont accessibles via le plugin. 

Par exemple, les sites identifiés dans le rapport CopyCop (Storm 1516) de Recorded Future sorti en septembre 2025 sont signalés.
Contenu de l’article

![Site lié à CopyCop - Storm 1516](/images/DIMA_vigilance/copycop1.png)

Dans ce cadre, l'outil vous propose l'accès à la source (le rapport) mais également des recommandations.
Contenu de l’article

![Capture d'écran de la l'analyse](/images/DIMA_vigilance/analyse_copycop1.png)

Des sites qui disparaissent et d'autres toujours là 

L'outil est vivant (nous sommes toujours à l'affut de sources qui identifient des campagnes documentées) mais la bonne nouvelle c'est que de nombreux sites tombent ! On signalera toutefois le site imitant celui de [Newsguard](https://www.newsguardtech.com/fr/) (DIMA score de 11 - risque faible, ça c'est le vrai, on va pas partager ici la copie :)) car il représente une bonne combinaison d'analyse pour notre outil.

Ce faux site combine un score DIMA maximal (100) donc signalé comme "risque critique" avec une alerte qui mentionne que ce site appartient à la galaxie identifié par CopyCop (Storm 1516). Il est malheuresement toujours accessible à date...
Contenu de l’article

![Faux site "News Guard"](/images/DIMA_vigilance/fauxNG.png)
