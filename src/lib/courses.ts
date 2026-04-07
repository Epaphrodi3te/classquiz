export interface Chapter {
  id: string;
  title: string;
  videoUrl?: string;
  content: string;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  icon: "user" | "fire" | "cpu" | "zap" | "dollar" | "target";
  chapters: Chapter[];
}

export const courses: Course[] = [
  {
    slug: "creer-compte-tiktok",
    title: "Creer son compte TikTok",
    description:
      "Apprenez a creer et optimiser votre profil TikTok pour attirer un maximum d'abonnes.",
    icon: "user",
    chapters: [
      {
        id: "1",
        title: "Telecharger et installer TikTok",
        videoUrl: "https://www.youtube.com/embed/B7SDUMegdo0",
        content: `
## Telecharger TikTok

TikTok est disponible sur **iOS** et **Android**. Rendez-vous sur votre store d'applications et recherchez "TikTok".

### Etapes :
1. Ouvrez le Play Store ou l'App Store
2. Recherchez "TikTok"
3. Cliquez sur **Installer**
4. Ouvrez l'application une fois installee

> Astuce : Assurez-vous d'avoir la derniere version pour acceder a toutes les fonctionnalites.
        `,
      },
      {
        id: "2",
        title: "Creation du compte monetisable",
        videoUrl: "https://www.youtube.com/embed/XpSg2-d_tGg",
        content: `
## Optimiser votre profil TikTok

Un profil bien optimise est la cle pour convertir les visiteurs en abonnes.

### Les elements essentiels :
- **Photo de profil** : Utilisez une photo claire et professionnelle
- **Nom d'utilisateur** : Court, memorable, lie a votre niche
- **Bio** : Expliquez ce que vous proposez en 80 caracteres max
- **Lien** : Ajoutez votre lien une fois que vous avez 1000 abonnes

### Formule de bio qui marche :
\`[Ce que vous faites] + [Pour qui] + [CTA]\`

Exemple : "Astuces IA pour createurs | Nouveau contenu chaque jour"
        `,
      },
      {
        id: "3",
        title: "Parametres importants",
        content: `
## Parametres a configurer absolument

### 1. Passer en compte Pro
Allez dans **Parametres > Gerer le compte > Passer en compte Pro**.

Choisissez **Createur** pour acceder aux analytics.

### 2. Activer les analytics
Une fois en compte Pro, vous aurez acces a :
- Nombre de vues
- Croissance des abonnes
- Donnees demographiques de votre audience

### 3. Parametres de confidentialite
- Mettez votre compte en **public**
- Autorisez les **commentaires** de tout le monde
- Activez les **duos** et **collages**
        `,
      },
    ],
  },
  {
    slug: "niches-virales",
    title: "Les niches virales TikTok",
    description:
      "Decouvrez les niches les plus rentables et virales sur TikTok en 2024-2025.",
    icon: "fire",
    chapters: [
      {
        id: "1",
        title: "Qu'est-ce qu'une niche virale ?",
        content: `
## Comprendre la niche virale

Une niche virale est un concept qui se situe au croisement du marketing, de la communication numerique et de la psychologie collective. Elle designe un segment tres specifique d'un public ou d'un marche, mais qui possede une capacite exceptionnelle a propager rapidement un contenu.

Contrairement a une niche classique, qui est simplement un groupe cible, la niche virale agit comme un **accelerateur de diffusion**. Elle fonctionne un peu comme une etincelle dans un champ sec, ou chaque element favorise la propagation.

### Caracteristiques cles

Ce type de niche se caracterise par une forte reactivite emotionnelle et une tendance a partager. Les individus qui la composent sont souvent tres engages et connectes entre eux. La cohesion interne du groupe facilite la circulation rapide de l'information.

Une niche virale ne depend pas seulement du sujet, mais aussi du **comportement de son audience**. Elle repose sur des mecanismes humains profonds comme l'identification, la curiosite ou l'envie de participer.

### Le mecanisme de la viralite

Lorsqu'un contenu touche cette niche, il peut se diffuser de maniere exponentielle. La viralite n'est donc pas un hasard, mais le resultat d'une interaction precise entre message et audience.

Une niche virale amplifie un message en le transformant en phenomene collectif. Elle agit comme un echo qui se repete et se renforce a chaque partage. Ce phenomene est souvent rapide et peut atteindre une large audience en peu de temps.

### Le role des reseaux sociaux

La structure des reseaux sociaux favorise fortement l'existence de niches virales. Ces plateformes permettent une diffusion instantanee et sans frontiere. La niche virale devient alors un moteur de visibilite extremement puissant. Elle peut transformer un contenu ordinaire en phenomene massif.

Cependant, cette dynamique est instable et difficile a controler. La viralite peut apparaitre soudainement et disparaitre tout aussi vite.

### Comprendre pour mieux agir

Une niche virale n'est pas forcement durable dans le temps. Elle depend des tendances, des emotions collectives et du contexte du moment.

Comprendre une niche virale demande d'analyser les comportements et les interactions sociales. Il faut aussi considerer les codes culturels propres au groupe concerne. Ce type de niche fonctionne souvent avec des regles implicites qui influencent la maniere dont le contenu est percu et partage.

La niche virale agit donc comme un **catalyseur de diffusion et d'attention**. Elle transforme la communication en phenomene dynamique et participatif. C'est un espace ou l'information circule avec une intensite inhabituelle.

**En resume, une niche virale est un micro-univers capable de produire un impact massif.**
        `,
      },
      {
        id: "2",
        title: "10 niches virales pour la video en 2026",
        content: `
## 10 niches virales pour la video

### 1. Transformations (avant / apres)

Corps, chambre, bureau, montage video... Le cerveau humain est naturellement attire par les evolutions rapides. Ce format cree un effet de surprise immediat qui pousse au partage et au replay.

### 2. Hacks et astuces rapides

Des petits secrets pratiques presentes en 10 a 30 secondes. Le format court combine a l'utilite genere un reflexe de partage quasi automatique. Les gens sauvegardent et envoient a leurs proches.

### 3. Faits choquants et secrets caches

Des informations surprenantes, des choses que la plupart des gens ignorent. Ce format declenche la curiosite et provoque des commentaires massifs. Les spectateurs veulent donner leur avis ou verifier l'information.

### 4. Gameplay et narration

Jouer a un jeu tout en racontant une histoire. Ce melange entre divertissement visuel et storytelling captive deux audiences en meme temps. Le contenu devient addictif par sa double couche d'interet.

### 5. Conversations et mises en scene

Sketchs, dialogues et situations realistes du quotidien. Plus le spectateur se reconnait dans la scene, plus il partage. Ce format fonctionne parce qu'il est **relatable** : les gens se disent "c'est exactement moi".

### 6. Contenu motivation et discipline

Voix off percutante associee a des images puissantes. Ce type de contenu touche directement les emotions et pousse a l'action. Il genere des sauvegardes massives car les gens veulent y revenir.

### 7. Storytelling (histoires vraies ou inventees)

Des histoires courtes et captivantes avec du suspense. Le spectateur reste jusqu'a la fin pour connaitre le denouement. C'est le meilleur moyen d'obtenir un watch time eleve, le facteur numero un de l'algorithme.

### 8. Humour simple et universel

Des situations de la vie quotidienne presentees avec legerete. Pas besoin de scenarios complexes : la simplicite et l'authenticite sont les moteurs de la viralite dans l'humour. Un sourire suffit a declencher un partage.

### 9. Experiences et tests

"J'ai teste ca pendant 7 jours..." Ce format combine la curiosite naturelle du spectateur avec une preuve tangible. Le resultat final cree un engagement fort car les gens veulent savoir si ca fonctionne vraiment.

### 10. POV (Point of View)

"POV : tu es..." Ce format plonge le spectateur directement dans une situation. L'immersion est totale, comme un mini film ou le spectateur est le personnage principal. L'identification est immediate.

---

## Le secret derriere ces niches

Ce n'est pas la niche seule qui devient virale. C'est la combinaison entre le **format**, l'**emotion** et le **rythme** qui cree la viralite.

Une video virale repose sur trois piliers :

1. **Une accroche rapide** (0 a 3 secondes) qui capte l'attention immediatement
2. **Un contenu dynamique** qui maintient l'interet sans temps mort
3. **Une recompense a la fin** : une information, un rire, une surprise qui justifie le temps investi

Maitrisez ces trois elements et n'importe quelle niche peut devenir virale.
        `,
      },
    ],
  },
  {
    slug: "creer-videos-ia",
    title: "Creer des videos avec l'IA",
    description:
      "Maitrisez les outils d'IA pour creer du contenu TikTok professionnel sans montrer votre visage.",
    icon: "cpu",
    chapters: [
      {
        id: "1",
        title: "Niche IA : Videos de malbouffe arretee",
        videoUrl: "https://www.youtube.com/embed/Me6_d03tU6E",
        content: `
## Creer des videos de malbouffe arretee avec l'IA

Dans ce tutoriel, vous allez apprendre a creer des videos dans la niche "malbouffe arretee" en utilisant l'intelligence artificielle. Ce type de contenu genere enormement de vues car il combine un sujet universel (la nourriture) avec un angle educatif et visuel percutant.

Regardez la video ci-dessus pour suivre le processus etape par etape.
        `,
      },
      {
        id: "2",
        title: "Niche IA explosive sur TikTok",
        videoUrl: "https://www.youtube.com/embed/ikwg77eL4vk",
        content: `
## Une nouvelle niche IA qui explose sur TikTok

Decouvrez une niche IA en pleine croissance sur TikTok. Ce tutoriel vous montre comment identifier ces tendances emergentes et comment produire du contenu dans ce format avant que la concurrence ne devienne trop forte.

Le timing est essentiel : plus vous entrez tot dans une niche, plus vos chances de viralite sont elevees. Suivez le guide dans la video ci-dessus.
        `,
      },
      {
        id: "3",
        title: "Videos de nettoyage virales avec l'IA",
        videoUrl: "https://www.youtube.com/embed/fRJal2HoRrM",
        content: `
## Creer des videos de nettoyage virales avec l'IA

Les videos de nettoyage sont parmi les contenus les plus addictifs sur les reseaux sociaux. Elles declenchent une satisfaction visuelle immediate qui pousse les spectateurs a regarder jusqu'au bout et a partager.

Ce tutoriel vous montre comment produire ce type de contenu entierement avec l'IA, sans materiel et sans montrer votre visage.
        `,
      },
      {
        id: "4",
        title: "Niche IA virale pour YouTube",
        videoUrl: "https://www.youtube.com/embed/MbbZbHyG0_U",
        content: `
## Une nouvelle niche IA virale sur YouTube

Ce tutoriel presente une niche IA qui cartonne sur YouTube. Vous allez decouvrir comment adapter ce format pour TikTok et les Shorts, et comment automatiser une partie de la production grace aux outils d'intelligence artificielle.

La video ci-dessus detaille tout le processus de creation de A a Z.
        `,
      },
      {
        id: "5",
        title: "Videos d'objets qui parlent avec l'IA",
        videoUrl: "https://www.youtube.com/embed/HwfEtWMY7j8",
        content: `
## Creer des videos d'objets qui parlent avec l'IA

Un format creatif et viral : donner la parole a des objets du quotidien grace a l'IA. Ce type de contenu surprend le spectateur et genere un fort taux de partage car il est a la fois drole et impressionnant techniquement.

Suivez le tutoriel complet dans la video pour maitriser cette technique.
        `,
      },
      {
        id: "6",
        title: "Videos Skeleton IA virales",
        videoUrl: "https://www.youtube.com/embed/56xWKw5dxSQ",
        content: `
## Creer des videos Skeleton IA virales

Le format Skeleton IA est un des formats les plus viraux du moment sur les Shorts et TikTok. Ce tutoriel complet vous guide dans la creation de ce type de contenu, de la generation des visuels au montage final.

Regardez la video ci-dessus pour le guide pas a pas.
        `,
      },
    ],
  },
  {
    slug: "algorithme-tiktok",
    title: "Comprendre l'algorithme TikTok",
    description:
      "Decryptez l'algorithme TikTok et apprenez a l'utiliser pour maximiser votre portee.",
    icon: "zap",
    chapters: [
      {
        id: "1",
        title: "L'algorithme TikTok en video",
        videoUrl: "https://www.youtube.com/embed/uuX7KC0QgOA",
        content: `
## Comprendre l'algorithme TikTok

Regardez cette video pour une explication complete du fonctionnement de l'algorithme TikTok. Le chapitre suivant detaille chaque mecanisme en profondeur.
        `,
      },
      {
        id: "2",
        title: "Le fonctionnement detaille de l'algorithme",
        content: `
## Comment fonctionne l'algorithme TikTok

L'algorithme de TikTok fonctionne comme un chef invisible dans une cuisine geante. Il goute chaque video puis decide a qui la servir, en fonction des reactions. Voici son fonctionnement detaille, etape par etape.

### 1. Le test initial (phase de lancement)

Quand vous postez une video, TikTok ne la montre pas a tout le monde. Il l'envoie a un petit groupe de personnes, souvent quelques dizaines a quelques centaines. C'est un test.

Le but : determiner si votre video merite d'etre diffusee plus largement... ou de disparaitre dans l'ombre.

### 2. Les signaux les plus importants

TikTok observe comment les gens reagissent. Voici les criteres principaux :

**Temps de visionnage (le plus important)**

Est-ce que les gens regardent jusqu'a la fin ? Est-ce qu'ils regardent plusieurs fois ? Si oui, c'est un enorme boost pour votre video.

**Engagement**

- Likes
- Commentaires
- Partages
- Ajout en favoris

Plus il y en a, plus la video est jugee interessante par l'algorithme.

**Taux de completion**

C'est le pourcentage de personnes qui regardent toute la video. Une video courte regardee a 100% est un veritable jackpot.

**Rewatch (relecture)**

Si quelqu'un regarde votre video une deuxieme fois, c'est un signal ultra puissant pour l'algorithme.

### 3. L'effet boule de neige

Si votre video marche bien lors du test initial, TikTok la montre a un groupe plus large, puis encore plus large, puis encore plus. C'est comme une vague qui grandit.

Si elle ne marche pas, la diffusion s'arrete rapidement.

### 4. La personnalisation (le cerveau de TikTok)

TikTok ne montre pas une video au hasard. Il analyse chaque utilisateur :

- Ce qu'il regarde
- Ce qu'il aime
- Combien de temps il reste sur un contenu

Ensuite, il montre votre video aux personnes les plus susceptibles de l'apprecier. C'est pour cette raison que meme un nouveau compte peut devenir viral.

### 5. L'analyse du contenu

TikTok "comprend" votre video grace a plusieurs elements :

- Ce que vous dites (analyse audio)
- Le texte a l'ecran
- Les hashtags utilises
- La musique choisie

Cela lui permet de classer votre video dans une categorie et de la distribuer au bon public.

### 6. Le role des 3 premieres secondes

C'est le moment critique. Si la personne swipe immediatement, c'est un mauvais signal. Si elle reste, c'est un bon signal. TikTok decide tres vite si votre video merite d'etre poussee.

### 7. Ce qui tue une video

Certaines choses font chuter votre portee :

- Video trop longue et ennuyeuse
- Mauvaise accroche
- Contenu deja vu ou copie
- Faible retention

### 8. Ce qui rend une video virale

Une video devient virale si elle :

- Capte l'attention rapidement
- Garde les gens jusqu'a la fin
- Donne envie de revoir
- Provoque une reaction : rire, choc, curiosite

---

## Resume

TikTok teste votre video, observe les reactions, puis decide de la pousser ou non.

**Image mentale pour retenir :** Imaginez une boite de nuit. Votre video est le DJ, le public ce sont les utilisateurs, et TikTok est le patron. Si les gens dansent, il ouvre la salle plus grande. Si personne ne bouge, il coupe la musique.
        `,
      },
    ],
  },
  {
    slug: "devenir-viral",
    title: "Comment devenir viral sur TikTok",
    description:
      "Les strategies concretes et les techniques eprouvees pour maximiser vos chances de viralite sur TikTok.",
    icon: "target",
    chapters: [
      {
        id: "0",
        title: "Rechauffer son compte avant de poster",
        content: `
## Rechauffer son compte TikTok

Avant de publier votre premiere video, il y a une etape que la plupart des createurs ignorent completement : le rechauffement du compte. Poster immediatement apres avoir cree votre compte est une erreur qui peut limiter votre portee pendant des semaines.

### Pourquoi rechauffer son compte ?

Quand vous creez un compte TikTok, l'algorithme ne sait rien de vous. Il ne connait pas votre niche, votre audience cible, ni le type de contenu que vous allez produire. Si vous postez immediatement, l'algorithme va distribuer votre video a des personnes aleatoires, ce qui donnera probablement de mauvais resultats.

Le rechauffement sert a envoyer des signaux clairs a l'algorithme pour qu'il comprenne qui vous etes et a qui montrer vos futures videos.

### Comment rechauffer son compte (3 a 5 jours minimum)

**Jour 1 et 2 : Consommer du contenu dans votre niche**

Passez 30 a 45 minutes par jour sur TikTok, mais pas au hasard. Recherchez specifiquement du contenu dans votre niche. Si vous allez creer du contenu IA, regardez des videos sur l'IA. Si c'est de la finance, regardez de la finance.

- Regardez les videos en entier, ne swipez pas trop vite
- Likez les videos qui correspondent a votre niche
- Laissez des commentaires pertinents (pas juste des emojis)
- Suivez 5 a 10 createurs influents dans votre domaine
- Sauvegardez quelques videos en favoris

**Jour 3 et 4 : Interagir activement**

Augmentez votre activite :

- Commentez sous les videos populaires de votre niche (des commentaires construits de 2 a 3 phrases)
- Repondez aux commentaires des autres
- Partagez quelques videos
- Explorez les hashtags lies a votre niche et interagissez avec le contenu

**Jour 5 : Preparer le terrain**

- Completez votre profil si ce n'est pas deja fait
- Verifiez que votre bio est optimisee pour votre niche
- Preparez vos 3 premieres videos a l'avance
- Postez votre premiere video en fin de journee, entre 18h et 21h

### Les regles a respecter pendant le rechauffement

- Ne suivez pas des centaines de comptes d'un coup, cela ressemble a du spam
- Ne likez pas 200 videos en 5 minutes, restez naturel
- Variez vos actions : un like ici, un commentaire la, un partage ailleurs
- Restez dans votre niche, ne dispersez pas les signaux
- N'utilisez pas de bots ou d'outils d'automatisation, TikTok les detecte

### Ce que le rechauffement change concretement

Un compte rechauffe correctement verra ses premieres videos distribuees a une audience deja pertinente. L'algorithme aura compris votre thematique et montrera vos videos aux personnes interessees par ce type de contenu.

Un compte non rechauffe verra ses videos distribuees au hasard, avec un taux d'engagement faible, ce qui enverra un mauvais signal a l'algorithme des le depart.

**La patience de ces quelques jours peut faire la difference entre un compte qui decolle et un compte qui stagne pendant des mois.**
        `,
      },
      {
        id: "1",
        title: "Les fondamentaux de la viralite",
        content: `
## Les fondamentaux de la viralite

La viralite sur TikTok n'est pas un coup de chance. C'est le resultat d'une methode precise appliquee avec regularite. Voici les principes fondamentaux que tout createur doit maitriser.

### Le triangle de la viralite

Chaque video virale repose sur trois piliers :

1. **L'accroche** : les 3 premieres secondes captent ou perdent le spectateur
2. **La retention** : le contenu doit maintenir l'interet jusqu'a la derniere seconde
3. **La reaction** : la video doit provoquer une emotion qui pousse au partage

Si un seul de ces piliers manque, la video ne decollera pas.

### Comprendre la psychologie du spectateur

Le spectateur TikTok scrolle a une vitesse considerable. Pour l'arreter, votre video doit activer un de ces mecanismes psychologiques :

- **La curiosite** : "Je dois savoir la suite"
- **L'identification** : "C'est exactement moi"
- **La surprise** : "Je ne m'attendais pas a ca"
- **L'utilite** : "Je dois sauvegarder ca"
- **L'emotion** : "Ca me touche"

### La regularite avant tout

Un compte qui poste une video par semaine ne deviendra jamais viral. L'algorithme favorise les createurs actifs. Le minimum recommande est d'une video par jour pendant les 30 premiers jours. L'ideal se situe entre 2 et 3 videos quotidiennes.

La regularite envoie un signal fort a l'algorithme : ce createur est serieux, il merite d'etre mis en avant.
        `,
      },
      {
        id: "2",
        title: "Construire une accroche parfaite",
        content: `
## L'art de l'accroche

L'accroche est le facteur numero un de la viralite. Si personne ne reste apres les 3 premieres secondes, le reste de votre video n'a aucune importance.

### Les types d'accroches qui fonctionnent

**L'accroche par la question**
Posez une question a laquelle le spectateur veut absolument connaitre la reponse.
Exemple : "Pourquoi 99% des createurs TikTok echouent ?"

**L'accroche par le choc**
Commencez par une information surprenante ou contre-intuitive.
Exemple : "Cette methode gratuite genere plus de vues que la publicite payante."

**L'accroche par le resultat**
Montrez le resultat final des le debut pour creer l'envie de savoir comment.
Exemple : "Voici comment j'ai eu 1 million de vues en 24 heures."

**L'accroche par l'urgence**
Creez un sentiment de rarete ou de temps limite.
Exemple : "Cette astuce fonctionne encore mais ca ne va pas durer."

**L'accroche par l'interpellation directe**
Adressez-vous directement au spectateur.
Exemple : "Toi qui veux percer sur TikTok, arrete tout et ecoute."

### Les erreurs a eviter

- Ne commencez jamais par "Bonjour" ou "Salut tout le monde"
- Ne mettez pas de logo ou d'intro animee
- Ne prenez pas 5 secondes pour vous installer avant de parler
- Ne repetez pas le titre de la video en introduction

Chaque milliseconde compte. Allez droit au but.
        `,
      },
      {
        id: "3",
        title: "Maximiser la retention",
        content: `
## Garder le spectateur jusqu'a la fin

Le taux de completion est le signal le plus puissant pour l'algorithme. Une video regardee a 100% par la majorite des spectateurs sera poussee massivement.

### Techniques de retention

**Le pattern interrupt**
Changez quelque chose toutes les 2 a 3 secondes : angle de camera, texte a l'ecran, transition, effet sonore. Le cerveau humain est attire par la nouveaute. Si rien ne change visuellement, le spectateur decroche.

**La boucle ouverte**
Annoncez quelque chose au debut que vous ne revelez qu'a la fin. Le spectateur reste pour obtenir la reponse promise.

**La progression**
Structurez votre contenu comme une montee en puissance. Chaque nouvelle information doit etre plus interessante que la precedente.

**Les sous-titres dynamiques**
Les sous-titres animes maintiennent l'attention visuelle et permettent de regarder sans le son. 40% des utilisateurs TikTok regardent sans le son.

**La duree optimale**
- Pour les debutants : 15 a 30 secondes
- Pour les comptes etablis : 30 a 60 secondes
- Contenu educatif : jusqu'a 90 secondes

Plus la video est courte, plus le taux de completion sera eleve. Ne faites jamais une video de 3 minutes si le message tient en 30 secondes.

### Le test du "et alors ?"

Pour chaque phrase de votre script, posez-vous la question "et alors ?". Si la reponse est "rien", supprimez cette phrase. Chaque seconde de votre video doit apporter de la valeur.
        `,
      },
      {
        id: "4",
        title: "Publier au bon moment",
        content: `
## Le timing de publication

Publier au bon moment peut multiplier par 3 ou 4 la portee de votre video. L'objectif est de poster quand votre audience cible est active.

### Les creneaux recommandes

**Le matin (7h - 9h)**
Les gens consultent leur telephone au reveil. C'est un bon moment pour du contenu motivationnel ou informatif.

**Le midi (12h - 13h)**
La pause dejeuner est un moment de consommation intense de contenu court. Ideal pour les formats divertissants.

**Le soir (18h - 21h)**
C'est le creneau le plus performant. Les gens sont detendus et passent le plus de temps sur l'application. Privilegiez ce moment pour vos meilleures videos.

**Le week-end**
Les horaires sont decales. Les gens se levent plus tard et passent plus de temps sur l'application en journee.

### Adapter selon votre audience

Ces horaires sont des points de depart. Utilisez les analytics de votre compte Pro pour identifier les moments ou votre audience specifique est la plus active.

### La frequence ideale

- **Minimum** : 1 video par jour
- **Optimal** : 2 a 3 videos par jour
- **Les 30 premiers jours** : postez le maximum possible pour que l'algorithme comprenne votre contenu et identifie votre audience
        `,
      },
      {
        id: "5",
        title: "Utiliser les tendances a son avantage",
        content: `
## Surfer sur les tendances

Les tendances sont des accelerateurs de viralite. L'algorithme pousse naturellement les contenus qui utilisent des sons, formats ou sujets en vogue.

### Comment reperer une tendance

- Consultez la page "Decouvrir" quotidiennement
- Observez les sons qui reviennent dans votre feed
- Surveillez les formats que plusieurs createurs adoptent
- Regardez ce qui fonctionne dans votre niche chez d'autres createurs

### Comment exploiter une tendance

Le secret n'est pas de copier, mais d'adapter. Prenez le format tendance et appliquez-le a votre niche specifique. C'est la combinaison entre un format populaire et votre angle unique qui cree la viralite.

**Exemple :** Un son tendance humoristique peut etre adapte pour expliquer un concept de finance personnelle. Le format attire l'attention, votre contenu apporte la valeur.

### Le timing des tendances

- **Jour 1 a 3** : la tendance emerge, peu de createurs l'utilisent. C'est le meilleur moment pour se positionner.
- **Jour 3 a 7** : la tendance explose. Il est encore temps mais la concurrence augmente.
- **Apres 7 jours** : la tendance est saturee. Passez a la suivante.

### Les hashtags strategiques

Utilisez un melange de :
- 1 a 2 hashtags larges (ex: fyp, pourtoi)
- 2 a 3 hashtags de niche (ex: astucesia, tiktokbusiness)
- 1 hashtag tendance du moment

Ne surchargez pas : 3 a 5 hashtags maximum par video.
        `,
      },
    ],
  },
  {
    slug: "monetisation",
    title: "Monetiser son compte TikTok",
    description:
      "Transformez vos vues en revenus : toutes les methodes de monetisation sur TikTok.",
    icon: "dollar",
    chapters: [
      {
        id: "1",
        title: "Les sources de revenus",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_9",
        content: `
## Les 5 facons de gagner de l'argent sur TikTok

### 1. Programme de creativite TikTok
- Remplace l'ancien fonds des createurs
- Conditions : 10K abonnes, 100K vues/mois
- Revenus : 0.5 a 1 euro pour 1000 vues

### 2. Affiliation
- Promouvoir des produits d'autres marques
- Commission de 5% a 50% par vente
- Plateformes : Amazon, 1TPE, Systeme.io

### 3. Vente de produits digitaux
- E-books, formations, templates
- Marge a 100%
- Pas de stock ni de livraison

### 4. Sponsoring et Partenariats
- Les marques vous paient pour promouvoir
- A partir de 10K abonnes
- 50 a 5000 euros par video selon votre audience

### 5. Lives et cadeaux
- Les spectateurs envoient des cadeaux virtuels
- Convertibles en argent reel
- Condition : 1000 abonnes minimum
        `,
      },
      {
        id: "2",
        title: "Creer et vendre une formation",
        content: `
## Vendre votre propre formation

### Pourquoi c'est la meilleure methode :
- Revenus passifs
- Marge de 100%
- Vous vous positionnez comme expert

### Comment faire :
1. **Choisissez votre expertise** : Ce que vous maitrisez
2. **Creez le contenu** : Videos + PDF
3. **Utilisez une plateforme** : Systeme.io (gratuit)
4. **Creez un tunnel de vente** sur TikTok :
   - Video teaser > Bio > Page de vente > Achat

### Prix recommandes :
- Mini-formation (1-2h) : 17 - 47 euros
- Formation complete (5-10h) : 97 - 297 euros
- Coaching : 500 euros et plus
        `,
      },
    ],
  },
];
