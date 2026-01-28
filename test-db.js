import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Manually load .env.local because dotenv doesn't do it automatically for this specific file convention without config
const envPath = path.resolve(process.cwd(), '.env.local');
const envConfig = dotenv.parse(fs.readFileSync(envPath));

for (const k in envConfig) {
    process.env[k] = envConfig[k];
}

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

async function testConnection() {
    console.log("Probando conexión a Supabase...");
    console.log("URL:", process.env.SUPABASE_URL);

    const testData = {
        type: 'contact',
        name: 'Test Debugger',
        email: 'test@debug.com',
        message: 'Esta es una prueba de conexión desde la terminal.'
    };

    const { data, error } = await supabase
        .from('leads')
        .insert([testData])
        .select();

    if (error) {
        console.error("❌ ERROR DE CONEXIÓN O TABLA:");
        console.error(error);
    } else {
        console.log("✅ ¡ÉXITO! Se guardó el dato en la tabla 'leads'.");
        console.log("Data:", data);
    }
}

testConnection();
