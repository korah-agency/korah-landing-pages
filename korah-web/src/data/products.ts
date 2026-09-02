import type { I18nText } from "./site";

export type ProductStatus = "award" | "prototype" | "research" | "in-definition";

export type ProductVisual = "siren" | "surmezur" | "kozapp" | "agevoice" | "green";

export type Product = {
  /** URL segment under /solutions. */
  slug: string;
  name: string;
  /** Small uppercase category label shown on the card. */
  badge: I18nText;
  /** One-line card description. */
  description: I18nText;
  /** Longer paragraph used on the product page. */
  overview: I18nText;
  status: ProductStatus;
  /** Card accent — always derived from the KORAH purple → pink axis. */
  accent: { from: string; to: string };
  visual: ProductVisual;
  /** Editorial grid weight (spec §13): a hero card spans more space. */
  span: "hero" | "wide" | "standard";
  /** Bullet highlights rendered on the product page. */
  highlights: { title: I18nText; body: I18nText }[];
  /**
   * `true` when the public wording is still being finalised by KORAH.
   * The UI renders these as an intentional "in definition" state instead of
   * inventing a positioning. Replace the copy, then flip this to false.
   */
  copyPending?: boolean;
};

/**
 * The single source of truth for the KORAH portfolio (spec §29).
 * Adding a product here adds it to: the homepage grid, /solutions,
 * /solutions/[slug], the footer, the sitemap and the JSON-LD.
 */
export const products: Product[] = [
  {
    slug: "siren",
    name: "SIREN",
    badge: {
      en: "Child Safety × Connected Technology",
      fr: "Sécurité de l'enfant × Technologie connectée",
    },
    description: {
      en: "A connected safety solution designed to help protect children and improve emergency response.",
      fr: "Une solution de sécurité connectée conçue pour aider à protéger les enfants et accélérer la réponse d'urgence.",
    },
    overview: {
      en: "SIREN pairs a purpose-built connected device with a companion application so that a child in danger can raise an alert, and the people responsible for them can act on it immediately. It was developed as a functional prototype and selected through the APME Fonds Proto 2026 programme.",
      fr: "SIREN associe un dispositif connecté dédié à une application compagnon : un enfant en danger peut déclencher une alerte, et les personnes responsables peuvent agir immédiatement. Développé sous forme de prototype fonctionnel, il a été sélectionné dans le cadre du programme APME Fonds Proto 2026.",
    },
    status: "award",
    accent: { from: "#F280B0", to: "#72489D" },
    visual: "siren",
    span: "hero",
    highlights: [
      {
        title: { en: "Connected device", fr: "Dispositif connecté" },
        body: {
          en: "A physical object designed around how children actually live, move and play.",
          fr: "Un objet physique pensé pour la façon dont les enfants vivent, se déplacent et jouent réellement.",
        },
      },
      {
        title: { en: "Companion application", fr: "Application compagnon" },
        body: {
          en: "Alerts, context and status delivered to the people who can respond.",
          fr: "Alertes, contexte et statut transmis aux personnes capables d'intervenir.",
        },
      },
      {
        title: { en: "Recognised prototype", fr: "Prototype reconnu" },
        body: {
          en: "Selected through the APME Fonds Proto 2026 innovation programme.",
          fr: "Sélectionné dans le programme d'innovation APME Fonds Proto 2026.",
        },
      },
    ],
  },
  {
    slug: "sur-mezur",
    name: "Sur-MeZur",
    badge: {
      en: "AI × Fashion Technology",
      fr: "IA × Technologie de la mode",
    },
    description: {
      en: "AI-powered body measurement technology designed to modernize custom clothing and tailoring.",
      fr: "Une technologie de mesure corporelle par IA conçue pour moderniser le sur-mesure et la couture.",
    },
    overview: {
      en: "Sur-MeZur turns body measurement — still done by hand almost everywhere — into a fast, repeatable digital step. It gives tailors reliable measurements and gives customers a way to order custom clothing without a physical fitting.",
      fr: "Sur-MeZur transforme la prise de mesures — encore manuelle presque partout — en une étape numérique rapide et reproductible. Les couturiers obtiennent des mesures fiables, les clients commandent du sur-mesure sans essayage physique.",
    },
    status: "prototype",
    accent: { from: "#8F5CC4", to: "#F280B0" },
    visual: "surmezur",
    span: "wide",
    highlights: [
      {
        title: { en: "Measurement engine", fr: "Moteur de mesure" },
        body: {
          en: "Computer vision turns a capture into a structured set of measurements.",
          fr: "La vision par ordinateur transforme une capture en un jeu de mesures structuré.",
        },
      },
      {
        title: { en: "Built for tailors", fr: "Pensé pour les couturiers" },
        body: {
          en: "Designed around the way custom clothing is really ordered and made.",
          fr: "Conçu autour de la façon dont le sur-mesure est réellement commandé et fabriqué.",
        },
      },
      {
        title: { en: "Order to delivery", fr: "De la commande à la livraison" },
        body: {
          en: "Measurements, orders and production tracking in one flow.",
          fr: "Mesures, commandes et suivi de production dans un même flux.",
        },
      },
    ],
  },
  {
    slug: "kozapp",
    name: "Kozapp",
    badge: {
      en: "Positioning in definition",
      fr: "Positionnement en définition",
    },
    description: {
      en: "A product currently being defined inside the KORAH portfolio. Full positioning coming soon.",
      fr: "Un produit en cours de définition au sein du portefeuille KORAH. Positionnement complet à venir.",
    },
    overview: {
      en: "Kozapp is in the definition phase of the KORAH process — the stage where a problem has been identified and the product concept is being shaped before it is announced publicly.",
      fr: "Kozapp se trouve en phase de définition du processus KORAH — l'étape où un problème a été identifié et où le concept produit se construit avant son annonce publique.",
    },
    status: "in-definition",
    accent: { from: "#72489D", to: "#8F5CC4" },
    visual: "kozapp",
    span: "standard",
    highlights: [],
    // TODO(korah): replace badge / description / overview with the official wording.
    copyPending: true,
  },
  {
    slug: "agevoice",
    name: "AgeVoice",
    badge: {
      en: "Voice AI",
      fr: "IA vocale",
    },
    description: {
      en: "AI technology exploring age estimation through voice.",
      fr: "Une technologie d'IA explorant l'estimation de l'âge à partir de la voix.",
    },
    overview: {
      en: "AgeVoice is a research track exploring what a voice signal can reveal about age, and where that capability could be useful — from access control to service personalisation. It is an exploration, not yet a launched product.",
      fr: "AgeVoice est un axe de recherche explorant ce qu'un signal vocal peut révéler de l'âge, et les usages possibles — du contrôle d'accès à la personnalisation de services. Il s'agit d'une exploration, pas encore d'un produit lancé.",
    },
    status: "research",
    accent: { from: "#F280B0", to: "#FF9CC6" },
    visual: "agevoice",
    span: "standard",
    highlights: [
      {
        title: { en: "Signal research", fr: "Recherche sur le signal" },
        body: {
          en: "Understanding what voice can and cannot reliably indicate.",
          fr: "Comprendre ce que la voix peut — et ne peut pas — indiquer de façon fiable.",
        },
      },
      {
        title: { en: "Responsible by design", fr: "Responsable par conception" },
        body: {
          en: "Consent, accuracy limits and use-case boundaries studied alongside the model.",
          fr: "Consentement, limites de précision et périmètre d'usage étudiés avec le modèle.",
        },
      },
    ],
  },
  {
    slug: "green",
    name: "Green",
    badge: {
      en: "Positioning in definition",
      fr: "Positionnement en définition",
    },
    description: {
      en: "A product currently being defined inside the KORAH portfolio. Full positioning coming soon.",
      fr: "Un produit en cours de définition au sein du portefeuille KORAH. Positionnement complet à venir.",
    },
    overview: {
      en: "Green is in the definition phase of the KORAH process — the stage where a problem has been identified and the product concept is being shaped before it is announced publicly.",
      fr: "Green se trouve en phase de définition du processus KORAH — l'étape où un problème a été identifié et où le concept produit se construit avant son annonce publique.",
    },
    status: "in-definition",
    accent: { from: "#4A2C68", to: "#72489D" },
    visual: "green",
    span: "standard",
    highlights: [],
    // TODO(korah): replace badge / description / overview with the official wording.
    copyPending: true,
  },
];

export const statusLabels: Record<ProductStatus, I18nText> = {
  award: { en: "Prototype · Innovation Award", fr: "Prototype · Prix d'innovation" },
  prototype: { en: "Functional prototype", fr: "Prototype fonctionnel" },
  research: { en: "Research", fr: "Recherche" },
  "in-definition": { en: "In definition", fr: "En définition" },
};

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productSlugs = products.map((p) => p.slug);

/**
 * Grid column span per product weight. Lives with the data (not with the card)
 * so server components can read it — a `"use client"` module's exports become
 * client references on the server.
 */
export const productSpanClass: Record<Product["span"], string> = {
  hero: "sm:col-span-2 lg:col-span-4",
  wide: "sm:col-span-2 lg:col-span-2",
  standard: "lg:col-span-2",
};
