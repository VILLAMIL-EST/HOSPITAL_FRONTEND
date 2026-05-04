// src/styles/DashboardStyles.js
import * as styles from '../styles/GlobalStyles';

export const dashboardStyles = {
    // Usando estilos globales
    container: styles.globalContainer,
    
    // Overlay específico del dashboard (diferente al login)
    overlay: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
    },
    
    // Header / Navbar
    navbar: {
        background: 'linear-gradient(90deg, #000dff 0%, #0055ff 100%)',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    
    brand: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        letterSpacing: '1px',
    },
    
    // Botón del menú desplegable
    dropdownButton: {
        backgroundColor: 'white',
        color: '#000dff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
    },
    
    dropdownButtonHover: {
        transform: 'scale(1.02)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    },
    
    // Menú desplegable
    dropdownMenu: {
        position: 'absolute',
        top: '60px',
        right: '30px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        minWidth: '220px',
        overflow: 'hidden',
        zIndex: 1000,
    },
    
    dropdownItem: {
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        fontSize: '14px',
        color: '#333',
        border: 'none',
        background: 'white',
        width: '100%',
        textAlign: 'left',
    },
    
    dropdownItemHover: {
        backgroundColor: '#f0f0f0',
    },
    
    dropdownDivider: {
        height: '1px',
        backgroundColor: '#e0e0e0',
        margin: '0',
    },
    
    dropdownLogout: {
        color: '#ff0e22',
    },
    
    // Contenido central
    mainContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
    },
    
    // Tarjeta de bienvenida (usando estilos globales)
    welcomeCard: styles.GlobalCard,
    welcomeCardHeader: styles.GlobalCardHeader,
    welcomeTitle: styles.GlobalTitle,
    welcomeSubtitle: styles.GlobalSubtitle,
    welcomeCardBody: styles.cardBody,
    
    // Footer
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        fontSize: '13px',
    },
    
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px',
    },
    
    footerItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    
    footerCopyright: {
        marginTop: '15px',
        fontSize: '11px',
        opacity: 0.7,
    },
};