// src/pages/Dashboard.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import { dashboardStyles } from '../styles/DashboardStyles';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [isHovering, setIsHovering] = useState(false);    
    const [hoveredItem, setHoveredItem] = useState(null);
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

    const handleNavigate = (path) => {
        setShowMenu(false);
        if (path === 'citas') {
            alert('📅 Próximamente: Mis Citas');
        } else if (path === 'resultados') {
            alert('📊 Próximamente: Resultados Clínicos');
        } else if (path === 'perfil') {
            alert('👤 Próximamente: Mi Perfil');
        }
    };

    if (loading) {
        return (
            <div style={dashboardStyles.container1}>
                <div style={dashboardStyles.overlay}>
                    <div style={dashboardStyles.mainContent}>
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={dashboardStyles.container1}>
            <div style={dashboardStyles.overlay}>
                
                {/* Header */}
                <nav style={dashboardStyles.navbar}>
                    <span style={dashboardStyles.brand}>
                         HOSPITAL EL SALVADOR DE UBATÉ
                    </span>
                    
                    <div style={{ position: 'relative' }}>
                        <button
                            style={{
                                ...dashboardStyles.dropdownButton,
                                ...(isHovering && dashboardStyles.dropdownButtonHover)
                            }}
                            onClick={() => setShowMenu(!showMenu)}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            👤 {user?.first_name} {user?.last_name} ▼
                        </button>
                        
                        {showMenu && (
                            <div style={dashboardStyles.dropdownMenu}>
                                <button
                                    style={{
                                        ...dashboardStyles.dropdownItem,
                                        ...(hoveredItem === 'inicio' && dashboardStyles.dropdownItemHover)
                                    }}
                                    onMouseEnter={() => setHoveredItem('inicio')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => setShowMenu(false)}
                                >
                                    🏠 Panel Principal
                                </button>
                                <div style={dashboardStyles.dropdownDivider}></div>
                                <button
                                    style={{
                                        ...dashboardStyles.dropdownItem,
                                        ...(hoveredItem === 'citas' && dashboardStyles.dropdownItemHover)
                                    }}
                                    onMouseEnter={() => setHoveredItem('citas')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => handleNavigate('citas')}
                                >
                                    📅 Mis Citas
                                </button>
                                <button
                                    style={{
                                        ...dashboardStyles.dropdownItem,
                                        ...(hoveredItem === 'resultados' && dashboardStyles.dropdownItemHover)
                                    }}
                                    onMouseEnter={() => setHoveredItem('resultados')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => handleNavigate('resultados')}
                                >
                                    📊 Resultados Clínicos
                                </button>
                                <button
                                    style={{
                                        ...dashboardStyles.dropdownItem,
                                        ...(hoveredItem === 'perfil' && dashboardStyles.dropdownItemHover)
                                    }}
                                    onMouseEnter={() => setHoveredItem('perfil')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => handleNavigate('perfil')}
                                >
                                    👤 Mi Perfil
                                </button>
                                <div style={dashboardStyles.dropdownDivider}></div>
                                <button
                                    style={{
                                        ...dashboardStyles.dropdownItem,
                                        ...dashboardStyles.dropdownLogout,
                                        ...(hoveredItem === 'logout' && dashboardStyles.dropdownItemHover)
                                    }}
                                    onMouseEnter={() => setHoveredItem('logout')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={handleLogout}
                                >
                                    🚪 Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Contenido central */}
                <div style={dashboardStyles.mainContent}>
                    <div style={dashboardStyles.welcomeCard}>
                        <div style={dashboardStyles.welcomeCardHeader}>
                            <div style={dashboardStyles.welcomeTitle}>
                                ¡BIENVENIDO!
                            </div>
                            <div style={dashboardStyles.welcomeSubtitle}>
                                {user?.first_name} {user?.last_name}
                            </div>
                        </div>
                        <div style={dashboardStyles.welcomeCardBody}>
                            <div style={{ textAlign: 'center' }}>
                                <p>Accede a tus servicios desde el menú superior</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer style={dashboardStyles.footer}>
                    <div style={dashboardStyles.footerContent}>
                        <span style={dashboardStyles.footerItem}>📞 Emergencias: 123</span>
                        <span style={dashboardStyles.footerItem}>🕐 SIAU: L-V 7:00 AM - 7:00 PM</span>
                        <span style={dashboardStyles.footerItem}>📧 contacto@hospitalelsalvador.com</span>
                    </div>
                    <div style={dashboardStyles.footerCopyright}>
                        © 2026 Hospital El Salvador de Ubaté - Todos los derechos reservados
                    </div>
                </footer>
                
            </div>
        </div>
    );
};

export default Dashboard;