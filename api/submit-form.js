import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize clients (these env vars will be set in Vercel)
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { type, data } = req.body; // type: 'sponsor' | 'newsletter', data: form fields

    try {
        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from(type === 'newsletter' ? 'subscribers' : 'leads')
            .insert([data]);

        if (dbError) throw dbError;

        // 2. Send Email Notification (Admin Alert)
        if (type === 'sponsor' || type === 'contact') {
            await resend.emails.send({
                from: 'onboarding@resend.dev', // Default valid sender for testing
                to: process.env.ADMIN_EMAIL || 'tucorreo@ejemplo.com',
                subject: `Nuevo Lead: ${data.name || 'Suscriptor'}`,
                html: `<p>Nuevo contacto de tipo: <strong>${data.type || 'General'}</strong></p>
               <pre>${JSON.stringify(data, null, 2)}</pre>`
            });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
