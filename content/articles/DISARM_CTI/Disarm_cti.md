---
title: "DISARM, un pas vers la CTI pour lutter contre la désinformation"
author: Bertrand Boyer et Anaïs Meunier
date: 2023-11-01
---
La multiplication des campagnes de désinformation et leur impact potentiel
sur la société ont conduit de nombreuses organisations (universités,
*think tank*, ONG, administrations, plateformes) à étudier et analyser
cette menace. Cet intérêt a résulté dans l'élaboration de schémas
descriptifs permettant de mettre en lumière le comportement de ces
acteurs et les objectifs de leurs campagnes. Cette démarche a ainsi pu
se nourrir de la riche littérature et de l'expérience accumulée dans un
autre champ d'analyse de la menace : la *Cyber Threat Intelligence* (CTI).

Les éléments nécessaires à la création de campagnes de manipulation de
l'information sont multiples : memes, narratifs, faux sites, et
présentent des niveaux de complexités divers. A l'image des
*Advanced Persistent Threat* APT, les groupes qui conduisent ces opérations
ont donc des besoins très spécifiques et doivent mettre en place des
infrastructures et des outils en amont de leurs actions. C'est
précisément cette approche qui a conduit en 2011, le groupe Lockheed
Martin à mettre en place sa célèbre *Cyber kill chain*. Cette
représentation décrit les étapes d'une attaque informatique. Ainsi,
chaque étape permet de déduire les indices à détecter afin de contrer le
plus en amont possible une intrusion dans un système d'information. Dans
les campagnes informationnelles et typiquement celles conduites via les
réseaux sociaux, cette approche est totalement transposable.

## Approche de la désinformation dans le cadre de la CTI

### Une brève histoire des modèles en CTI

La *Cyber Threat Intelligence* est une discipline qui vise à identifier et
analyser les menaces. Elle s'intéresse évidemment à l'analyse des
données techniques liées à une attaque ou à des menaces connues mais
également au contexte dans son ensemble pour, comme dans le domaine
militaire, « éclairer la décision ». Le renseignement sur les menaces
cyber est une activité de renseignement dont le produit, l'analyse, doit
orienter les décideurs sur les actions à conduire pour minimiser la
menace, la prévenir ou la traiter.

La modélisation en CTI se fonde initialement sur l'analyse d'indicateurs
statiques, c'est le point de départ du concept de kill chain ou encore
du Diamond Model. Ce dernier élaboré à partir de 2013 par Sergio
Caltagirone, Andrew Pendergast et Christophe Betz est une matrice qui
s'inspire du modèle de Michael Porter utilisé en analyse
macroéconomique. Dans le cadre de la CTI, la modélisation des attaques
informatiques repose sur des événements séquencés pour lesquels on
identifie un adversaire, des capacités déployées, une infrastructure et
une victime. Ces quatre facteurs constituent les quatre angles du
diamant. Ces évènements sont rassemblés pour constituer une campagne

![modèle Diamant](/images/FIG_1_DIAMANT.jpg)

(fig 1 : source Threat Intel 101 --- Le modèle en Diamant, Sekoia

https://medium.com/cyberthreatintel/threat-intel-101-le-mod

En analysant et en rassemblant plusieurs campagnes qui partagent
certaines caractéristiques, on peut faire apparaître un « groupe
d'activité ». Ces groupes sont à l'origine de la numérotation des APT
(Advanced Persistant Threat) et permettent d'analyser les acteurs sur la
base de leur comportement.

Ainsi le rapport Mandiant de 2013 portant sur APT 1 marque un tournant
majeur dans la jeune histoire de la Cyber et de l'analyse de la menace
car il lance véritablement l'analyse « à fin d'attribution ». Les
modèles développés fournissent la base nécessaire à l'attribution ou au
moins à l'imputation, pour ce qui relève des « campagnes étatiques »,
car l'intrusion est documentée de manière globale et favorise la prise
en compte du contexte et des données non-techniques. Ces données
permettent de dresser une première approche de la stratégie de
l'attaquant. Sur cette base, les éditeurs pointent plus ou moins
directement la responsabilité vers des entités étatiques.

Progressivement, l'analyse d'une intrusion sera documentée de façon
globale et dynamique. Le modèle Diamant permet donc d'accompagner une
démarche d'investigation au cours de laquelle l'analyste pivote d'une
information à une autre, découvrant de nouveaux éléments sur
l'attaquant. En s'appuyant sur ce formalisme, les investigateurs
éclairent progressivement le contour des attaquants et de leurs
comportements. Comme tous les modèles, le Diamant a ses limites et l'une
des principales demeure la difficulté à le décliner en une stratégie de
détection d'incidents, de collecte et d'enrichissement de logs au sein
d'un système d'information. S'il est visuellement attractif sur un
powerpoint destiné aux décideurs pour présenter une menace, il est
rarement l'outil préféré des équipes de réponse à incidents. Pourtant
compatible avec une Cyber Kill Chain les résultats sont parfois peu
lisibles. Beaucoup y préfèreront le framework MITRE ATT&CK.

## MITRE ATT&CK, la matrice des matrices

La démarche proposée par [MITRE ATT&CK](https://attack.mitre.org/) s'appuie sur une cartographie
détaillée des actions que doit entreprendre un attaquant pour conduire
une intrusion sur un système d'information. C'est donc une démarche
centrée sur le comportement de l'attaquant et sa compréhension plus que
sur les événements comme dans les modèles précédents.

MITRE est historiquement connu dans la communauté de la sécurité
informatique pour maintenir la liste des Common Vulnerabilities Exposure
(CVE). Depuis 2013, il développe un modèle d'analyse de la menace qui
n'a cessé d'évoluer. Rendu public en 2015, cet outil très flexible se
présente sous la forme d'un wiki qui rassemble des données sur les
acteurs, les campagnes et les tactiques, techniques et procédures
(TTPs). Véritable base de connaissance qui cartographie les modes
opératoires des groupes d'attaquants (MOA), il s'impose comme une
référence au sein de la communauté CTI.

Le modèle ATT&CK, qui signifie Adversarial Tactics, Techniques, and
Common Knowledge, est connu pour sa visualisation sous forme de matrice
qui rend l'approche extrêmement intuitive. La matrice présente en entrée
les tactiques et décrit pour chacune les techniques que l'attaquant
devra mettre en œuvre.

Les tactiques, contrairement à la définition militaire, désignent un
ensemble d'objectifs que l'attaquant cherche à atteindre ou, plus
précisément, doit atteindre dans le système informatique visé suivant
son schéma d'attaque. Initialement au nombre de 9 puis de 11 MITRE
distingue aujourd'hui les tactiques suivantes :

+ **Reconnaissance** (10 techniques -- active scanning, search open technical
database, gather victim network information, etc.) ;
+ **Ressource development** (7 techniques -- acquire infrastructure,
compromise accounts, etc.) ;
+ **Initial access** (9 techniques -- phising, supply chain compromise, valid
accounts, etc. ;
+ **Execution** (13 techniques -- command and scriptying interpreter, native
API, User execution, etc.) ;
+ **Persistence** (19 techniques -- external remove service, create account,
implant internal image, etc.) ;
+ **Privilege escalation** (13 techniques -- boot or logon autostart
execution, hijack execution flow, etc.) ;
+ **Defense evasion** (42 techniques -- access token manipulation, deploy
container, rootkit, XSL script processing, etc.) ;
+ **Credential access** (17 techniques -- brute force, forge web credentials,
input capture, etc.) ;
+ **Discovery** (30 techniques -- cloud service discovery, account discovery,
domain trust discovery, etc.) ;
+ **Lateral movement** (9 techniques -- exploitaiton of remote service,
lateral tool transfer, etc.) ;
+ **Collection** (17 techniques -- automated collection, audio capture, screen
capture, email collection, etc.) ;
+ **Command and control** (16 techniques -- data obfuscation, proxy, remote
access software, encrypted channel, etc.) ;
+ **Exfiltration** (9 techniques -- exfiltration over C2 channel, exfiltration
over web service, exfiltration over physical medium, etc.) ;
+ **Impact** (13 techniques -- account removal, data destruction, data
manipulation, defacement, etc.).

Chaque tactique donne lieu à une cartographie de techniques que nous
retrouvons dans la matrice. Souple d'emploi, le navigateur permet de
visualiser les techniques mises en œuvre par un attaquant, de versionner
et d'analyser son évolution.

L'analyse des campagnes de désinformation peut ainsi très largement
bénéficier de l'expérience acquise dans le domaine de la CTI. En
particulier en important la notion de TTPs et en s'appuyant sur les
qualités éprouvées de MITRE ATT&CK que sont :

+ **la souplesse d'utilisation** : la matrice est régulièrement mise à jour
afin de correspondre à l'évolution des pratiques des acteurs
malveillants ;
+ **une approche heuristique** et l'association d'une base de connaissance.
Les TTPs sont liés entre eux. En découvrir un c'est comprendre où il se
place dans l'intégralité d'une campagne, et ainsi anticiper ce que l'on
peut encore attendre ou ce qu'il peut déjà s'être passé en amont.
+ **la compréhension du comportement d'un acteur**, en liant des détections
pour mieux évaluer ou estimer les objectifs stratégiques de la campagne
;
+ **la qualification d'une campagne** dans son ampleur, dans son coût pour
l'attaquant en évaluant la difficulté pour lui de mettre en œuvre
certaines techniques.

En capitalisant sur l'approche CTI et la modélisation ATT&CK, l'analyse
des campagnes de désinformation peut rapidement gagner en maturité et
développer des méthodes de détection et de remédiation qui reposent sur
une analyse objective des techniques mises en œuvre par les attaquants.

## Étudier la désinformation

Les campagnes dmanipulation de l'information en ligne peuvent prendre de
multiples formes. À titre d'exemple, une campagne d'astroturfing demande
de coordonner un réseau de trolls ou de bots pour pousser un message ou
un hashtag. Cela ne présente pas le même niveau de complexité, ni le
même besoin en temps ou en compétences techniques que l'usage du
typosquatting ou la création d'un réseau de sites internet. Par
ailleurs, bien que la question des campagnes d'ingérence étrangère soit
ancienne, les récents développements du web et des outils à disposition
ont permis aux acteurs malveillants de disposer de ressources
extrêmement variées et performantes.

Depuis 2019, de nombreux acteurs de la lutte contre la désinformation
ont cherché un moyen de décrire les campagnes de manière objective et
uniforme. Nombre d'entre eux se sont appuyé sur des réflexions
empiriques liées à la menace informationnelle, à l'instar du Coordinated
inauthentic behavior (CIB) développé par Facebook, la méthode ABC
développée par Camille FRANÇOIS pour Graphika et augmentée d'un D par
Alexandre ALAPHILIPPE et d'un E (Effect) par James PAMMENT. Ces modèles
ont, entre autres, répondu aux problématiques spécifiques de la
diffusion des campagnes sur les plateformes de réseaux sociaux.

D'autres modèles de description s'appuient sur des canevas issus de
l'étude de la menace dans le champ cyber, du fait notamment de la
présence d'éléments informationnels au sein d'attaques cyber. C'est le
cas de la matrice Disarm qui capitalise sur le savoir-faire de la
matrice MITRE ATT&CK dont elle est largement inspirée.

### De quoi parle-t-on ?

Créée en 2019, [la matrice AMITT](https://github.com/cogsec-collaborative/AMITT) est un cadre d'analyse qui permet de
décrire et de comprendre les incidents (terminologie issue du cyber) de
désinformation. Le Minsifosec est un groupe de travail qui a réfléchi et
établi des standards pour permettre le partage de l'information dans le
cadre des campagnes de désinformation. Pour ce faire, ils ont examiné
différents modèles comportementaux issus de la sécurité de
l'information, de l'analyse des réseaux sociaux, du marketing. Ils ont
ainsi créé la matrice AMITT en prenant pour modèle le Mitre ATT&CK.
Aujourd'hui mise à jour et maintenue par la Disarm Foundation, sous le
nom de Disarm, la matrice s'est enrichie de tactiques et de techniques
et procédures supplémentaires.

Disarm est donc une matrice de description des opérations de
désinformation centrées sur le comportement de l'attaquant et décrite
par l'intermédiaire de tactiques, techniques et procédures (TTP).

À l'instar du MITRE ATT&CK, Disarm présente de nombreux avantages dans
le cadre de la description des campagnes. Elle permet :
+ d'imputer ou, au moins, de caractériser un acteur par la récurrence des
techniques, tactiques ou procédures qu'il emploie lors de ses campagnes
;
+ de comprendre le niveau d'effort et des moyens à la disposition d'un
acteur malveillant ;
+ de capitaliser des campagnes et incidents dans un modèle stable,
pérenne, interopérable et ouvert.
+ de partager de l'information structurée entre les acteurs de la lutte
contre les campagnes de manipulation de l'information.

### Disarm

La matrice Disarm est structurée en 3 éléments principaux : phases,
étapes (ou tactiques) et techniques, du plus macro au plus micro.


#### Les phases

Les campagnes d'influences informationnelles sont composées en général
de 4 phases qui correspondent aux séquences de mise en œuvre de la
campagne. Chaque phase est le regroupement de tactiques et de leurs
techniques associées.

![FIG 2](/images/DISARM-TTP.png)

Figure 2. Structuration des tactiques, techniques et procédures au sein
de la matrice Disarm

- La planification permet de visualiser le but de la campagne ou de
l'incident. Elle définit les moyens nécessaires à sa mise en place.
Cette étape se concentre sur les résultats attendus par les acteurs
malveillants. Dans le domaine militaire on parle d'état final recherché
(EFR).

- La préparation regroupe les activités menées avant l'exécution de la
campagne : le développement d'un écosystème nécessaire pour soutenir une
action (personnes, réseau, canaux, contenu, etc.).

- L'exécution consiste en la réalisation de l'action, de l'exposition
initiale à la conclusion ou au maintien de la présence en cas de menace
persistante (on notera ici la similitude avec les attaques informatiques
ou l'on évoque la persistance comme un facteur central d'une opération).

- L'évaluation est une étape nécessaire qui détermine l'efficacité de
l'action.

#### Les étapes (ou tactiques)

Les phases sont découpées en tactiques. Elles sont aujourd'hui au nombre
de seize et leur nombre peut changer en fonction de la mise à jour de la
matrice (à l'instar d'ATT&CK) pour correspondre aux évolutions des
pratiques des acteurs malveillants.

|**Phase**|**Tactique**|**Description de la tactique**|**Objectif de la tactique**|
|--------|----------|--------|--------|
|    Planification    |    Planification de la stratégie    |   Définir l'état final recherché, c'est-à-dire l'ensemble des conditions requises permettant de déclarer l'accomplissement des objectifs stratégiques.     |   Mettre en cohérence les audiences ciblées et les finalités stratégiques de la campagne.    |
|         |     Planification des objectifs   |    Planifier des objectifs stratégiques liés à l'exécution de tactiques nécessaires à leur réalisation.    |    Définir des objectifs intermédiaires permettant d'atteindre l'état final recherché.    |
|         |    Analyse des publics cibles    |    Identifier et analyser des audiences ciblées, c'est-à-dire l'ensemble de leurs attributs qu'une opération d'influence pourrait incorporer dans sa stratégie vers celles-ci.   |    Permettre la personnalisation des contenus et de la stratégie d'influence selon l'analyse obtenue.    |
|    Préparation    |    Développement des récits    |    Promouvoir et renforcer des récits généraux en s'appuyant sur de nombreux récits locaux, diffusés régulièrement (à bas bruit en général) via les différents artefacts créés pour la campagne.    |    Occuper et dominer le débat numérique en imposant progressivement des récits phares sur la société.    |
|         |    Fabrication des contenus   |    Créer ou acquérir des textes, images et tous les contenus nécessaires au soutien des récits généraux et des récits secondaires.    |    Soutenir la mise en place des récits phares à l'aide de contenus crédibles.    |
|         |    Mise en place des canaux de communication    |    Créer, modifier ou compromettre des outils de messagerie (comptes de réseaux sociaux, chaînes de médias, personnel opérationnel).    |    Faire la promotion des messages directement à l'audience ciblée sans dépendre d'entités externes.    |
|         |    Mise en place des canaux de légitimation des récits    |    Établir des ressources dédiées à la légitimation des récits (faux sites news, faux experts, sources vérifiées compromises).    |    La création de relais informationnels soutient la légitimation des récits.    |
|         |    Microciblage des audiences clefs   |    Cibler des groupes de population très spécifiques via des contenus localisés, les fonctionnalités publicitaires des plateformes ou la création de chambres d'écho.    |     Il vise à garantir une meilleure perception des récits de la part de certaines audiences et à consolider voire polariser les opinions d'audiences clefs.    |
|         |    Sélection des canaux selon leur usage    |    Sélectionner, après étude de marché, des vecteurs des différents narratifs ou artefacts créés, que ce soit des plateformes (réseaux sociaux, plateformes en ligne de partage de vidéos, hashtags, etc.), des médias traditionnels (télévision, journaux), etc. Étudier les fonctionnalités et l'accessibilité des plateformes.    |    Déterminer quels seront les canaux et leurs usages qui maximiseront la diffusion des narratifs et artefacts de l'opération d'influence.    |
|    Exécution    |   Amorçage de la campagne   |    Publier du contenu à une petite échelle ciblée en amont de la publication à grande échelle.    |    Tester l'efficacité du dispositif mis en place et affiner les messages (A/B testing, utilisation de black SEO, etc.)    |
|         |    Diffusion du contenu vers le grand public    |    Diffuser largement du contenu à l'ensemble du public (diffusion de narratifs et artefacts sur les réseaux sociaux, publication d'articles, rédaction de commentaires, etc.).    |     Atteindre les publics ciblés.    |
|         | Maximisation de l'exposition|Amplifier via des stratégies cross-plateformes, de flooding et via des réseaux de trolls ou de bots. | Assurer un maximum d'effets de la campagne.|
|         | Mise en œuvre d'actions agressives en ligne | Nuire à ses adversaires dans les espaces en ligne par le biais du harcèlement, de la divulgation d'informations privées et du contrôle de l'espace d'information. | Supprimer toute opposition et remise en question de la campagne. |
|         | Mise en œuvre d'actions hors ligne | Inciter les utilisateurs à s'engager physiquement : de l'appel à manifester à l'achat de marchandises en passant par l'action violente. |  Faire basculer la campagne virtuelle dans le monde réel et toucher de nouvelles audiences.|
|         | Persistance dans l'environnement informationnel | Poursuite del'amplification de narratifs et effacement des traces (dissimulation des moyens employés, de l'identité des acteurs), même si l'événement principal est terminé.| Assurer la continuité de la campagne sur le long-terme.|
| Évaluation | Évaluation de l'efficacité des actions | Évaluer l'efficacité des actions |      |
​

#### Les techniques et procédures

Les techniques et procédures décrivent le comportement de l'acteur
malveillant. Par sa projection sous forme de matrice dynamique, et
sachant que chaque étape de la matrice s'appuie sur les étapes
précédentes, la détection d'un TTPs permet de mettre en évidence l'état
d'avancée d'une campagne, les moyens utilisés par l'attaquant et enfin,
d'évaluer son niveau d'effort et les capacités dont il dispose.

## Et ensuite ?

La fondation Disarm se charge de faire vivre cette matrice en mettant
notamment à jour les TTPs en fonction de l'évolution et de la
sophistication des campagnes. Elle travaille également à plébisciter son
emploi auprès des différents acteurs de la lutte contre la
désinformation : plateformes, institutions, think tanks, etc. afin,
entre autres, de permettre une détection plus rapide, une qualification
plus qualitative et un partage de l'information efficace.

La désinformation a besoin de se nourrir de la maturité et de l'avancée
des questions qui préoccupent la CTI en matière d'état de la menace,
d'anticipation, de capitalisation et de partage de l'information. Du
lien entre ces deux matières peut naître des outils comme la matrice
Disarm. C'est d'autant plus important qu'en retour, Disarm est un outil
qui peut également alimenter le travail de la CTI. En effet, des
campagnes comme [*Ghostwriter*](https://www.mandiant.com/resources/blog/ghostwriter-influence-campaign) ou bien encore les [Macron *Leaks*](https://www.fondationdescartes.org/2020/01/the-macron-leaks-operation-a-post-mortem/) démontrent
bien l'intrication de ces différents champs. Que ce soit le fruit d'une
campagne mise en place par un acteur étatique ou une action opportuniste
permise par une fuite de données, les pratiques des attaquants ne se
limitent pas au champ du cyber ou de la désinformation. Ainsi doit-il en
être également pour les acteurs qui souhaitent lutter contre. C'est la
complémentarité technique de ces matrices qui permet la description de
ces campagnes complexes. Et c'est la complémentarité des pratiques qui
permettra une lutte efficace contre la désinformation et les campagnes
informationnelles.
