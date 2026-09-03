# Sur-MeZur — brief images

Le site est aujourd'hui 100 % vectoriel (SVG dessinés à la main). C'est propre,
léger et cohérent, mais il manque de **chair** : on ne voit jamais un atelier,
un tissu, une main, un vrai téléphone. Ce document liste les images à produire,
leur emplacement exact, et un prompt de génération pour chacune.

---

## Règles communes à toutes les images

À coller en préfixe de **chaque** prompt, pour que la série tienne ensemble :

> Photographic style: editorial, natural daylight, airy and clean. Background is
> white or very pale lavender-grey (#F7F4FE). The only saturated colour in frame
> is a deep violet (#5D06CC) and a deep indigo (#08044D) — no other strong hue,
> no teal, no orange, no gold. Soft diffused shadows, no harsh contrast, no
> vignette. Shallow depth of field. Shot on a 50mm lens at f/2.0.
> Absolutely no text, no logos, no watermarks, no UI overlays in the image.

**Contraintes techniques**

| | |
|---|---|
| Format | AVIF + WebP (Next.js les génère : livrez du PNG/JPG source ≥ 2× la taille d'affichage) |
| Espace colorimétrique | sRGB |
| Poids source | ≤ 2 Mo par image avant optimisation |
| Emplacement | `public/photos/` |
| Rendu | `next/image` avec `sizes` renseigné, `priority` **uniquement** pour l'image du Hero |

**Le point le plus important :** la peau, les tissus et les mains doivent être
crédibles pour le marché visé — Douala, Cameroun, Afrique centrale. Des photos
d'atelier européen générique tueraient la crédibilité de la page.

---

## 1 — Hero · l'atelier réel

**Où :** [Hero.tsx](../src/components/sections/Hero.tsx) — en fond de la colonne
droite, **derrière** le `HeroVisual` SVG, ou en bande pleine largeur juste sous
le Hero.
**Rôle :** ancrer immédiatement le produit dans un vrai atelier plutôt que dans
une abstraction. C'est l'image qui décide si le visiteur y croit.
**Format :** 3:2 horizontal, 2400×1600.

> A tailor's workshop in Douala, Cameroon, seen in soft morning light. A
> mid-shot of a wooden cutting table with folded fabric, tailor's chalk, a paper
> pattern and a smartphone lying flat on the table, screen off. Out-of-focus
> dress form in the background. Warm wood, white walls, one deep violet fabric
> bolt as the single colour accent. Nobody's face is visible. Calm, precise,
> uncluttered.

---

## 2 — Le problème · le mètre ruban

**Où :** [Problem.tsx](../src/components/sections/Problem.tsx) — à gauche de la
chaîne « Tape → … », en 4:5.
**Rôle :** montrer l'ancienne méthode telle qu'elle est vraiment — à la main,
approximative, chronophage. C'est le « avant ».
**Format :** 4:5 vertical, 1600×2000.

> Close-up of two hands holding a yellow-and-white tape measure around a
> mannequin's waist, in a tailoring workshop. Slight motion blur on the hands to
> suggest a repeated, tiring gesture. A notebook with handwritten numbers is
> just visible, out of focus. Neutral white background, soft daylight from the
> left. Documentary feel, not staged.

---

## 3 à 5 — Comment ça marche · les trois étapes

**Où :** [HowItWorks.tsx](../src/components/sections/HowItWorks.tsx) — une image
par étape, au-dessus de chaque titre.
**Rôle :** c'est **la** section qui a le plus besoin de photos. Aujourd'hui le
visiteur doit imaginer le geste ; là il le verra.
**Format :** 4:5 vertical, 1400×1750, cadrage identique pour les trois.

**3 — Photo de face**
> A person standing straight against a plain white wall, seen from behind the
> shoulder of someone photographing them with a smartphone held vertically. Full
> body in frame, arms slightly away from the body, wearing simple fitted
> clothing in light grey. Even daylight, no shadow on the wall. West African
> setting, contemporary and ordinary — a living room, not a studio.

**4 — Photo de profil**
> The same person, same wall, same light, now turned ninety degrees to their
> left, standing still in profile. Photographed from a few steps back with a
> smartphone. Identical framing and colour treatment to the previous image so
> the two read as a pair.

**5 — Le résultat**
> A hand holding a smartphone vertically, screen facing the camera but the
> screen content left entirely blank and neutral white — no interface, no text.
> The background is a softly out-of-focus tailoring workshop. Deep violet
> accent visible on a fabric in the background. The phone is the clear subject.

> **Note :** l'écran est laissé volontairement vide dans le prompt. L'interface
> réelle sera incrustée par-dessus, en CSS ou en SVG — jamais générée, sinon
> elle montrera un produit qui n'existe pas.

---

## 6 — Pour les couturiers

**Où :** [ForTailors.tsx](../src/components/sections/ForTailors.tsx) — à droite
de la liste de bénéfices.
**Rôle :** parler au premier client payant. Il doit se reconnaître.
**Format :** 3:2 horizontal, 2000×1333.

> A tailor in their forties standing at a workbench in a Douala workshop,
> looking down at a smartphone in one hand while the other rests on a folded
> length of fabric. Sewing machine and thread spools out of focus behind. Warm,
> competent, unhurried — a professional using a tool, not a model posing.
> Natural light from a window on the left. Deep violet thread visible on the
> bench.

---

## 7 — Pour les clients

**Où :** [ForClients.tsx](../src/components/sections/ForClients.tsx).
**Rôle :** montrer que la prise de mesure se fait n'importe où, sans rendez-vous.
**Format :** 4:5 vertical, 1600×2000.

> A young woman at home in a bright apartment, setting up her smartphone against
> a stack of books on a table, framing herself against a plain wall a few steps
> away. Casual everyday clothing. Late afternoon daylight. The gesture is
> self-directed, easy and modern — no professional equipment anywhere.

---

## 8 — Le tissu · bande de respiration

**Où :** entre [Differentiation.tsx](../src/components/sections/Differentiation.tsx)
et [Proof.tsx](../src/components/sections/Proof.tsx), en bande pleine largeur,
hauteur ~ 22rem, `object-cover`.
**Rôle :** casser la succession de blocs blancs et donner une texture au milieu
de la page. C'est le repos visuel qui manque le plus.
**Format :** 21:9 panoramique, 2800×1200.

> Extreme macro of layered fabric: white linen, pale grey cotton, and one fold
> of deep violet satin, arranged in soft parallel waves. Raking daylight across
> the weave so the texture and thread are visible. No seams, no stitching, no
> garment shape — pure material. Fills the whole frame.

---

## 9 — Avatar 3D

**Où :** [AvatarSection.tsx](../src/components/sections/AvatarSection.tsx) — en
remplacement ou en complément de `AvatarStage`.
**Rôle :** la section promet « See yourself in 3D » et ne montre aujourd'hui
qu'un SVG schématique. C'est l'écart promesse/preuve le plus visible du site.
**Format :** 4:5 vertical, 1600×2000, **fond transparent** (PNG).

> A clean 3D render of a genderless human body mannequin, standing, arms
> slightly away from the body, seen three-quarter. Matte white surface with a
> fine violet wireframe mesh over it. A few thin violet measurement rings around
> chest, waist and hips. Studio render on a pure white background, soft global
> illumination, no hard shadow, no floor. Product-visualisation quality, not
> photorealistic skin.

---

## 10 — Photo du produit réel (à ne PAS générer)

**Où :** [Proof.tsx](../src/components/sections/Proof.tsx).
**Rôle :** cette section dit explicitement « No invented testimonials. Just what
actually exists today. » Elle doit donc contenir des **captures réelles** du
prototype : écrans de l'application, un vrai résultat de mesure, la vraie
interface couturier.

C'est le seul emplacement où une image générée serait malhonnête : elle
montrerait un produit qui n'existe pas, dans la section précisément dédiée à ce
qui existe. Il faut des captures d'écran du prototype, exportées en PNG @2×.

Même remarque pour [Dashboard.tsx](../src/components/sections/Dashboard.tsx) :
capture réelle, pas de génération.

---

## Ordre de priorité

Si vous ne produisez que trois images, produisez celles-ci :

1. **#1 Hero** — c'est elle qui crédibilise toute la page.
2. **#6 Pour les couturiers** — c'est votre client payant.
3. **#8 Bande de tissu** — le meilleur rapport effort/effet sur le rythme.

Ensuite : #3-5 (les trois étapes), puis #9 (avatar), puis #2 et #7.

---

## Impact performance

Ces images sont lourdes par nature. À respecter, sinon le gain visuel se paie en
temps de chargement :

- une seule image en `priority` (le Hero) ; toutes les autres en `loading="lazy"` ;
- `sizes` renseigné partout, sinon Next sert du pleine largeur à tout le monde ;
- ratio fixé côté CSS (`aspect-ratio`) pour ne pas décaler la mise en page au
  chargement ;
- un `placeholder="blur"` sur le Hero et la bande de tissu.
