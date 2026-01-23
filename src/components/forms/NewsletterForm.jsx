import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { useForm as useHookForm } from 'react-hook-form';
import { Send, Check } from 'lucide-react';
import { FORMSPREE_CONFIG } from '../../config';

const NewsletterForm = () => {
    const [state, handleSubmit] = useForm(FORMSPREE_CONFIG.NEWSLETTER_FORM_ID);
    const { register, handleSubmit: hookSubmit, formState: { errors } } = useHookForm();
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = (data) => {
        handleSubmit(data).then(() => {
            setShowSuccess(true);
        });
    };

    if (state.succeeded || showSuccess) {
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
        <form onSubmit={hookSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                    disabled={state.submitting}
                    className="btn btn-primary"
                    style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {state.submitting ? '...' : <Send size={18} />}
                </button>
            </div>
            {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>Email inválido</span>}
        </form>
    );
};

export default NewsletterForm;
