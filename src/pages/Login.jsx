// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import { loginStyles } from '../styles/loginStyles';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState({ username: false, password: false });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await authService.login({ username, password });
            const { access, user } = response.data;
            
            localStorage.setItem('access_token', access);
            localStorage.setItem('user', JSON.stringify(user));
            
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    const getInputStyle = (field) => ({
        ...loginStyles.input,
        ...(isFocused[field] && loginStyles.inputFocus),
    });

    return (
        <div style={loginStyles.container}>
            <div style={loginStyles.overlay}>
                
                            <div style={loginStyles.card} className="fade-in-up">
                                <div style={loginStyles.cardHeader}> 
                                    <h3 style={loginStyles.title}> TU SALUD CM</h3>
                                    <h5 style={loginStyles.subtitle}>Iniciar Sesión</h5>
                                </div>
                                <div style={loginStyles.cardBody}>
                                    {error && (
                                        <div style={loginStyles.errorAlert}>
                                            {error}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label style={loginStyles.label}>Usuario</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                style={getInputStyle('username')}
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                onFocus={() => setIsFocused({ ...isFocused, username: true })}
                                                onBlur={() => setIsFocused({ ...isFocused, username: false })}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label style={loginStyles.label}>Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                style={getInputStyle('password')}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setIsFocused({ ...isFocused, password: true })}
                                                onBlur={() => setIsFocused({ ...isFocused, password: false })}
                                                required
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            style={{
                                                ...loginStyles.button,
                                                ...(loading && loginStyles.buttonDisabled)
                                            }}
                                            className="btn-hover"
                                            disabled={loading}
                                        >
                                            {loading ? 'Cargando...' : 'Ingresar'}
                                        </button>
                                    </form>
                                </div>
                                <div style={loginStyles.cardFooter}>
                                    <Link 
                                        to="/register" 
                                        style={loginStyles.link}
                                        className="link-hover"
                                    >
                                        ¿No tienes cuenta? Regístrate aquí
                                    </Link>
                                </div>
                            </div>
                        
                    
                
            </div>
        </div>
    );  
};

export default Login;