import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SponsorForm = () => {
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
                    type: 'sponsor',
                    data: data
                })
            });

            if (!response.ok) throw new Error('Network response was not ok');

            // Redirect on success
            setTimeout(() => navigate('/gracias'), 500);
        } catch (error) {
            console.error("Form error:", error);
            setSubmissionError("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Nombre / Empresa *</label>
                <input
                    {...register("name", { required: "El nombre es obligatorio" })}
                    type="text"
                    style={{
                        width: '100%', padding: '12px', borderRadius: '8px',
                        border: errors.name ? '1px solid #ef4444' : '1px solid #444',
                        background: '#111', color: 'white'
                    }}
                    placeholder="Tu nombre o empresa"
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name.message}</span>}
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Email de contacto *</label>
                <input
                    {...register("email", {
                        required: "El email es obligatorio",
                        pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
                    })}
                    type="email"
                    style={{
                        width: '100%', padding: '12px', borderRadius: '8px',
                        border: errors.email ? '1px solid #ef4444' : '1px solid #444',
                        background: '#111', color: 'white'
                    }}
                    placeholder="ejemplo@empresa.com"
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.email.message}</span>}
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Tipo de Colaboración</label>
                <select
                    {...register("type")}
                    style={{
                        width: '100%', padding: '12px', borderRadius: '8px',
                        border: '1px solid #444', background: '#111', color: 'white'
                    }}
                >
                    <option value="Patrocinio Deportivo">Patrocinio Deportivo</option>
                    <option value="Alianza de Producto">Alianza de Producto</option>
                    <option value="Contenido / Media">Contenido / Media</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Mensaje *</label>
                <textarea
                    {...register("message", { required: "Cuéntanos un poco más" })}
                    rows="4"
                    style={{
                        width: '100%', padding: '12px', borderRadius: '8px',
                        border: errors.message ? '1px solid #ef4444' : '1px solid #444',
                        background: '#111', color: 'white'
                    }}
                    placeholder="Cuéntanos qué tienes en mente"
                ></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.message.message}</span>}
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                <input
                    type="checkbox"
                    {...register("privacy", { required: "Debes aceptar la política de privacidad" })}
                    style={{ marginTop: '4px' }}
                />
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Acepto que Memo Project use mis datos para contactarme. <a href="#" style={{ color: 'var(--accent-color)' }}>Leer privacidad</a>.
                </label>
            </div>
            {errors.privacy && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.privacy.message}</span>}

            {submissionError && <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>{submissionError}</div>}

            <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ width: '100%', opacity: submitting ? 0.7 : 1 }}
            >
                {submitting ? 'Enviando...' : 'Enviar Propuesta'}
            </button>
        </form>
    );
};

export default SponsorForm;
