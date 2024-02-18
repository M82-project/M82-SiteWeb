---
title: "3CX: un exemple d'attaque par supply chain"
date: 2023-04-11
author: Sebastien Larinier et Bertrand Boyer
---           

*Cet article qui reprend la version originale de [Seb](https://sebdraven.medium.com/3cx-une-attaque-par-supplychain-cb4d579aa675)*

Le logiciel 3CX a subi une attaque par supply chain depuis au moins le 22 mars 2023. Ce logiciel est utilisé par de nombreuses entreprises (600 000 entreprises dont American Express, Coca-Cola, McDonald’s, BMW, Honda, Air France, Toyota, Mercedes-Benz, IKEA ) pour leur téléphonie (VoIP). Il s'installe sur les postes de travail Windows, MacOs et Android. Utilisé par plusieurs milliers de clients, ce logiciel est donc très intéressant pour ce type d'attaque et assure à l'acteur malveillant à l'origine de l'opération de nombreuses possibilités d'action. En la matière, on se souvient en particulier de [Solar Wind](https://www.lemagit.fr/actualites/252507574/Une-nouvelle-porte-derobee-attribuee-aux-pirates-de-laffaire-SolarWinds) qui avait ouvert la porte à ce type d'attaque par des acteurs généralement étatiques au regard des capacités déployées.

Le but de cet article n'est pas tant d'analyser l'attaque par elle-même et le malware déployé (puisque cela a été très bien fait par [Volexity](https://www.volexity.com/blog/2023/03/30/3cx-supply-chain-compromise-leads-to-iconic-incident/) mais bien plus de présenter l'impact de l'attaque et les conséquences associées.

Une bonne infographie de Thomas Rochia <https://twitter.com/fr0gger_/status/1641668394155151366?s=20> est également disponible et présente clairement les étapes clefs de l'attaque.

## Petits rappel des faits

Comme pour toute attaque de la supply chain, c'est le processus de mise à jour du logiciel qui a été compromis par le groupe d'attaquant. Ainsi, lorsque le logiciel 3CX procède à sa mise à jour, il va installer, en plus, une Dynamic Link Library malveillante qu'il va charger. L'impact est direct puisque l'attaquant a la main sur l'ensemble des machines pour lesquelles la mise à jour a été faite (patchez qui disaient..). De fait, ce type d'attaque est probablement le plus efficace pour compromettre rapidement un nombre important de machines, ce qui en fait un mode d'action à haute valeur ajoutée.

Dans le cas de 3CX, c'est la DLL ffmpeg.dll qui va être installée. Puis, comme l'explique Volexity, la DLL télécharge, après son chargement, un fichier hoster sur Github qui est encodé en base64 et chiffré en AES. Ce fichier a des urls où le malware va être téléchargé.

## Le stealer lui-même

On a d'abord parlé de stealer mais ce malware s'apparente plus à un outil de reconnaissance, il ne se contente pas de voler des informations mais permet de déployer largement d'autres fonctionnalités. En effet, au vu du nombre d'utilisateurs de 3CX (12 millions environ), compromettre autant de clients revient, pour l'attaquant, à adopter une technique de "pêche au chalut". Après avoir jeté ses filets, il va devoir trier et sélectionner les cibles les plus pertinentes. Pour cela, il devra se fonder sur les informations remontées sur le C2 dans un fichier json ainsi que la GUI de la machine qui passe dans les headers HTTPs. Si la machine l'intéresse, il va maintenir le C2.

Autre impact fort, mis en avant par Volexity, est un chargeur de shellcode. “L’activité post-exploitation la plus courante observée à ce jour est la création d’un shell de commande interactif”, a également averti le service ["Managed Detection and Response de Sophos"](https://fr.techbriefly.com/3cx-pirate-dans-une-attaque-de-la-chaine-dapprovisionnement-qui-compromet-12-millions-dutilisateurs-tech-72095/?utm_content=cmp-true). Ce qui veut dire qu'une fois le malware exécuté, il peut charger ce qu'il veut comme code (et donc ne plus être un simple stealer). En outre, il peut faire cela uniquement en mémoire. Cela sera donc plus difficile pour les équipes de réponses sur incident et pour les analystes de déterminer ce que souhaite réellement l'attaquant.

## l'attribution à la Corée du Nord ?

Les experts de Sophos ne se sont pas lancés dans une attribution directe. Ils estiment qu’ils “ne peuvent pas valider cette attribution avec une grande confiance”, CrowdStrike, à l'inverse, pense que l’attaque a été menée par [Labyrinth Collima](https://www.crowdstrike.com/adversaries/labyrinth-chollima/), généralement associé au gouvernement nord-coréen. Plus largement l'attaque est attribuée à Lazarus <https://attack.mitre.org/groups/G0032/>. sur la base du shellcode et de la clé AES utilisée. Cela peut faire un court pour plusieurs raisons :

- Le kit peut avoir été acheté;
- Les attaquants ont pu délibérément utiliser des clés et des shellcode connus pour faire un false flag;
- Les prochains jours, mois permettront peut-être d'avoir plus de détails sur cette attaque (ou pas).

Une chose est certaine si l'on regarde la chronologie complète de l'attaque, notamment chez [Sentinel One](href{https://www.sentinelone.com/blog/smoothoperator-ongoing-campaign-trojanizes-3cx-software-in-software-supply-chain-attack/), l'infrastructure est là depuis février 2022.
Les premiers déploiements de la version backdoorées est 22 mars 2023.
De plus, certains artefacts, comme des dates de compilation, [remontent à janvier 2023](https://twitter.com/Hexacorn/status/1641465612386856970?s=20).
L'attaque a dont été donc préparée de longue date par un acteur sachant exactement ce qu'il faisait. Cette notion de préparation et de ciblage ne laisse pas beaucoup de doute sur la nature étatique de l'attaquant et sur sa capacité à toucher de nombreuses victimes

Sources :
<https://news.sophos.com/fr-fr/2023/04/03/logiciel-3cx-desktop-cible-par-attaque-informations-clients-sophos/>
<https://www.sentinelone.com/blog/smoothoperator-ongoing-campaign-trojanizes-3cx-software-in-software-supply-chain-attack/>
