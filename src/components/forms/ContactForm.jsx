import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setSubmitting(true);
        setSubmissionError(null);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'contact',
                    data: data
                })
            });

            if (!response.ok) throw new Error('Network response was not ok');

            // Redirect on success
            setTimeout(() => navigate('/gracias'), 500);
        } catch (error) {
            console.error("Form error:", error);
            setSubmissionError("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Nombre</label>
                <input
                    {...register("name", { required: "Campo obligatorio" })}
                    type="text"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#111', color: 'white' }}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name.message}</span>}
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Email</label>
                <input
                    {...register("email", { required: "Campo obligatorio", pattern: /^\S+@\S+$/i })}
                    type="email"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#111', color: 'white' }}
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>Email inválido</span>}
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Motivo</label>
                <select
                    {...register("subject")}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#111', color: 'white' }}
                >
                    <option value="General">Consulta General</option>
                    <option value="Prensa/Medios">Prensa / Medios</option>
                    <option value="Eventos">Invitación a Eventos</option>
                </select>
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Mensaje</label>
                <textarea
                    {...register("message", { required: true })}
                    rows="4"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#111', color: 'white' }}
                ></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>Escribe un mensaje</span>}
            </div>

            {submissionError && <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>{submissionError}</div>}

            <button type="submit" disabled={submitting} className="btn btn-outline" style={{ wiodth: '100%' }}>
                {submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
        </form>
    );
};

export default ContactForm;
