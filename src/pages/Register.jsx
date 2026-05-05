import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import { registerStyles } from '../styles/registerStyles';

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
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [touchedPassword, setTouchedPassword] = useState(false);
    const navigate = useNavigate();

    // Función para validar contraseña
    const validatePassword = (password) => {
        const errors = [];
        
        if (password.length > 0 && password.length < 8) {
            errors.push("❌ Mínimo 8 caracteres");
        } else if (password.length >= 8) {
            errors.push("✅ Mínimo 8 caracteres");
        }
        
        if (password.length > 0 && !/[A-Z]/.test(password)) {
            errors.push("❌ Al menos una mayúscula (A-Z)");
        } else if (password.length > 0 && /[A-Z]/.test(password)) {
            errors.push("✅ Al menos una mayúscula");
        }
        
        if (password.length > 0 && !/[a-z]/.test(password)) {
            errors.push("❌ Al menos una minúscula (a-z)");
        } else if (password.length > 0 && /[a-z]/.test(password)) {
            errors.push("✅ Al menos una minúscula");
        }
        
        if (password.length > 0 && !/\d/.test(password)) {
            errors.push("❌ Al menos un número (0-9)");
        } else if (password.length > 0 && /\d/.test(password)) {
            errors.push("✅ Al menos un número");
        }
        
        if (password.length > 0 && /\s/.test(password)) {
            errors.push("❌ Sin espacios");
        } else if (password.length > 0 && !/\s/.test(password)) {
            errors.push("✅ Sin espacios");
        }
        
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        // Validar contraseña en tiempo real
        if (name === 'password') {
            setPasswordErrors(validatePassword(value));
        }
    };

    const handlePasswordFocus = () => {
        setTouchedPassword(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

            // Validar que el teléfono no esté vacío
        if (!formData.phone) {
            setError('❌ El número de teléfono es obligatorio');
            return;
        }
        
        // Validar que el teléfono tenga 10 dígitos
        const phoneClean = formData.phone.replace(/[\s\-\(\)]/g, '');
        if (phoneClean.length !== 10 || !/^\d+$/.test(phoneClean)) {
            setError('❌ El teléfono debe tener exactamente 10 dígitos numéricos');
            return;
        }
        
        // Validar contraseña antes de enviar
        const hasErrors = passwordErrors.some(error => error.includes('❌'));
        
        if (hasErrors) {
            setError('❌ Corrige los errores de la contraseña antes de continuar');
            setLoading(false);
            return;
        }
        
        // Validar que coincidan las contraseñas
        if (formData.password !== formData.password2) {
            setError('❌ Las contraseñas no coinciden');
            setLoading(false);
            return;
        }
        
        setLoading(true);

        try {
            const response = await authService.register(formData);
    
            if (response.data.message) {
                setSuccess('✅ ' + response.data.message);
            } else {
                setSuccess('✅ Registro exitoso. Revisa tu correo para verificar tu cuenta.');
            }
            
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (err) {
            const errorMsg = err.response?.data?.error || 
                            err.response?.data?.message || 
                            'Error al registrar usuario';
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={registerStyles.container}>
            <div style={registerStyles.Wrapper}>
                <div style={registerStyles.card}>                        
                    <div style={registerStyles.cardHeader}>
                        <h3 style={registerStyles.title}>REGISTRO DE USUARIOS</h3>
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
                                        style={registerStyles.input}
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={registerStyles.formGroup}>
                                    <label style={registerStyles.label}>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        style={registerStyles.input}
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        style={registerStyles.input}
                                        value={formData.password}
                                        onChange={handleChange}
                                        onFocus={handlePasswordFocus}
                                        required
                                    />
                                    {/* Cuadro informativo de requisitos */}
                                    {!touchedPassword && (
                                        <div style={{
                                            marginTop: '10px',
                                            padding: '10px',
                                            backgroundColor: '#f8f9fa',
                                            border: '1px solid #dee2e6',
                                            borderRadius: '8px',
                                            fontSize: '12px'
                                        }}>
                                            <strong style={{ color: '#000dff' }}>🔒 Requisitos de la contraseña:</strong>
                                            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                                                <li>• Mínimo 8 caracteres</li>
                                                <li>• Al menos una mayúscula (A-Z)</li>
                                                <li>• Al menos una minúscula (a-z)</li>
                                                <li>• Al menos un número (0-9)</li>
                                                <li>• Sin espacios</li>
                                            </ul>
                                        </div>
                                    )}
                                    {/* Mensajes de validación en tiempo real */}
                                    {touchedPassword && passwordErrors.length > 0 && (
                                        <div style={{ marginTop: '8px', fontSize: '12px' }}>
                                            {passwordErrors.map((error, index) => (
                                                <div key={index} style={{
                                                    color: error.includes('✅') ? '#28a745' : '#dc3545',
                                                    marginBottom: '4px'
                                                }}>
                                                    {error}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {touchedPassword && formData.password.length >= 8 && passwordErrors.length === 0 && formData.password && (
                                        <div style={{ marginTop: '8px', fontSize: '12px', color: '#28a745' }}>
                                            🔒 Contraseña segura
                                        </div>
                                    )}
                                </div>
                                <div style={registerStyles.formGroup}>
                                    <label style={registerStyles.label}>Confirmar Contraseña *</label>
                                    <input
                                        type="password"
                                        name="password2"
                                        style={registerStyles.input}
                                        value={formData.password2}
                                        onChange={handleChange}
                                        required
                                    />
                                    {formData.password2 && formData.password !== formData.password2 && (
                                        <div style={{ marginTop: '8px', fontSize: '12px', color: '#dc3545' }}>
                                            ❌ Las contraseñas no coinciden
                                        </div>
                                    )}
                                    {formData.password2 && formData.password === formData.password2 && formData.password && (
                                        <div style={{ marginTop: '8px', fontSize: '12px', color: '#28a745' }}>
                                            ✅ Las contraseñas coinciden
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Fila 3: Nombre y Apellido */}
                            <div style={registerStyles.formRow}>
                                <div style={registerStyles.formGroup}>
                                    <label style={registerStyles.label}>Nombre/s *</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        style={registerStyles.input}
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={registerStyles.formGroup}>
                                    <label style={registerStyles.label}>Apellido/s *</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        style={registerStyles.input}
                                        value={formData.last_name}
                                        onChange={handleChange}
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
                                        style={registerStyles.input}
                                        value={formData.document_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={registerStyles.formGroup}>
                                    <label style={registerStyles.label}>Teléfono *</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        style={registerStyles.input}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
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
                                        style={registerStyles.input}
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={registerStyles.formGroup}>
                                    <label style={registerStyles.label}>Fecha Nacimiento</label>
                                    <input
                                        type="date"
                                        name="birth_date"
                                        style={registerStyles.inputDate}
                                        value={formData.birth_date}
                                        onChange={handleChange}
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
            </div>
        </div>
    );
};

export default Register;