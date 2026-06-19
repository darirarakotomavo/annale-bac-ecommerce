import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

// Charger .env.local si la variable n'est pas déjà définie
if (!process.env.MONGODB_URI) {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf8');
            const envVars = Object.fromEntries(
                envContent
                    .split('\n')
                    .filter(line => line && !line.startsWith('#'))
                    .map(line => line.split('=').map(s => s.trim()))
            );
            process.env.MONGODB_URI = envVars.MONGODB_URI;
        }
    } catch (_) {
        // Ignorer les erreurs de lecture du fichier
    }
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Déclarer le type global pour le cache
declare global {
    // eslint-disable-next-line no-var
    var mongoose: {
        conn: mongoose.Connection | null;
        promise: Promise<mongoose.Connection> | null;
    };
}

// Initialiser le cache global
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<mongoose.Connection> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then((mongoose) => mongoose.connection);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}

export default connectToDatabase;