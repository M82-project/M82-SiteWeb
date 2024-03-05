---
title: Cycle du renseignement, boucle OODA, et si on arrêtait de tourner en rond ?
date: 2024-01-14
author: Bertrand Boyer
tags: [OODA, Renseignement, CTI]
---

Il y a quelques jours, Anaïs Meunier, notre VP du M82_project, postait sur LinkedIn [une réflexion sur le cycle du renseignement adapté à l’analyse de la menace en cybersécurité (CTI)](https://www.linkedin.com/search/results/content/?fromMember=%5B%22ACoAACk9IJ0BqDlMk3g_kf5-Vd8ElqBHC7S2kuc%22%5D&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACk9IJ0BqDlMk3g_kf5-Vd8ElqBHC7S2kuc&keywords=ana%C3%AFs+meunier&position=0&searchId=27c1783f-f25d-4f57-8595-5da286cfaf6c&sid=J%2C_&update=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7151593255942447104%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse%29). En deux illustrations elle pose la question de l’utilisation des concepts de “cycles” là où il faudrait voir des rétroactions permanentes. Le débat est lancé !

![Interactions entre les cycles du renseignement ?](/images/boucle2.jpg)
Interactions entre les cycles du renseignement ?

# Au commencement était John Boyd et la boucle OODA ?

Le concept de boucle OODA (Observer, Orienter, Décider, Agir) fait son apparition dans [*Pattern of conflict*](https://www.oodaloop.com/archive/2022/02/26/john-boyd-on-patterns-of-conflict-and-the-ooda-loop/), une présentation de John Boyd (1980), pilote de chasse dans l’US Air Force. L’idée centrale de cette théorie repose sur le fait qu’il est nécessaire de « penser et agir plus vite que l’adversaire ». En s’appuyant sur l’évolution du combat aérien en particulier mais également en observant les conflits entre 1940 et 1980, **il conclut que l’issue du combat appartient à celui dont le système de prise de décision tourne le plus vite**. Un acteur au combat doit donc raccourcir les délais entre l’observation et l’action, la boucle OODA doit être la plus courte possible.

Il s’agit d’entrer dans le cycle de décision de l’adversaire. Bien que calquées sur le modèle du combat aérien, les idées de Boyd s’appuient sur de nombreux exemples historiques. Il puise ainsi dans l’histoire de l’empire mongol l’idée selon laquelle l’information est au centre du pouvoir militaire (comme d’ailleurs John Arquilla quelques années plus tard), il étudiera également l’épopée napoléonienne ainsi que la théorie du Blietzkrieg. Jamais publiées, les théories de Boyd sont regroupées sous le nom de Discourse on Winning and Losing. Ces idées ont été propagées par des présentations réalisées au début des années 80. Il aurait inspiré les opérations américaines lors de la première guerre du Golfe en 1991 ainsi que la notion de « guerre de quatrième génération » portée par William Lind.

![OODA](/images/1599px-OODA.Boyd.svg.png)
[Source:](https://en.wikipedia.org/wiki/File:OODA.Boyd.svg)

Développé dans le cadre de la stratégie militaire (et particulièrement aérienne), le concept est aujourd’hui plus largement réemployé dans l’économie, le commerce et plus généralement dans l’analyse des systèmes dynamiques. Naturellement, le champ de la sécurité informatique ne pouvait pas faire l’impasse sur ce concept. *Bruce Schneier**, dans [*The Future of Incident Response*](https://www.schneier.com/blog/archives/2014/11/the_future_of_i.html) évoque le concept de OODA pour la réponse à incident, et de nombreux autres publications y font référence. La question principale de la réponse à incident est en fait un des principes stratégiques les plus anciens : [*la liberté d’action*](http://lechoduchampdebataille.blogspot.fr/2012/12/le-principe-de-liberte-daction-1.html). L’initiative n’étant qu’un moyen pour le niveau tactique d’acquérir ou de conserver cette liberté d’action.

>Le principe fondamental de toutes les combinaisons militaires consiste à opérer, avec la plus grande masse de ses forces, un effort combiné sur le point décisif. Les moyens d’appliquer cette maxime ne sont pas très nombreux : le premier moyen est de prendre l’initiative des mouvements.

Lieutenant-général JOMINI, Histoire critique et militaire des guerres de Frédéric II, Paris, Magimel, Anselin et Pochard, 3e ed.1818, Tome III, p.345.

![BruceLee](/images/BruceLEE.jpg)

# Revenons à Bruce…

Dans son modèle de transposition de la boucle OODA à la réponse à incident, Bruce Schneier revient sur ce qui fait l’intérêt de cette approche : la vitesse. La boucle OODA n’est en fait qu’une formalisation d’un processus de décision, et l’idée sous-jacente pour lui demeure que : *le vainqueur est celui qui décide et agit plus vite que l’autre*.

>Speed is essential. People in these situations are constantly going through OODA loops in their head. And if you can do yours faster than the other guy — if you can “get inside his OODA loop” — then you have an enormous advantage.

Cette approche est extrêmement séduisante et rassurante, mais peut-on encore croire que l’on puisse aller plus vite ?

# “**Sky is the limit**” VS “les arbres ne poussent pas jusqu’au ciel”

La limite conceptuelle du modèle OODA repose sur le fait qu’elle est le fruit d’une époque où l’information était rare. Comme pour le cycle du renseignement, les phases initiales, l’observation et l’orientation répondent à une logique qui me semble aujourd’hui dépassée. Cette première phase doit répondre à un besoin (du décideur) qui cherche à compléter son niveau d’information pour pouvoir décider sur la base d’une connaissance parfaite du système.

**spoiler** : le monde ne marche pas comme ça… et nous devons chaque jour décider sans connaissance parfaite d’un système. Pire encore, nous ne cherchons plus l’information, nous nageons dedans (ou somme noyés par les données). La question n’est pas tant **d’orienter pour capter de l’information que de donner du sens à celle que nous avons déjà**.

**Vient ensuite la phase de décision**. Si l’orientation est nécessairement incomplète, la phase de décision va donc viser à évaluer ces incertitudes et formuler des hypothèses pour combler le manque. L’idée étant en fait de formuler des hypothèses qui seront **le pilier des actions qui généreront de nouveaux évènements en entrée de la boucle (observation). C’est ici, à mon sens que le concept de boucle est le plus fragile**. Il s’ouvre ainsi, un “arbre des possibles” qui vient re-alimenter la boucle générant elle-même de nouvelles hypothèses etc. **Le cycle à toute les chances de dériver au lieu de converger vers une action** (ou une attribution pour la CTI).

Avec la génération d’hypothèses, le cycle perd, en outre, de son intérêt, car il ne permet pas de “gagner du temps” mais **risque de s’enliser dans la recherche d’éléments qui visent à infirmer ou confirmer des hypothèses**. La question des outils décisionnels qui permettront à la “cellule de crise” d’éviter cette divergence reste entière. L’intelligence artificielle est évidement une première réponse, mais les biais déjà observés laissent également apparaitre les limites de ces développements. **Il nous faut apprendre à décider dans l’incertitude et donc à changer notre rapport au risque et à la prise de risque, y compris en CTI**.

**La dernière phase de la boucle, “action”**, revient en fait à s’appuyer sur le résultat des étapes précédentes pour déterminer une option stratégique. Les grandes options de la lutte contre les APT ou les Ransomware peuvent se décliner suivant trois familles:

- éradication de l’attaque (si possible);
- containment : étape qui peut-être une phase préparatoire à l’éradication ou la deception;
- deception : garder l’initiative afin d’épuiser les ressources de l’attaquant et l’observer.

Pour choisir une famille d’options, il convient de limiter le besoin en information, c’est une façon de sortir de la boucle infinie. En clair, décider tôt du “style” de réponse au regard de l’information disponible et ensuite bâtir des modes d’action pour conduire la réponse choisie.

![F3EAD](/images/F3EAD.jpg)

LE F3EAD issu du modèle de ciblage des HVI

# Pour conclure
La réponse à incident, si elle est appréhendée comme un “combat”, repose sur le renseignement, les préceptes stratégiques classiques et les leçons que l’on en a tiré. Les boucles, Killchain, F3EAD offrent un cadre rassurant mais qui néglige le “brouillard de la guerre” cher à Clausewitz, cette part d’incertitude irréductible dans tous processus de décision. Ce n’est pas en relançant des boucles de collecte que l’on comprendra mieux nos adversaires, ni que l’on construira des réponses à incidents adaptées. L’IA peut sans doute contribuer à améliorer le traitement des données et l’approche statistique réduire le champ de possibles, mais en cyber comme dans d’autres domaines, l’affrontement des volontés ne se réduit pas à des “boucles”. Pour vaincre il ne faut pas décider “plus vite” mais probablement “décider mieux”, aller plus vite se heurtera tôt ou tard aux capacités physiques de calculs et aux ressources à y consacrer mais surtout aux capacités cognitives des humains en charge de la conduite des opérations.

Lire également : 
- l’article de Jérome Saiz : [OODA: une stratégie militaire au service de la SSI](http://magazine.qualys.fr/conformite-organisation/ooda-ssi/).
- [Threat Intel 101 — Le cycle du renseignement appliqué à la (Cyber) Threat Intelligence](https://medium.com/cyberthreatintel/cycle-du-renseignement-threatintel-7dc26a168c0f)
- [F3EAD: Ops/Intel Fusion “Feeds” The SOF Targeting Process](https://smallwarsjournal.com/jrnl/art/f3ead-opsintel-fusion-%E2%80%9Cfeeds%E2%80%9D-the-sof-targeting-process)
