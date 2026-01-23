import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useForm as useHookForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FORMSPREE_CONFIG } from '../../config';

const SponsorForm = () => {
    const [state, handleSubmit] = useForm(FORMSPREE_CONFIG.SPONSOR_FORM_ID);
    const { register, handleSubmit: hookSubmit, formState: { errors } } = useHookForm();
    const navigate = useNavigate();

    // Custom submit handler to validate first with Hook Form, then send to Formspree
    const onSubmit = (data) => {
        // We pass the data to Formspree's handler
        handleSubmit(data);
    };

    if (state.succeeded) {
        // Redirect to Thank You page on success
        setTimeout(() => navigate('/gracias'), 500);
        return <div className="text-center p-4">Enviando...</div>;
    }

    return (
        <form onSubmit={hookSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Honeypot for simple spam protection */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

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
                <ValidationError prefix="Email" field="email" errors={state.errors} />
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

            <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-primary"
                style={{ width: '100%', opacity: state.submitting ? 0.7 : 1 }}
            >
                {state.submitting ? 'Enviando...' : 'Enviar Propuesta'}
            </button>
        </form>
    );
};

export default SponsorForm;
