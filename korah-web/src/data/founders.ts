import type { I18nText } from "./site";

export type Founder = {
  name: string;
  /** Two-letter monogram used by the card visual. */
  initials: string;
  role: I18nText;
  /** Short focus line — kept factual and role-based. */
  focus: I18nText;
  linkedin?: string;
};

export const founders: Founder[] = [
  {
    name: "Dimitri Tchouanang",
    initials: "DT",
    role: { en: "Chief Executive Officer", fr: "Directeur général" },
    focus: {
      en: "Product direction, partnerships and the long-term portfolio strategy.",
      fr: "Direction produit, partenariats et stratégie de portefeuille à long terme.",
    },
  },
  {
    name: "Ngapout Omar",
    initials: "NO",
    role: { en: "Chief Operating Officer", fr: "Directeur des opérations" },
    focus: {
      en: "Execution, programmes and how ideas become shipped products.",
      fr: "Exécution, programmes et transformation des idées en produits livrés.",
    },
  },
  {
    name: "Tankeu Aurelien",
    initials: "TA",
    role: { en: "Chief Technology Officer", fr: "Directeur technique" },
    focus: {
      en: "Engineering, AI systems and the technical foundations of every product.",
      fr: "Ingénierie, systèmes d'IA et fondations techniques de chaque produit.",
    },
  },
];

export const values: I18nText[] = [
  { en: "Innovation", fr: "Innovation" },
  { en: "Excellence", fr: "Excellence" },
  { en: "Impact", fr: "Impact" },
  { en: "Discipline", fr: "Discipline" },
  { en: "Work", fr: "Travail" },
];
