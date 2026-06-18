import mongoose from "mongoose";
import { config } from "dotenv";
import { Product } from "../models/Product";
import { connectToDatabase } from "../lib/mongodb";

// Charger les variables d'environnement
config({ path: ".env.local" });

// ... le reste du code identique
