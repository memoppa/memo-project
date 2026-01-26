import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Check } from 'lucide-react';

const NewsletterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitting, setSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (data) => {
        setSubmitting(true);
        try {
            // Encode data for Netlify
            const encode = (data) => {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                    .join("&");
            };

            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "newsletter", ...data })
            });

            setShowSuccess(true);
            setSubmitting(false);
        } catch (error) {
            console.error("Form error:", error);
            setSubmitting(false);
        }
    };

    if (showSuccess) {
        return (
            <div style={{
                padding: '20px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid #22c55e',
                borderRadius: '8px',
                color: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <Check size={20} />
                <span>¡Listo! Estás suscrito a los updates.</span>
            </div>
        );
    }

    return (
        <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
            <input type="hidden" name="form-name" value="newsletter" />

            {/* Honeypot */}
            <div hidden>
                <input name="bot-field" />
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Recibe avances reales del proyecto, competencias y camino internacional.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="Tu email"
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        border: errors.email ? '1px solid #ef4444' : '1px solid #444',
                        background: '#111',
                        color: 'white'
                    }}
                />
                <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary"
                    style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {submitting ? '...' : <Send size={18} />}
                </button>
            </div>
            {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>Email inválido</span>}
        </form>
    );
};

export default NewsletterForm;
