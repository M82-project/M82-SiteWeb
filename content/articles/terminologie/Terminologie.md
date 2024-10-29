---
title: "Lutte contre la Manipulation de l’Information (LMI) et terminologie: “Houston we have a problem"
date: 2024-10-29
author: Bertrand Boyer
tags: [LMI,désinformation,DISARM,MITRE]
---
Depuis plusieurs mois, la lecture des rapports et des diverses lettres informations qui traitent des sujets liés à la manipulation de l’information me laisse un peu sur ma faim. Sans vraiment comprendre pourquoi, j’avais le sentiment d’un manque. Mais où est le problème ?

Si, comme nous l’avons proposé [la comparaison méthodologique entre cybersécurité et opérations d’ingérence numérique](https://connect.ed-diamond.com/misc/mischs-028/disarm-s-inspirer-de-la-cti-pour-lutter-contre-la-desinformation) est source d’inspiration, à trop vouloir coller au modèle on efface probablement des spécificités de l’objet d’étude. Le manque évoqué viendrait donc d’un déficit de définitions, d’un problème de terminologie. Ainsi, dans un même document, Matriochka est présenté comme un “mode opératoire” puis une “campagne” ou un “dispositif”. On parle également parfois “d’écosystème numérique”. Or, ces notions, lorsqu’elles existent en CTI (Cyber Threat Intelligence) sont connues et s’intègrent dans une démarche complète visant à standardiser les appellations pour faciliter la capitalisation, l’échange et l’analyse des données. En LMI, la confusion sémantique semble encore régner.

Il a fallu quelques années et des tentatives parfois infructueuses pour décrire les objets constitutifs de la menace informatique, aujourd’hui plusieurs formats cohabitent, plusieurs “framework” mais globalement, la logique est similaire et les notions maniées sont communes (ou presque). Je ne développerai pas ici le parallèle entre MITRE ATT&CK et DISARM qui tout deux reposent sur un découpage chronologique des étapes d’une attaque, mais reviendrai dans un premier temps sur la terminologie militaire qui sert souvent de base à la descriptions des menaces, puis dans un second temps nous exploreront les formats d’échanges de CTI ainsi que les différentes notions utilisées pour finalement tenter d’identifier celles qui pourraient être transposées à la LMI.

## De la terminologie militaire

En matière de cyber, le recours à la terminologie militaire est quasi systématique. On parle sans détour d’attaque informatique, d’opérations, de tactique etc. En LMI on évoque souvent des “manœuvres” et des “campagnes”, tout un champ lexical guerrier qui laisse normalement peu de place à l’imagination. Pour un militaire qui planifie une opération, une action produit un effet sur une cible (jusque là tout va bien), l’objectif étant de modifier l’état de cette cible: on parle alors “d’état final recherché” EFR. L’EFR traduit donc ce à quoi l’on espère aboutir comme situation.

Dans ce contexte, une opération est une série d’actions élémentaires planifiées, coordonnées, afin de remplir des objectifs (militaires) qui concourent à l’atteinte de l’état final recherché. Vous me suivez toujours ?

Au niveau stratégique et opératif on a recours à une approche graphique pour représenter cette série d’action que l’on répartie sur des lignes d’opération (ou lignes d’effort), On appelle cela “l’OPS Design”, voir ci-dessous:

![cerveau](/images/line.webp)

Une “campagne” désigne alors plusieurs “opérations” conduites par une force dans un cadre espace/temps limité. Ce découpage permet donc de concevoir et conduire les actions militaires. Comprendre ce mécanisme chez un adversaire permet ainsi d’une certaine façon de le modéliser et donc de lui donner un caractère prévisible. Les memento de tactique rassemblent ainsi les techniques qui permettent la mise en œuvre de ces actions. Ainsi, à chaque niveau de commandement d’une structure militaire, depuis la section jusqu’au corps d’armée, du chasseur à l’escadre, de la frégate au groupe aéronaval, chacun peut-il s’appuyer sur des recueils de procédures pour conduire ses actions élémentaires. Comprendre et connaitre les procédures de l’adversaire permet d’anticiper ses mouvements, de les contrer et constitue donc un avantage significatif.

Les tactiques, techniques et procédures d’un adversaire constituent donc une forme de “signature” permettant de le caractériser, de l’identifier et donc d’adopter des contres mesures efficaces. C’est une des raisons qui ont poussé les analystes de la menace cyber à adopter la terminologie militaire.

## CTI et modélisation de la menace

La postulat est donc : “montre moi tes TTPs, je te dirai qui tu es” et par là même je pourrai prendre des mesures passives et actives de protection et de défense pour contrer la menace.

Détecter et analyser les modes opératoires permet donc d’une part d’attribuer une attaque mais également de mieux s’en défendre (enfin ça c’est ce que l’on espère). Il s’agit donc de modéliser et standardiser cette description de la menace afin de pouvoir échanger entre acteur de la cybersécurité. Pour illustrer cette démarche nous évoqueront le modèle de données STIX. Il permet de représenter clairement les menaces à l’aide d’objets et de relations descriptives entre objets. En outre, les informations STIX peuvent être représentées visuellement pour les analystes ou stockées au format JSON pour une lecture et un partage rapide par les machines.

![cerveau](/images/stix2_relationship_example_2.png)

Les objets manipulés par STIX peuvent être des éléments comme les infrastructures, un acteur, les TTP, un outil une adresse IP. Chaque type d’objet possède des propriétés et des relations définies avec d’autres objets. Les informations qui sont ainsi capitalisées permettent aux analystes en sécurité de détecter plus facilement des modèles d’attaque connus.

Dans ce contexte, les “modèles d’attaque connus” se rapprochent de ce que la terminologie militaire appelle un “mode d’action” et que l’on retrouve en CTI sous le vocable “mode opératoire”. On le voit, la linéarité des opérations numériques (attaques informatiques) permet une transposition efficace de la terminologie militaire afin de mieux caractériser et lutter contre la menace.

Cette approche est-elle aussi pertinente en LMI ?

## A la recherche de Cendrillon

![cerveau](/images/Chaussure.jpg)

La transposition directe des notions évoquées ci-dessus ne parait pas si triviale. Sur un plan purement opérationnel, la terminologie semble clairement adaptée à la description des activités d’un adversaire connu et désigné. Ce dernier conduirait donc des “campagnes” qui font se succéder des “opérations” chacune concourant à un objectif désigné. Mais ne sommes nous pas victime ici d’un biais d’analyse cherchant à créer des “motifs” et de la cohérence là où il n’y a peut-être qu’initiative et opportunité ? Dans leur article “sous les radars”, Maxime Audinet et Colin Gérard soulignent la recomposition de l’appareil russe de propagande depuis 2022. Celui-ci, soumis à une pression accru et devant faire face à la fermeture de canaux de diffusion maitrisés se reconfigure et met en œuvre des modes opératoires plus discret et indirect. Ainsi, le recours à des prestataires privés pour créer et animer des réseaux d’influence semble s’imposer comme un marquant fort de cette évolution. Quelle conséquence pour l’analyse et la modélisation de la menace ?

Le recours à un prestataire suppose de passer d’un mode “directif et contrôlé” (chaine de commandement claire, construction d’opération rationnelle et méthodique) à un mode “ suggestif et piloté”. En effet, le commanditaire doit dans ce cadre fixer des objectifs ou des grandes lignes de son intention, fournir les moyens (payer) et délègue les modalités au prestataire. Cette intermédiation génère du flou (recherché pour limiter l’attribution) mais également une zone de chaos assumé dans laquelle les actions du prestataire ne correspondent pas nécessairement aux buts du commanditaire. L’analyse des actions laisse alors apparaitre une série d’activité que l’on aura beaucoup de peine à placer dans le schéma linéaire d’une “campagne” (cf figure 1). En outre, l’analyse dans le temps d’un tel acteur (le prestataire) ne permettra pas de dégager des TTP qui traduisent pleinement son intention ni son commanditaire…

## En guise de conclusion ?

![cerveau](/images/on-va-tous-murir.png)

Il ne s’agit pas pour autant de renoncer totalement à cette approche analytique mais il convient de mesurer l’écart et la distorsion quelle engendre. La matière est encore relativement récente et il y a sans doute de nombreux travaux pour parvenir à une meilleure appréhension des phénomènes dans le but de mieux les contrer. Un travail sur les “points fixes”, ou les pré-requis techniques (infrastructures, réseaux, plateformes, hébergeurs, financements), plus que sur les variables (les contenus) parait une piste intéressante mais avant tout il reste à clarifier la sémantique et ne pas confondre une tactique avec une infrastructure, un acteur avec son prestataire.
