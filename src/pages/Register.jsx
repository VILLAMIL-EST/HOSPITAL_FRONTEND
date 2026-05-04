// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import { registerStyles } from '../styles/registerStyles'; // Importa los estilos

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        first_name: '',
        last_name: '',
        document_type: 'CC',
        document_number: '',
        role: 'paciente',
        phone: '',
        address: '',
        birth_date: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [focusedInput, setFocusedInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            await authService.register(formData);
            setSuccess('Registro exitoso. Ahora puedes iniciar sesión.');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al registrar usuario');
        } finally {
            setLoading(false);
        }
    };

    // Estilo dinámico para inputs con focus
    const getInputStyle = (inputName) => ({
        ...registerStyles.input,
        ...(focusedInput === inputName && registerStyles.inputFocus)
    });

    return (
    <div style={registerStyles.container}>
        <div style={registerStyles.Wrapper}>
            
            <div style={registerStyles.card}>                        
                <div style={registerStyles.cardHeader}>
                    <h3 style={registerStyles.title}>🏥 Registro de Usuario</h3>
                </div>
                
                <div style={registerStyles.cardBody}>
                    {error && <div style={registerStyles.errorAlert}>{error}</div>}
                    {success && <div style={registerStyles.successAlert}>{success}</div>}
                    
                    <form onSubmit={handleSubmit}>
                        {/* Fila 1: Usuario y Email */}
                        <div style={registerStyles.formRow}>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Usuario *</label>
                                <input
                                    type="text"
                                    name="username"
                                    style={getInputStyle('username')}
                                    value={formData.username}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('username')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    style={getInputStyle('email')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                        </div>

                        {/* Fila 2: Contraseña y Confirmar */}
                        <div style={registerStyles.formRow}>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Contraseña *</label>
                                <input
                                    type="password"
                                    name="password"
                                    style={getInputStyle('password')}
                                    value={formData.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('password')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Confirmar Contraseña *</label>
                                <input
                                    type="password"
                                    name="password2"
                                    style={getInputStyle('password2')}
                                    value={formData.password2}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('password2')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                        </div>

                        {/* Fila 3: Nombre y Apellido */}
                        <div style={registerStyles.formRow}>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Nombre *</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    style={getInputStyle('first_name')}
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('first_name')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Apellido *</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    style={getInputStyle('last_name')}
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('last_name')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                        </div>

                        {/* Fila 4: Tipo Documento, Documento y Teléfono */}
                        <div style={registerStyles.formRow}>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Tipo Documento</label>
                                <select
                                    name="document_type"
                                    style={registerStyles.select}
                                    value={formData.document_type}
                                    onChange={handleChange}
                                >
                                    <option value="CC">Cédula Ciudadanía</option>
                                    <option value="TI">Tarjeta Identidad</option>
                                    <option value="CE">Cédula Extranjería</option>
                                    <option value="RC">Registro Civil</option>
                                    <option value="PA">Pasaporte</option>
                                </select>
                            </div>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Documento *</label>
                                <input
                                    type="text"
                                    name="document_number"
                                    style={getInputStyle('document_number')}
                                    value={formData.document_number}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('document_number')}
                                    onBlur={() => setFocusedInput('')}
                                    required
                                />
                            </div>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Teléfono</label>
                                <input
                                    type="text"
                                    name="phone"
                                    style={getInputStyle('phone')}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput('')}
                                />
                            </div>
                        </div>

                        {/* Fila 5: Dirección y Fecha Nacimiento */}
                        <div style={registerStyles.formRow}>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Dirección</label>
                                <input
                                    type="text"
                                    name="address"
                                    style={getInputStyle('address')}
                                    value={formData.address}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('address')}
                                    onBlur={() => setFocusedInput('')}
                                />
                            </div>
                            <div style={registerStyles.formGroup}>
                                <label style={registerStyles.label}>Fecha Nacimiento</label>
                                <input
                                    type="date"
                                    name="birth_date"
                                    style={getInputStyle('birth_date')}
                                    value={formData.birth_date}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('birth_date')}
                                    onBlur={() => setFocusedInput('')}
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            style={{
                                ...registerStyles.button,
                                ...(hovered && !loading && registerStyles.buttonHover),
                                ...(loading && registerStyles.buttonDisabled)
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            disabled={loading}
                        >
                            {loading ? 'Registrando...' : 'Registrarse'}
                        </button>
                    </form>
                </div>
                
                <div style={registerStyles.cardFooter}>
                    <Link 
                        to="/login" 
                        style={registerStyles.link}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                        ¿Ya tienes cuenta? Inicia sesión aquí
                    </Link>
                </div>
            </div>
        </div>  {/* ← Cierre del Wrapper - IMPORTANTE */}
    </div>
);
};

export default Register;