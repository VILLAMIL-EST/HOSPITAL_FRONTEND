import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await authService.getProfile();
                setUser(response.data);
            } catch (error) {
                console.error('Error al cargar perfil:', error);
                localStorage.removeItem('access_token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">🏥 Hospital El Salvador de Ubaté</h4>
                        </div>
                        <div className="card-body">
                            <h5>Bienvenido, {user?.first_name} {user?.last_name}</h5>
                            <hr />
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">📋 Información Personal</h6>
                                            <p><strong>Usuario:</strong> {user?.username}</p>
                                            <p><strong>Email:</strong> {user?.email}</p>
                                            <p><strong>Documento:</strong> {user?.document_type} {user?.document_number}</p>
                                            <p><strong>Teléfono:</strong> {user?.phone || 'No registrado'}</p>
                                            <p><strong>Dirección:</strong> {user?.address || 'No registrada'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">🎫 Estado de Verificación</h6>
                                            <p className="mb-3">
                                                {user?.verification_status === 'verified' && (
                                                    <span className="badge bg-success">✓ Verificado</span>
                                                )}
                                                {user?.verification_status === 'pending' && (
                                                    <span className="badge bg-warning text-dark">⏳ Pendiente</span>
                                                )}
                                                {user?.verification_status === 'rejected' && (
                                                    <span className="badge bg-danger">✗ Rechazado</span>
                                                )}
                                            </p>
                                            <hr />
                                            <button 
                                                className="btn btn-outline-secondary w-100 mb-2"
                                                disabled
                                            >
                                                📅 Mis Citas (Próximamente)
                                            </button>
                                            <button 
                                                className="btn btn-outline-primary w-100 mb-2"
                                                disabled
                                            >
                                                📊 Ver Resultados (Próximamente)
                                            </button>
                                            <button 
                                                className="btn btn-outline-danger w-100"
                                                onClick={handleLogout}
                                            >
                                                🚪 Cerrar Sesión
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;