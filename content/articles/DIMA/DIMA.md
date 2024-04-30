---
title: "S’armer pour la guerre cognitive : le modèle DIMA"
date: 2024-04-28
author: Bertrand Boyer
tags: [LMI,désinformation,DISARM,cognitive warfare]
---
Le concept de [guerre cognitive](https://lerubicon.org/la-guerre-cognitive/) revient sur le devant de la scène alors même que les études stratégiques l’avait délaissé, le résumant souvent à une forme dégénérée des opérations psychologiques de la Guerre froide. Tout cela sentait bon les expérimentations sulfureuses du KGB et les tentatives de manipulations chimiques des cerveaux de la CIA. Pourtant, avec la révolution de l’information que nous connaissons, nos capacités cognitives semblent aujourd’hui dépassées et laissent béantes les failles pour l’exploitation de biais dans nos propres représentations et systèmes de valeurs.

![cerveau](/images/DIMA/cerveau.jpg)

Au-delà de la “manipulation de l’information”, nos cerveaux sont devenus l’enjeu d’un combat permanent. Pour le monde économique en premier lieu, puisqu’il s’agit de capter l’attention, de provoquer un acte de vente, mais également pour le politique qui cherche à convaincre, rassembler et gouverner. Comme le rappelle Daniel Kahneman dans [“système1, système2”](https://amzn.to/3UkTqFH), le cerveau humain est structurellement vulnérable, nos intuitions prennent régulièrement le pas sur nos raisonnements, exploitant ainsi de nombreux biais cognitifs. Dans un [article pour le Rubicon](https://lerubicon.org/la-guerre-cognitive/), David Pappalardo propose l’approche ci-dessous :
>La guerre cognitive vise à altérer directement les mécanismes de compréhension du monde réel et de prise de décision pour déstabiliser ou paralyser un adversaire.
Il s’agit d’agir sur le système de décision adverse, son “command and control”.

Dans ce post, je n’évoquerai pas les pistes de recherche qui explorent l’apport des neurosciences mais je proposerai une approche informationnelle visant à détecter le plus en amont possible la possibilité d’une attaque cognitive.

Ainsi, il s’agit de proposer un outil de mise en vigilance au regard des informations perçues. Il ne s’agit pas ici de détecter des fake news et donc de faire le tri entre le vrai et le faux, mais bien d’évaluer à quel point une information reçue est construite pour exploiter un ou plusieurs biais cognitifs. Ce système permet une mise en garde (contre soi-même) et devrait conduire à une moindre efficacité des campagnes de manipulation de l’information.

## Le modèle DIMA
En s’inspirant des matrices utilisées en cybersécurité (MITRE ATT&CK) et lutte contre la manipulation de l’information (DISARM), il m’a semblé intéressant de proposer un framework qui permette d’identifier les tentatives d’utilisation de biais cognitifs dans notre consommation d’information et d’en proposer une formalisation.

>Une attaque cognitive correspond à l’utilisation intentionnelle d’un ou plusieurs biais ou heuristiques dont l’objectif est de provoquer une réaction de la cible.

Il existe de nombreux biais cognitifs, ils font l’objet d’études et de controverses mais dans le cadre de notre étude nous pouvons dégager des grandes familles qui seront régulièrement exploitées dans le contexte de la numérisation de l’information dans un processus de prise de décision. A l’instar des matrices précédemment évoquées, il s’agit de créer un modèle décrivant les étapes de l’exploitation d’une information et identifiant les techniques manipulatoires associées à chaque étape.

Le modèle repose sur quatre séquences (ou tactiques) qui correspondent chacune à une phase du traitement de l’information reçue par une cible.

Ces quatres phases sont : détecter, informer, mémoriser, agir (Detect, Inform, Memorise, Act). Le framework DIMA permet de visualiser les biais potentiellement exploités lors d’une exposition à une information, il agit comme un “auto-diagnostic” permettant d’évaluer les tentatives d’exploitation cognitive et donc de manipulation de l’information pour obtenir un effet sur la prise de décision.

## D — Détecter

Une caractéristique de l’environnement informationnel est son abondance et la permanence des flux. On n’attend plus le journal de 20h00 pour être informé, nos cerveaux sont exposés de façon continue à des flots de données à traiter. Dès lors, la capacité à détecter une information dans ce flux devient une première étape nécessaire pour espérer produire un effet sur une “audience cible”. Lorsque l’on reçoit une information (ou que l’on va la chercher) il est donc indispensable de savoir pourquoi nous l’avons retenue plus qu’une autre? En quoi cette information se distingue du flot?

Pour sortir du lot et être détectés, les “ingénieurs du chaos” vont donc chercher à exploiter plusieurs bais cognitif que nous rassemblerons dans notre framework. Nous y retrouverons par exemple l’effet de contraste, le biais de distinction ou encore le biais de confirmation qui consiste à privilégier les informations confirmant ses idées préconçues ou ses hypothèses.

## I — Informer

Après la phase de détection, débute la phase de traitement de l’information reçue. Il faut maintenant lui donner du sens. Comment cette nouvelle donnée vient-elle interagir avec mes convictions antérieures et mes représentations du monde?

Le cerveau humain aime les histoires cohérentes (en plus d’être faignant), nous allons donc naturellement compléter l’information reçue pour qu’elle ne s’éloigne pas trop des croyances pré-existantes. Ainsi, le plus souvent, ce n’est pas le “manipulateur” qui construit le récit, mais bien nous-même qui remplissons les vides entre deux informations. L’histoire se tisse elle-même. C’est typiquement ce biais qui nous fait voir des motifs réguliers là où il n’y a qu’une série aléatoire de points et qui renforce les stéréotypes. Ce phénomène dit de “l’heuristique de représentativité” est par exemple utilisé dans l’expérience conduite par Kahneman et Tversky : on présente aux participants une description stéréotypée d’une personne fictive nommée Steve, le décrivant comme timide, serviable, introverti et organisé. Ensuite, on leur demande d’évaluer la probabilité que Steve exerce différentes professions. Les participants ont eu tendance à juger qu’il était plus probable que Steve soit bibliothécaire, se basant sur le stéréotype de cette profession correspondant aux traits décrits, plutôt que sur des statistiques objectives. Ce type de manipulation exploite notre propension à catégoriser rapidement les gens et les situations en se fiant à des représentations mentales simplistes, au lieu d’analyser objectivement les probabilités réelles. Cela peut être utilisé pour propager des préjugés et des idées reçues. D’autres biais sont utilisés pour orienter notre traitement de l’information et lui donner du sens:
* le biais de confirmation (déjà exploité dans la phase de détection) qui va venir renforcer les croyances pré-existantes (quitte à déformer la réalité des faits);
* le biais de représentativité qui va nous conduire à classer rapidement les choses en nous basant sur des ressemblances superficielles;
* le biais d’ancrage qui favorise la première information reçue comme référence pour donner du sens aux informations suivantes.

## M — Mémoriser

Ceux qui exploitent nos biais cognitifs cherchent naturellement à ce que nous ne rejetions pas les informations qu’ils diffusent. Nous devons les mémoriser ou à minima les intégrer dans nos schémas de représentation et nos prises de décision. Dans ce contexte le biais de cadrage, aussi appelé “framing effect” ou “framing bias” en anglais, s’impose. Ce biais illustre notre tendance à réagir différemment à une même information selon la façon dont elle est présentée ou “cadrée”. Celui-ci, couplé avec le biais de positivité qui fait que l’on retient plus facilement les expériences positives que négatives peut conduire à des représentations totalement inverses de la réalité. La mémorisation de l’information repose donc sur les effets cumulatifs de biais préalablement exploités. Ainsi, le biais de saillance (déjà utile dans la phase de détection) peut être combiné au biais de confirmation pour favoriser l’ancrage de l’information.

## A — Agir

Dans la dernière partie du framework nous nous intéressons à ce qui nous fait réaliser des choses et agir sur notre environnement. Après avoir capté notre attention, donné du sens à une information, faire en sorte qu’elle ne soit pas rejetée, les acteurs de la manipulation de l’information vont chercher à nous faire agir sur la base de l’information manipulée qu’ils diffusent. Pour ce faire ils ont à disposition, là encore, un certain nombre de biais à exploiter. Outre le biais de cadrage déjà évoqué, nous retiendrons principalement :
* le biais d’action qui est la tendance à préférer l’action à l’inaction, même lorsque rien ne prouve qu’agir sera plus bénéfique que de ne rien faire;
* le biais de disponibilité, c’est la tendance à accorder plus d’importance aux informations facilement disponibles dans notre esprit, même si elles ne sont pas représentatives de la réalité. On peut alors surestimer l’urgence d’agir sur la base d’exemples frappants mais non représentatifs qui nous viennent spontanément à l’esprit (d’où l’intérêt de la phase “Mémoriser”).

## Conclusion (partielle):

Ce premier post permet de présenter l’architecture globale du framework DIMA en construction. Il illustre d’emblée l’effet cumulatif de certains biais dans le traitement de l’information mais parallèlement laisse entrevoir des solutions pour s’en prémunir.
