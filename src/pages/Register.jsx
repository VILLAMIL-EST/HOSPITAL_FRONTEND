import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';

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

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>🏥 Registro de Usuario</h3>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Usuario *</label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Contraseña *</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Confirmar Contraseña *</label>
                                        <input
                                            type="password"
                                            name="password2"
                                            className="form-control"
                                            value={formData.password2}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Nombre *</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            className="form-control"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Apellido *</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            className="form-control"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Tipo Documento</label>
                                        <select
                                            name="document_type"
                                            className="form-control"
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
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Documento *</label>
                                        <input
                                            type="text"
                                            name="document_number"
                                            className="form-control"
                                            value={formData.document_number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Teléfono</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Dirección</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Fecha Nacimiento</label>
                                        <input
                                            type="date"
                                            name="birth_date"
                                            className="form-control"
                                            value={formData.birth_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {loading ? 'Registrando...' : 'Registrarse'}
                                </button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <Link to="/login">¿Ya tienes cuenta? Inicia sesión aquí</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;