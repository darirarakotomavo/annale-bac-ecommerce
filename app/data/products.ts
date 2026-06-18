import type { Product, OrderStep } from "../types";

export const products: Product[] = [
  {
    id: "maths",
    name: "Mathématiques",
    subject: "Maths",
    description: "Corrigé complet de l'épreuve de Mathématiques",
    price: 8,
    pages: 10,
    icon: "📐",
    features: [
      "3 exercices + 2 problèmes",
      "Solutions détaillées",
      "Format PDF prêt à imprimer",
    ],
  },
  {
    id: "physique",
    name: "Sciences Physiques",
    subject: "Physique",
    description: "Corrigé complet de l'épreuve de Sciences Physiques",
    price: 8,
    pages: 9,
    icon: "⚡",
    features: [
      "5 exercices corrigés",
      "Solutions détaillées",
      "Format PDF prêt à imprimer",
    ],
  },
  {
    id: "pack",
    name: "Pack Complet",
    subject: "Maths + Physique",
    description: "Les deux matières pour réussir le Bac",
    price: 12,
    pages: 19,
    icon: "🎯",
    isPopular: true,
    features: [
      "Mathématiques + Physique",
      "19 pages de corrigés",
      "Économisez 4 €",
    ],
  },
  {
    id: "code-source",
    name: "Code Source LaTeX",
    subject: "Enseignant",
    description: "Code source complet des corrigés",
    price: 25,
    pages: 0,
    icon: "📦",
    isEnseignant: true,
    features: [
      "Code source complet",
      "Sujets + Corrigés",
      "Modifiable à volonté",
      "Accès au dépôt privé",
    ],
  },
];

export const orderSteps: OrderStep[] = [
  {
    id: 1,
    title: "Choisissez votre produit",
    description: "Sélectionnez le pack qui vous convient",
  },
  {
    id: 2,
    title: "Paiement Orange Money",
    description: "Envoyez le montant sur le numéro ci-dessous",
  },
  {
    id: 3,
    title: "Confirmation par email",
    description: "Envoyez vos informations pour la livraison",
  },
  {
    id: 4,
    title: "Recevez vos fichiers",
    description: "Dans les 24h, vos corrigés vous sont envoyés",
  },
];
