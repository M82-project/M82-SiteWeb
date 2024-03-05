---
title: "DISARM : une matrice pour décrire les campagnes d'influence"
date: 2023-09-01
author: Anaïs Meunier
---
En octobre 2022, l'entreprise de cybersécurité américaine Mandiant a
publié un [article](https://www.mandiant.com/resources/blog/prc-dragonbridge-influence-elections) décrivant plusieurs campagnes d'influences semble-t-il
d'origine chinoise, visant les États-Unis. Les éléments relevés
décrivaient trois narratifs différents portés par le même acteur.

Cet acteur, *Dragonbridge*, a été observé dès 2019 par [Mandiant](https://www.zdnet.com/article/dragonbridge-hackers-target-rare-earth-miners-encourages-protests-to-disrupt-production/) qui a
constaté de nombreuses campagnes d'influence portées par ce réseau de
milliers de comptes présents sur de nombreux réseaux sociaux et canaux
de communication. Si, au départ, ce groupe a surtout mené des campagnes
d'influences en faveur de la Chine, il s'attaque désormais, depuis
quelques mois, à l'image des États-Unis. Il a également utilisé ses
comptes de réseaux sociaux pour lancer des campagnes de dénigrement
envers des entreprises d'exploitation de terres rares, canadiennes,
australiennes et américaines.

*Dragonbridge* a porté, cette fois-ci, trois narratifs spécifiques :

* tout d'abord, il a réattribué aux États-Unis, une campagne APT,
normalement attribuée à un acteur proche de l'État chinois. En effet, en
2020, pendant la pandémie, un groupe nommé APT 41 (Advanced Persistant
Threat) avait mis en place une très large campagne de cyber-espionnage ;

* il a également poussé des narratifs visant à discréditer le système
électoral américain en vue des midterms ;

* enfin, il allègue que l'explosion du pipeline *NordStream 2* serait dû aux
États-Unis.

La publication de Mandiant revient ensuite sur toutes les tactiques,
techniques et procédures (TTPs) utilisées par *Dragonbridge* pour pousser
ces narratifs, en souligne à quel point ceux-ci sont innovants (cf. le
titre de l'article : « *Pro-PRC DRAGONBRIDGE Influence Campaign Leverages
New TTPs to Aggressively Target U.S. Interests, Including Midterm
Elections* »).

Cependant, lorsque l'on étudie ces tactiques, techniques et procédures à
l'aune de la matrice Disarm on se rend compte que, même s'ils peuvent
être nouveaux dans le cadre de leur exploitation par *Dragonbridge*, tous
les éléments sont déjà présents dans DISARM.

[DISARM](https://disarmframework.herokuapp.com/) est une matrice open-source basée sur le comportement des acteurs
malveillants qui permet de visualiser et de traduire une campagne
d'influence sous la forme de TTPs. Cette traduction permet, à l'instar
de la matrice MITRE ATT&CK utilisée dans le cadre de la *Cyber Threat
Intelligence* (CTI, collecte et capitalisation de renseignements sur les
campagnes d'attaques cyber) d'enregistrer ces éléments et d'alimenter
des outils d'archivage et d'exploitation de type [MISP](https://www.misp-project.org/) ou bien encore
[OpenCTI](https://www.ssi.gouv.fr/actualite/opencti-la-solution-libre-pour-traiter-et-partager-la-connaissance-de-la-cybermenace/).

La matrice DISARM présente de nombreux intérêts dans la description de
campagnes d'influence ou d'opérations informationnelles. La description
des TTPs permet de mesurer, dans un premier temps, le niveau d'effort
que l'acteur consent dans une campagne en cours ou qu'il cherche à
mettre en place. Après avoir traduit les éléments visibles de cette
campagne selon les critères de la matrice, l'analyste est en mesure de
déterminer le temps investi par l'attaquant pour développer les
artefacts nécessaires à sa campagne, ainsi que les moyens à sa
disposition (notamment financiers).

Dans un second temps, cette traduction permet de comprendre la
structuration de cette campagne en mettant en lumière le comportement de
l'attaquant. En effet, les TTPs sont liées entre elles, en terme de
temporalité ou de techniques. Rendre visible une technique, tactique ou
procédure permet de comprendre ce dont l'acteur a eu besoin, en amont,
pour la développer et ce qu'il cherche à obtenir comme effet grâce à
celle-ci. À l'instar de la CTI, l'analyse de ces TTPs constitue donc un
premier pas dans la création d'outils et de méthodes pour répondre aux
opérations de campagnes de manipulation de l'information.

Cet article met enfin, un élément très important en lumière. En effet,
Mandiant souligne que cet acteur a déjà été observé. Les supports qu'il
utilise ont déjà été relevés (profils de réseaux sociaux notamment).
Pourtant il persiste en exploitant les même outils, les mêmes comptes.
Ce qui souligne le fait que les acteurs de ces campagnes de manipulation
de l'information ne s'arrêtent pas parce qu'on les a exposés. Ils
reviennent.

Ci-dessous les différentes TTPs relevées par Mandiant dans son article
et traduites dans la matrice Disarm.

**TTPs : TA13 T0072.005**

Nom : *Target audience analysis Political segmentation*

Extrait de l'article : « *Aggressively targeting the United States by
seeking to sow division both between the U.S. and its allies and within
the U.S. political system itself* »

Cibler les États-Unis de manière agressive en cherchant à semer la
division tant entre les États-Unis et leurs alliés qu'au sein même du
système politique américain. Le groupe Dragonbridge utilise des
narratifs existants sur la justice sociale et les conflits raciaux et
s'appuie sur des narratifs comme « Le vote ne soignera pas la maladie
dont souffre les États-Unis ; le système législatif américain est
inefficace. »

**TTPs : TA14 T0068**

Nom : *Respond to breaking news event or active crisis*

Extrait : « *Allegations that the U.S. was responsible for the Nord
Stream gas pipeline explosions*.

* *DRAGONBRIDGE's messaging mirrored Russian President Vladimir Putin's
statements that the U.S. had sabotaged the pipelines* ».

Proclamer que les États-Unis sont responsables des explosions du gazoduc
*Nord Stream*.

Le message de Dragonbridge reflète les déclarations du président russe
Vladimir Poutine selon lesquelles les États-Unis auraient saboté les
pipelines.

**TTPs : TA14 T0083**

Nom : *Integrate target audiance vulnerabilities into narrative*

Extrait : « *Discredit the U.S. democratic process, including attempts to
discourage Americans from voting in the 2022 U.S. midterm elections.* »

Discréditer le processus démocratique américain, notamment en tentant de
décourager les Américains de voter lors des élections de mi-mandat de
2022. Le narratif poussé étant que le processus démocratique américain
serait en train de se détériorer, deviendrait inefficace, que la société
serait fondamentalement divisée.

**TTPs : TA06 T0019.002**

Nom : *Hijack hashtags*

Extrait : « *Accounts also used the hashtags #AllRoadsLeadToChengdu or
#Chengdu404, which were used by the legitimate Intrusion Truth regarding
APT41* ».

Réutiliser un \# employé par Intrusion Truth pour attribuer APT41 à la
Chine et l'exploiter en disant que ce sont, en fait, les États-Unis qui
sont derrière ce groupe.

**TTPs : TA06 T0023**

Nom : *Distort facts*

Extrait : « *Claims that the China-nexus threat group APT41 is instead a
U.S. government-backed actor* »

Affirmer que le groupe de menace APT41, lié à la Chine, est un acteur
soutenu par le gouvernement américain.

**TTPs : TA06 T0087 & TA07 T0105.002 & TA17 T0119**

Nom : *Develop Video-based Content & Video Sharing & Cross-posting*

Extrait : « *Dragonbridge accounts posted an English-language video
across multiple platforms containing content attempting to discourage
Americans from voting in the upcoming U.S. midterm elections* »

Des comptes Dragonbridge ont publié une vidéo en anglais sur plusieurs
plateformes. Le contenu de cette vidéo vise à décourager les Américains
de voter lors des prochaines élections de mi-mandat aux États-Unis.

>Remarque : il est logique qu'avant de publier une vidéo, il faille la
produire. L'intérêt de le faire apparaître dans la matrice c'est que
l'on peut ainsi se situer temporellement dans la campagne. Produire une
vidéo, commencer à la diffuser, faire en sorte que celle-ci se retrouve
sur de nombreuses plate-formes pour être sûr de sa visibilité : tous ces
éléments sont liés à des acteurs, des temps d'action et de planification
différents. Visualiser cette TTP au sein de la matrice permet également
de se poser la question des différents intervenants dans une campagne.
En effet, la fabrication de la vidéo a sûrement été externalisée à une
entreprise tierce.

**TTPs : TA06 T0089.002**

Nom : *Create inauthentic documents*

Extrait : « *While we have previously observed DRAGONBRIDGE themes
involving alleged malicious U.S. cyber activity, fabrications regarding
APT41 as American in origin appears to be an escalation in the degree of
implied U.S. operations.* »

Créer des preuves attribuant de manière fallacieuse l'APT 41 aux
États-Unis.

**TTPs : TA06 T0089.003**

Nom : *Alter authentic documents*

Extrait : « *Plagiarism and Alteration of News Articles* »

Plagiat et altération d'articles d'actualité : plagier des articles et
des tweets existants, originellement publiés par Intrusion Truth.

**TTPs : TA16 T0090**

Nom : *Create inauthentic accounts*

Extrait : 
* « *Accounts' use of profile photos appropriated from various online sources, including stock photography.*

* *Suggesting that they sought to obfuscate their identities.*

* *Clustering of their creation dates.*

* *Suggesting possible batch creation.*

* *Similar patterns in usernames consisting of English-language names,
followed by seemingly random numeric strings.*

* *Many accounts posting similar or identical content* »

* Utilisation par les comptes de photos de profil provenant de diverses
sources en ligne, y compris de photographies de stock suggérant qu'ils
ont cherché à dissimuler leur identité.

* Regroupement de leurs dates de création suggérant une possible création
par lots.

* Schémas similaires dans les noms d'utilisateur, composés de noms en
langue anglaise, suivis de chaînes numériques apparemment aléatoires.

* Comptes publiant des contenus similaires ou identiques.

**TTPs : TA16 T0099 & TA16 T0100**

Nom : *Prepare assets impersonting legitimate entities & Co-opte trusted
sources*

Extrait : « *Nuanced Impersonation of Cyber Actors. We identified what we assessed with moderate to high confidence, on a per-account basis, to be eight Twitter accounts impersonating Intrusion Truth comprising part of the DRAGONBRIDGE campaign.* »

* Usurpation d'identité des cyberacteurs. Huit comptes Twitter se feraient passer pour Intrusion Truth dans le cadre de la campagne Dragonbridge.

* Usurpation d'identité d'un groupe qui publie normalement des documents et des analyses sur la menace cyber.

* Création de faux profils reprenant des acteurs de ce groupe pour poster des tweets plagiés ou altérés.

* Utilisation des comptes de réseaux sociaux ressemblant à un groupe connu et référencé (Intrusion Truth), utilisation de médias reconnus : un article de blog de Mandiant, un article du site d'infos Sing Tao Daily, etc.

**TTPs : TA09 T0116**

Nom : *Comment or reply on content*

Extrait : « *Separate DRAGONBRIDGE accounts have also replied to tweets
posted by the original Intrusion Truth, questioning the veracity of the
group's information while highlighting alleged malicious U.S. cyber
activities.* »

Des comptes distincts de DRAGONBRIDGE ont également répondu à des tweets
postés originellement par Intrusion Truth, mettant en doute la véracité
des informations du groupe tout en soulignant que les États-Unis
seraient responsables d'activités cybernétiques malveillantes.

**TTPs : TA11 T0059**

Nom : *Play the long game*

Extrait : « *Several of these impersonator accounts promoted content and
hashtags similar, or identical to, other DRAGONBRIDGE messaging on
alleged malicious cyber activity* »

Réutilisation des faux profils de réseaux sociaux pour promouvoir
d'autres campagnes de Dragonbridge.

>Remarque : Si certaines TTPs semblent faire doublon ou répéter les mêmes
éléments, on observe cependant que, dans la globalité de la matrice,
elles sont en fait complémentaires. Finalement, c'est la place qu'elles
prennent dans la temporalité de la campagne qui explique ces
ressemblances.
