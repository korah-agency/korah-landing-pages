import type { Locale } from "@/i18n/config";
import type { I18nText } from "./site";

/**
 * Legal pages.
 *
 * The wording below describes exactly what this site does today: one contact
 * form, one partnership form, first-party event counting, and no advertising or
 * cross-site tracking. It is written to be accurate, not to be exhaustive —
 * have it reviewed by counsel before KORAH starts processing anything else.
 */

export type LegalSection = { heading: I18nText; body: I18nText[] };

export type LegalDocument = {
  slug: "privacy" | "terms" | "cookies";
  title: I18nText;
  intro: I18nText;
  sections: LegalSection[];
};

/** Update whenever the text below changes. */
export const legalUpdated = "2026-09-01";

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: { en: "Privacy Policy", fr: "Politique de confidentialité" },
    intro: {
      en: "This policy explains what KORAH collects through korah.tech, why, and what you can ask us to do about it.",
      fr: "Cette politique explique ce que KORAH collecte via korah.tech, pourquoi, et ce que vous pouvez nous demander à ce sujet.",
    },
    sections: [
      {
        heading: { en: "What we collect", fr: "Ce que nous collectons" },
        body: [
          {
            en: "When you submit the contact or partnership form we receive the details you type — your name, email address, organisation, the subject you select and your message — together with your IP address and browser user-agent, which we keep to detect abuse.",
            fr: "Lorsque vous envoyez le formulaire de contact ou de partenariat, nous recevons les informations que vous saisissez — nom, adresse email, organisation, sujet sélectionné et message — ainsi que votre adresse IP et le user-agent de votre navigateur, conservés pour détecter les abus.",
          },
          {
            en: "We also count anonymous interface events — which call-to-action was clicked, which product page was opened, which language was selected, how far a page was scrolled. These events carry no identifier and are not linked to you.",
            fr: "Nous comptons également des événements d'interface anonymes — quel appel à l'action a été cliqué, quelle page produit a été ouverte, quelle langue a été choisie, jusqu'où la page a été parcourue. Ces événements ne contiennent aucun identifiant et ne vous sont pas rattachés.",
          },
        ],
      },
      {
        heading: { en: "Why we collect it", fr: "Pourquoi nous le collectons" },
        body: [
          {
            en: "Form submissions are used for one purpose: to reply to you and to follow up on the conversation you started. Event counts are used to understand which parts of the site are useful.",
            fr: "Les envois de formulaire servent à une seule chose : vous répondre et poursuivre la conversation que vous avez initiée. Les compteurs d'événements servent à comprendre quelles parties du site sont utiles.",
          },
          {
            en: "We do not sell your data, we do not share it with advertisers, and we do not use it to build a profile of you.",
            fr: "Nous ne vendons pas vos données, nous ne les partageons pas avec des annonceurs et nous ne les utilisons pas pour établir un profil vous concernant.",
          },
        ],
      },
      {
        heading: { en: "How long we keep it", fr: "Durée de conservation" },
        body: [
          {
            en: "Form submissions are kept for as long as the conversation is relevant, and no longer than 36 months after our last exchange. Anonymous event counts are kept in aggregate.",
            fr: "Les envois de formulaire sont conservés tant que la conversation reste pertinente, et au maximum 36 mois après notre dernier échange. Les compteurs d'événements anonymes sont conservés de façon agrégée.",
          },
        ],
      },
      {
        heading: { en: "Your rights", fr: "Vos droits" },
        body: [
          {
            en: "You can ask us to send you a copy of what we hold about you, correct it, or delete it. Write to contact@korah.tech and we will act on the request.",
            fr: "Vous pouvez nous demander une copie des données vous concernant, leur correction ou leur suppression. Écrivez à contact@korah.tech et nous donnerons suite à la demande.",
          },
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: { en: "Terms", fr: "Conditions" },
    intro: {
      en: "These terms cover the use of korah.tech. They do not cover the individual KORAH products, each of which carries its own terms.",
      fr: "Ces conditions couvrent l'utilisation de korah.tech. Elles ne couvrent pas les produits KORAH, chacun disposant de ses propres conditions.",
    },
    sections: [
      {
        heading: { en: "The content of this site", fr: "Le contenu de ce site" },
        body: [
          {
            en: "This site presents KORAH, its approach and the products it is building. Product descriptions reflect their status at the time of writing; several are prototypes or research tracks and their scope may change.",
            fr: "Ce site présente KORAH, sa démarche et les produits qu'elle construit. Les descriptions produits reflètent leur statut au moment de la rédaction ; plusieurs sont des prototypes ou des axes de recherche dont le périmètre peut évoluer.",
          },
          {
            en: "Nothing on this site is an offer to invest, a solicitation, or a promise of any financial return.",
            fr: "Aucun élément de ce site ne constitue une offre d'investissement, une sollicitation ou une promesse de rendement financier.",
          },
        ],
      },
      {
        heading: { en: "Intellectual property", fr: "Propriété intellectuelle" },
        body: [
          {
            en: "The KORAH name, logo, product names and the design of this site belong to KORAH. Please ask before reusing them.",
            fr: "Le nom KORAH, le logo, les noms de produits et le design de ce site appartiennent à KORAH. Merci de nous solliciter avant toute réutilisation.",
          },
        ],
      },
      {
        heading: { en: "Contact", fr: "Contact" },
        body: [
          {
            en: "Questions about these terms: contact@korah.tech.",
            fr: "Questions relatives à ces conditions : contact@korah.tech.",
          },
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: { en: "Cookies", fr: "Cookies" },
    intro: {
      en: "This site is deliberately light on cookies. Here is the complete list.",
      fr: "Ce site utilise volontairement très peu de cookies. En voici la liste complète.",
    },
    sections: [
      {
        heading: { en: "What we set", fr: "Ce que nous déposons" },
        body: [
          {
            en: "korah_locale — remembers whether you chose English or French, so that returning to korah.tech takes you to the right version. It lasts one year and contains nothing but a two-letter language code.",
            fr: "korah_locale — retient si vous avez choisi l'anglais ou le français, afin de vous ramener à la bonne version. Il dure un an et ne contient qu'un code de langue à deux lettres.",
          },
        ],
      },
      {
        heading: { en: "What we do not set", fr: "Ce que nous ne déposons pas" },
        body: [
          {
            en: "No advertising cookies, no cross-site trackers, no third-party analytics identifiers. Interface events are counted without a cookie and without an identifier.",
            fr: "Aucun cookie publicitaire, aucun traceur inter-sites, aucun identifiant d'analyse tiers. Les événements d'interface sont comptés sans cookie et sans identifiant.",
          },
        ],
      },
      {
        heading: { en: "Controlling cookies", fr: "Gérer les cookies" },
        body: [
          {
            en: "You can clear or block cookies in your browser settings. Blocking korah_locale only means the site will pick a language from your browser preferences on each visit.",
            fr: "Vous pouvez effacer ou bloquer les cookies dans les réglages de votre navigateur. Bloquer korah_locale signifie simplement que le site choisira la langue selon les préférences de votre navigateur à chaque visite.",
          },
        ],
      },
    ],
  },
];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((doc) => doc.slug === slug);
}

export function legalUpdatedLabel(locale: Locale): string {
  const date = new Date(legalUpdated);
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
