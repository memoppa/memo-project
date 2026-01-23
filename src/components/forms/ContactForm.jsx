import React from 'react';
import { useForm } from '@formspree/react';
import { useForm as useHookForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FORMSPREE_CONFIG } from '../../config';

const ContactForm = () => {
    const [state, handleSubmit] = useForm(FORMSPREE_CONFIG.CONTACT_FORM_ID);
    const { register, handleSubmit: hookSubmit, formState: { errors } } = useHookForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        handleSubmit(data);
    };

    if (state.succeeded) {
        setTimeout(() => navigate('/gracias'), 500);
        return <div className="text-center p-4">Enviando mensaje...</div>;
    }

    return (
        <form onSubmit={hookSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

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

            <button type="submit" disabled={state.submitting} className="btn btn-outline" style={{ wiodth: '100%' }}>
                {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
        </form>
    );
};

export default ContactForm;
