---
title: To blend into a hashtag
date: 2024-04-28
author: Anaïs Meunier
tags: [LMI,DISARM,CLUSIF]
---

In 2023, as I sought to better understand the [DISARM framework](https://www.disarm.foundation/framework), I attended a [Clusif](https://clusif.fr/) conference entirely dedicated to the [Mitre ATT&CK framework](https://fr.wikipedia.org/wiki/ATT%26CK). I believed that to better grasp the former, I needed to understand its origins and why it operated in this manner. Indeed, the [CogSec](https://github.com/DISARMFoundation/DISARMframeworks/blob/main/DISARM_DOCUMENTATION/00_AMITT_Design_Guide_version1.pdf) working group that worked on DISARM drew inspiration from ATT&CK and included individuals from the Mitre company.

![image](/images/CLUSIF.jpeg)

I wasn’t disappointed; the reflections and sharing of experiences at the conference were rich and interesting. One phrase, in particular, stuck with me: one of the speakers reminded us that ATT&CK was a “soft” tool. Indeed, fitting the unique, idiosyncratic sequence of actions into an arbitrary breakdown, no matter how detailed, is always subject to interpretation.
And sometimes, to error…

On March 13th, the Disarm Foundation released an update to its framework, [Disarm version 1.4.](https://medium.com/disarming-disinformation/disarm-update-version-1-4-b0b2ea867d0b)
While I was reviewing the [Dragonbridge campaign](https://www.mandiant.com/resources/blog/prc-dragonbridge-influence-elections) (yes, again), I realized that the technique I wanted to use had been removed from the update. I could no longer rely on T0049.002: Hijack Legitimate Hashtag.

The Dragonbridge campaign instrumentalized hashtags related to the [Intrusion Truth group](https://www.vice.com/fr/article/wjka84/a-la-rencontre-du-groupe-qui-doxxe-les-hackers-du-gouvernement-chinois), a group that publishes information about cyber threat actors linked to China. The tactic “Hijack Legitimate Hashtag” had seemed to me, at the time, to involve exploiting a hashtag used by the targeted group or community. However, the name was misleading because the definition rather described the act of riding on the trend of a hashtag to gain visibility. As a matter of fact, the technique has been removed and replaced by T0049.002: “Flood Existing Hashtag”. This technique now describes the act of posting content related to the hashtag to “ruin” the communication of the group, using it in order to render it invalid. It also describes manipulating this hashtag by flooding the legitimate hashtag with campaign content, thereby introducing its own artifacts (visuals, texts) into the normal content associated with the hashtag.

Indeed, all of this didn’t really capture the idea of exploiting a very specific hashtag used by a particular actor (here, the Intrusion Truth group) to pass off its content as one’s own. It’s not about flooding the content networks; it’s about impersonating an actor by reusing its codes.
This technique, ultimately, is that of the Butterfly attack, which I’m glad to finally be able to use because it made a very nice mug for the [M82 project](https://m82-project.org/).

![image](/images/MUG_Butterfly.jpeg)

T0094.002: Utilizing Butterfly Attacks thus represents the act of impersonating a member of a community, adopting its codes to delegitimize and discredit it.

I could have at least avoided this mistake by doing one simple thing: rereading the technique to which the sub-technique belonged: “Flooding the information space”. Indeed, I wasn’t facing a need to flood the information space with my hashtag; the attacker mainly wanted to impersonate a member of the targeted community.

Fortunately, the framework modifications have helped to remove this ambiguity.

(Traduit avec l’aide de Chat-GPT, il faut bien que ça serve de polluer le monde avec des serveurs et de faire peur aux gens avec des IA)



[Graphika Report - Spamouflage - 2019](https://graphika.com/reports/spamouflage)

