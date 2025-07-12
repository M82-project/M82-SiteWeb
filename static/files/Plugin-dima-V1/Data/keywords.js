// DIMA Enhanced Keywords Database
// Enhanced keyword patterns for manipulation technique detection

// ===== DÉTECTION DE TYPES DE PAGES AMÉLIORÉE =====
const PAGE_TYPE_PATTERNS = {
    news: {
        domains: ['bfmtv.com', 'lefigaro.fr', 'lemonde.fr', 'liberation.fr', 'franceinfo.fr', 'rfi.fr', 'euronews.com', 'cnn.com', 'bbc.com', 'reuters.com', 'france24.com'],
        urls: ['news', 'article', 'actualit', 'info', 'breaking', 'flash'],
        selectors: ['.article', '.news-article', '[class*="news"]', '[class*="article"]'],
        meta: ['article:section', 'article:tag'],
        weight_adjustments: {
            'TE0500': 1.5, // Clickbait très grave en news
            'TE0132': 1.4, // Biais négativité suspect
            'TE0221': 1.6, // Stéréotypes inacceptables
            'TE0501': 1.3  // FOMO suspect en news
        }
    },
    
    blog: {
        domains: ['medium.com', 'substack.com', 'wordpress.com', 'blogspot.com', 'ghost.io'],
        urls: ['blog', 'post', 'article'],
        selectors: ['.post', '.blog-post', '[class*="blog"]', '.entry'],
        meta: ['article:author'],
        weight_adjustments: {
            'TE0212': 0.8, // Anecdotes plus normales
            'TE0314': 0.9, // Suggestions plus acceptables
            'TE0261': 0.7, // Biais rétrospectif courant
            'TE0321': 1.1  // Biais confirmation suspect
        }
    },
    
    social: {
        domains: ['facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com', 'tiktok.com', 'youtube.com', 'reddit.com', 'discord.com', 'telegram.org'],
        urls: ['social', 'post', 'status', 'tweet', 'story'],
        selectors: ['.post', '.tweet', '.story', '[data-testid*="tweet"]', '[role="article"]'],
        meta: ['twitter:card', 'og:type'],
        weight_adjustments: {
            'TE0132': 0.9, // Négativité plus courante
            'TE0131': 0.8, // Bizarrerie normale
            'TE0501': 1.3, // FOMO plus manipulatoire
            'TE0221': 1.7, // Stéréotypes très graves
            'TE0251': 1.2  // Faux consensus suspect
        }
    },
    
    commerce: {
        domains: ['amazon.com', 'aliexpress.com', 'cdiscount.com', 'fnac.com', 'darty.com', 'leclerc.com', 'carrefour.fr', 'shopify.com'],
        urls: ['shop', 'buy', 'product', 'store', 'cart', 'checkout', 'commerce', 'vente'],
        selectors: ['.product', '.shop', '.store', '[class*="price"]', '.add-to-cart'],
        meta: ['product:price', 'product:availability'],
        weight_adjustments: {
            'TE0501': 0.8, // FOMO plus normale en commerce
            'TE0141': 0.7, // Effet Restorff marketing normal
            'TE0143': 0.6, // Comparaisons normales
            'TE0422': 1.2, // Fausse autorité problématique
            'TE0411': 1.1  // Excès confiance suspect
        }
    },
    
    educational: {
        domains: ['wikipedia.org', 'edu', 'ac.uk', 'universalis.fr', 'larousse.fr', 'coursera.com', 'edx.org', 'khanacademy.org'],
        urls: ['learn', 'course', 'education', 'wiki', 'tutorial', 'lesson', 'formation'],
        selectors: ['.course', '.lesson', '.wiki-content', '.educational'],
        meta: ['article:section'],
        weight_adjustments: {
            'TE0221': 1.8, // Stéréotypes très graves en éducation
            'TE0422': 0.8, // Autorité plus normale
            'TE0212': 0.7, // Exemples pédagogiques normaux
            'TE0241': 0.8  // Simplifications parfois nécessaires
        }
    },
    
    health: {
        domains: ['ameli.fr', 'who.int', 'doctissimo.fr', 'vidal.fr', 'pasteur.fr', 'has-sante.fr', 'webmd.com', 'mayoclinic.org'],
        urls: ['health', 'medical', 'sante', 'medecin', 'doctor', 'hospital', 'clinic'],
        selectors: ['.health-content', '.medical', '[class*="health"]'],
        meta: ['article:section'],
        weight_adjustments: {
            'TE0422': 0.7, // Autorité médicale légitime
            'TE0212': 1.4, // Preuves anecdotiques dangereuses
            'TE0221': 1.9, // Stéréotypes très graves
            'TE0500': 1.6, // Clickbait santé très dangereux
            'TE0501': 1.5  // FOMO santé dangereux
        }
    },
    political: {
        domains: ['gouvernement.fr', 'elysee.fr', 'assemblee-nationale.fr', 'senat.fr', 'service-public.fr'],
        urls: ['politique', 'political', 'election', 'vote', 'government','gouv', 'gov', 'ministre'],
        selectors: ['.political', '.government', '[class*="politic"]'],
        meta: ['article:section'],
        weight_adjustments: {
            'TE0221': 2.0, // Stéréotypes très graves en politique
            'TE0132': 1.3, // Biais négativité suspect
            'TE0251': 1.5, // Faux consensus très suspect
            'TE0321': 1.4, // Biais confirmation dangereux
            'TE0422': 1.2  // Fausse autorité problématique
        }
    },
    
    financial: {
        domains: ['banque-france.fr', 'amf-france.org', 'boursorama.com', 'lesechos.fr', 'bloomberg.com', 'reuters.com'],
        urls: ['finance', 'investment', 'bourse', 'crypto', 'trading', 'bank', 'credit'],
        selectors: ['.financial', '.investment', '[class*="finance"]', '.trading'],
        meta: ['article:section'],
        weight_adjustments: {
            'TE0501': 1.6, // FOMO financier très dangereux
            'TE0422': 1.3, // Fausse autorité financière grave
            'TE0411': 1.4, // Excès confiance dangereux
            'TE0500': 1.5, // Clickbait financier dangereux
            'TE0212': 1.3  // Preuves anecdotiques suspectes
        }
    },
    
    gaming: {
        domains: ['steam.com', 'epicgames.com', 'twitch.tv', 'gamepass.com', 'ign.com', 'gamespot.com'],
        urls: ['game', 'gaming', 'jeux', 'play', 'stream'],
        selectors: ['.game', '.gaming', '[class*="game"]', '.player'],
        meta: ['og:type'],
        weight_adjustments: {
            'TE0501': 0.9, // FOMO plus normal en gaming
            'TE0141': 0.8, // Unicité marketing normale
            'TE0131': 0.7, // Bizarrerie plus normale
            'TE0421': 1.2  // Coûts irrécupérables suspect (microtransactions)
        }
    },
    
    dating: {
        domains: ['tinder.com', 'meetic.fr', 'adopteunmec.com', 'badoo.com', 'bumble.com'],
        urls: ['dating', 'rencontre', 'love', 'flirt'],
        selectors: ['.profile', '.dating', '[class*="match"]', '.member'],
        meta: ['og:type'],
        weight_adjustments: {
            'TE0501': 1.4, // FOMO émotionnel suspect
            'TE0221': 1.8, // Stéréotypes graves
            'TE0131': 1.1, // Bizarrerie suspecte
            'TE0251': 1.3, // Faux consensus suspect
            'TE0422': 1.2  // Fausse autorité suspecte
        }
    },
    
    conspiracy: {
        domains: ['4chan.org', 'infowars.com', 'breitbart.com'],
        urls: ['conspiracy', 'complot', 'truth', 'expose', 'reveal', 'secret'],
        selectors: ['.conspiracy', '.truth', '[class*="expose"]'],
        meta: [],
        weight_adjustments: {
            'TE0221': 2.5, // Stéréotypes extrêmement graves
            'TE0132': 1.8, // Biais négativité très suspect
            'TE0500': 1.9, // Clickbait très dangereux
            'TE0212': 1.7, // Preuves anecdotiques très suspectes
            'TE0251': 1.8, // Faux consensus très dangereux
            'TE0321': 1.6  // Biais confirmation très dangereux
        }
    }
};

// ===== BASE DE DONNÉES DES MOTS-CLÉS AMÉLIORÉS =====
const DIMA_ENHANCED_KEYWORDS = {
    "TE0111": {
        core: ["exemple", "cas", "témoignage", "example", "case", "testimony"],
        variants: {
            formal: ["illustration", "démonstration", "spécimen"],
            informal: ["histoire", "vécu", "expérience"],
            intensity: {
                weak: ["petit exemple", "simple cas"],
                strong: ["exemple frappant", "cas édifiant", "témoignage bouleversant"]
            }
        },
        patterns: [
            /(?:par\s+exemple|for\s+example|comme\s+dans\s+le\s+cas)/i,
            /(?:prenons\s+l'exemple|take\s+the\s+example)/i
        ]
    },
    
    "TE0500": {
        core: ["secret", "choquant", "incroyable", "shocking", "amazing"],
        variants: {
            clickbait_formulas: [
                "vous ne croirez pas", "ce qui arrive ensuite", "you won't believe",
                "what happens next", "les experts détestent", "un truc simple",
                "cette astuce", "révélation choc", "doctors hate this"
            ],
            emotional_hooks: [
                "ça va vous surprendre", "préparez-vous", "attention",
                "exclusif", "urgent", "will shock you", "prepare yourself"
            ],
            curiosity_gaps: [
                "la raison va vous étonner", "voici pourquoi", "découvrez comment",
                "la vérité sur", "the reason will amaze you", "here's why"
            ]
        },
        patterns: [
            /\d+\s+(?:choses|façons|méthodes|secrets|things|ways|methods)\s+(?:que|pour|de|to|that)/i,
            /(?:voici|découvrez|here's|discover)\s+(?:comment|pourquoi|ce que|how|why|what)/i,
            /(?:cette|cette|this)\s+\w+\s+va\s+vous\s+(?:\w+|will)/i,
            /(?:shocking|amazing|incredible)\s+(?:secret|truth|fact)/i
        ]
    },
    
    "TE0132": {
        core: ["catastrophe", "panique", "chaos", "disaster", "danger", "menace", "threat", "risque", "risk", "grave", "serious", "crise", "crisis"],
        variants: {
            intensity: {
                weak: ["problème", "difficulté", "souci", "issue", "concern"],
                strong: ["catastrophe majeure", "crise grave", "danger mortel", "major catastrophe", "deadly danger"]
            },
            temporal: ["imminent", "proche", "bientôt", "soon", "approaching"]
        },
        patterns: [
            /(?:alerte|alert|warning|attention)\s+(?:rouge|red|maximum)/i,
            /(?:situation|crisis|problem)\s+(?:critique|critical|dramatique|dramatic)/i
        ]
    },
    
    "TE0501": {
        core: ["ne ratez pas", "don't miss", "dernière chance", "last chance", "limité", "limited", "exclusif", "exclusive"],
        variants: {
            urgency: ["dépêchez-vous", "hurry up", "vite", "quickly", "maintenant ou jamais", "now or never"],
            scarcity: ["stock limité", "places limitées", "limited stock", "limited seats", "offre limitée"]
        },
        patterns: [
            /(?:seulement|only)\s+\d+\s+(?:jours?|heures?|minutes?|days?|hours?|minutes?)/i,
            /(?:expire|ends?)\s+(?:bientôt|soon|today|demain|tomorrow)/i
        ]
    }
};
// ===== PATTERNS CONTEXTUELS ÉTENDUS =====
const CONTEXT_PATTERNS = {
    urgency: {
        patterns: [
            /(?:urgent|rapidement|vite|immédiatement|maintenant|now|quickly|immediately)/i,
            /(?:dernière\s+chance|temps\s+limité|offre\s+limitée|last\s+chance|limited\s+time)/i,
            /(?:dépêchez-vous|ne\s+ratez\s+pas|hurry|don't\s+miss)/i,
            /(?:avant\s+qu'il\s+soit\s+trop\s+tard|before\s+it's\s+too\s+late)/i
        ],
        boost: 1.3,
        techniques: ['TE0501', 'TE0500']
    },
    authority: {
        patterns: [
            /(?:selon\s+(?:les\s+)?(?:experts?|spécialistes?|docteurs?|doctors?|experts?))/i,
            /(?:étude\s+(?:révèle|montre|démontre|shows?|reveals?))/i,
            /(?:recherche\s+(?:scientifique|universitaire|scientific|university))/i,
            /(?:professeur|université|institut|laboratory)/i
        ],
        boost: 1.4,
        techniques: ['TE0422', 'TE0212']
    },
    social_proof: {
        patterns: [
            /(?:\d+(?:\.\d+)?[km]?\s+personnes?\s+(?:utilisent|font|pensent|people\s+(?:use|do|think)))/i,
            /(?:tout\s+le\s+monde|la\s+plupart\s+des\s+gens|everyone|most\s+people)/i,
            /(?:viral|tendance|populaire|trending|popular)/i,
            /(?:millions\s+de|thousands\s+of|des\s+milliers)/i
        ],
        boost: 1.2,
        techniques: ['TE0251', 'TE0221']
    },
    fear: {
        patterns: [
            /(?:attention|danger|risque|warning|risk|threat)/i,
            /(?:peur|fear|afraid|effrayant|scary)/i,
            /(?:catastrophe|disaster|tragédie|tragedy)/i
        ],
        boost: 1.4,
        techniques: ['TE0132', 'TE0500']
    },
    conspiracy: {
        patterns: [
            /(?:ils\s+(?:ne\s+veulent\s+pas|cachent)|they\s+(?:don't\s+want|hide))/i,
            /(?:vérité\s+cachée|hidden\s+truth|secret\s+agenda)/i,
            /(?:complot|conspiracy|manipulation\s+des\s+masses)/i,
            /(?:révélation|expose|dévoile|reveals?)/i
        ],
        boost: 1.6,
        techniques: ['TE0500', 'TE0221', 'TE0132']
    }
};


// Make keywords and patterns available globally for Chrome extension
window.DIMA_ENHANCED_KEYWORDS = DIMA_ENHANCED_KEYWORDS;
window.CONTEXT_PATTERNS = CONTEXT_PATTERNS;