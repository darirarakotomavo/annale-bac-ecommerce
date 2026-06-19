import fs from "fs";
import path from "path";
import { Product } from "./models/Product";
import { connectToDatabase } from "./lib/mongodb";

// Charger .env.local manuellement
const envPath = path.resolve(process.cwd(), ".env.local");
if (!fs.existsSync(envPath)) {
  console.error(`❌ Fichier .env.local introuvable : ${envPath}`);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf8");
const envVars = Object.fromEntries(
  envContent
    .split("\n")
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => line.split("=").map((s) => s.trim()))
);

process.env.MONGODB_URI = envVars.MONGODB_URI;

if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI non défini dans .env.local");
  process.exit(1);
}

console.log("✅ Variables d'environnement chargées");

// Données des produits
const productsData = [
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

async function seed() {
  console.log("🔗 Connexion à MongoDB...");
  try {
    await connectToDatabase();

    console.log("🗑️ Suppression des anciens produits...");
    await Product.deleteMany({});

    console.log("📦 Insertion des nouveaux produits...");
    const products = await Product.insertMany(productsData);

    console.log(`✅ ${products.length} produits insérés avec succès !`);
    console.log("📋 Liste des produits :");
    products.forEach((p) => {
      console.log(`  - ${p.icon} ${p.name} (${p.price} €)`);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur lors du seed :", error);
    process.exit(1);
  }
}

seed();
