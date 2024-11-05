---
title: "“Boum ! Quand votre moteur fait boum”"
date: 2024-11-05
author: Anaïs Meunier
tags: [LMI,désinformation,DISARM,CTI]
---
Réflexion sur le concept de Left et Right of Boom appliqué à la manipulation de l’information

![tintin](/images/tintin.png)

Dans le cadre de la cyber threat intelligence (CTI) et de la sécurisation des systèmes d'information, un concept clé permet de distinguer deux types d'actions : celles qui relèvent de la prévention (avant une attaque) et celles qui concernent la réaction (après une intrusion). Ce concept a été repris et adapté dans la lutte contre les manipulations de l'information (LMI), mais de manière tellement modifiée que son sens a évolué.

## La distinction dans la CTI

En cybersécurité, on utilise l'expression left of boom pour décrire les actions de prévention, comme la mise en place de mesures de sécurité (pare-feu, systèmes de détection, contrôle d'accès, etc.) qui visent à empêcher une intrusion. Le right of boom, en revanche, désigne la phase réactive, où l'on doit répondre à une attaque une fois qu'elle a été identifiée, afin de limiter son impact.

Le "boom" dans ce contexte est le moment où l'on découvre que le système a été compromis. Il est important de noter que ce boom est dynamique : une attaque peut rester invisible pendant longtemps (des jours, des mois, voire des années) avant que l'on ne détecte l'intrusion. Ainsi, la réactivité et la gestion des incidents peuvent varier considérablement en fonction du moment où l'attaque est identifiée.


![Boom : vue d’artiste](/images/artiste.png)


## La réutilisation dans la lutte contre la désinformation

Dans la lutte contre les manipulations de l'information, les concepts de left of boom et right of boom ont été empruntés pour décrire le processus de gestion des campagnes de désinformation. Cependant, contrairement à la cybersécurité, ici le boom correspond à l'explosion de la campagne de désinformation elle-même — c'est-à-dire, le moment où la manipulation atteint un large public et devient évidente. Ce boom est donc fixe, car il est toujours placé à un moment précis dans la chaîne d'attaque de la désinformation, que l’on retrouve exprimée dans le framework DISARM, où les étapes de l'attaque sont clairement définies.

    "AMITT’s phases are grouped into activities typically performed before a disinformation incident become publicly visible, and those after incident artifacts are widely visible online. The phases before public visibility are termed “left of boom”; those after are “right of boom” (this is an old explosive disposal term used in some infosec models)"

(Source : DISARM GitHub)[https://github.com/DISARMFoundation/DISARMframeworks/blob/main/DISARM_DOCUMENTATION/00_AMITT_Design_Guide_version1.pdf]

![schéma de comparaison CTI - LMI](/images/lbr.png)

## Les différences fondamentales dans l'application des concepts

    - En cybersécurité, le boom est un événement indéterminé et dynamique, qui peut survenir à différents moments selon l'attaque et la capacité de détection. Il est donc difficile de prévoir précisément quand une intrusion sera découverte. Cela permet une certaine flexibilité dans les actions de réponse, qui peuvent être adaptées en fonction du moment de la détection.
    - Dans la lutte contre la désinformation, en revanche, le boom est un événement prédéfini et fixe : il correspond au moment où la campagne de désinformation devient largement visible et prend de l'ampleur. Il s'inscrit dans une kill chain ou une chaîne d'attaque déterminée, ce qui fait que la réaction se situe toujours à un moment donné de cette chaîne, et qu'il est beaucoup plus difficile d'intervenir avant ce point de "boom" pour limiter les effets de la désinformation.

## La difficulté d’adopter les concepts de la CTI pour la désinformation

L'application des concepts de la CTI à la désinformation révèle donc certaines limites. En cybersécurité, il est possible de prendre des mesures de mitigation pour contenir ou arrêter une attaque une fois qu'elle a été détectée, en agissant à partir du right of boom. Toutefois, dans le domaine de la désinformation, les actions de mitigation sont beaucoup plus limitées (voir inexistantes) une fois que la campagne a atteint son "boom", et il est souvent trop tard pour corriger l'impact d'une campagne qui a débuté sa phase de diffusion.

Cela met en lumière une différence clé : en cybersécurité, on peut intervenir avant l'attaque pour la prévenir, et réagir après l'intrusion pour limiter les dégâts. Mais en lutte contre la désinformation, les actions de prévention sont moins efficaces, et une fois la désinformation diffusée, il est beaucoup plus complexe de réduire ses effets.
Conclusion

Ainsi, l'adaptation des concepts de la CTI à la lutte contre la manipulation de l’information montre qu'il est difficile d’utiliser ces modèles de manière directe. Le modèle dynamique de la cybersécurité, où la détection des attaques peut varier dans le temps, ne se transpose pas aisément à la désinformation, où la chronologie des événements est plus rigide. Cela souligne les spécificités de la manipulation de l’information, qui impose des approches et des stratégies d’atténuation adaptées.





