import { globalContainer } from './GlobalStyles';
import { globalwrapper } from './GlobalStyles';
// src/styles/registerStyles.js

export const registerStyles = {

    container: globalContainer,
    Wrapper: globalwrapper,
    // Tarjeta principal
    card: {
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 25px 45px -12px rgba(0, 0, 0, 0.3), 0 8px 18px -8px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '900px',
        animation: 'fadeInUp 0.5s ease',
    },
    
    // Header de la tarjeta
    cardHeader: {
        backgroundColor: '#000dff',
        color: 'white',
        padding: '25px',
        textAlign: 'center',
    },
    
    title: {
        margin: 0,
        fontSize: '24px',
        fontWeight: 'bold',
    },
    
    // Body de la tarjeta
    cardBody: {
        padding: '30px',
    },
    
    // Footer de la tarjeta
    cardFooter: {
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #eee',
    },
    
    // Alertas
    errorAlert: {
        backgroundColor: '#f8d7da',
        color: '#ff0e22',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #f5c2c7',
    },
    
    successAlert: {
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #c3e6cb',
    },
    
    // Fila del formulario
    formRow: {
        display: 'flex',
        gap: '20px',
        marginBottom: '15px',
        flexWrap: 'wrap',
    },
    
    // Grupo de formulario
    formGroup: {
        flex: 1,
        minWidth: '200px',
    },
    
    // Columnas para grid
    colMd6: {
        width: 'calc(50% - 10px)',
        marginBottom: '15px',
    },
    
    colMd4: {
        width: 'calc(33.33% - 14px)',
        marginBottom: '15px',
    },
    
    col12: {
        width: '100%',
        marginBottom: '15px',
    },
    
    // Labels
    label: {
        fontWeight: 500,
        marginBottom: '8px',
        display: 'block',
        color: '#333',
    },
    
    // Inputs
    input: {
        width: '100%',
        padding: '10px 12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        boxSizing: 'border-box',
    },
    
    inputFocus: {
        borderColor: '#000dff',
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(0, 13, 255, 0.1)',
    },
    
    // Select
    select: {
        width: '100%',
        padding: '10px 12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '14px',
        backgroundColor: 'white',
        cursor: 'pointer',
        boxSizing: 'border-box',
    },
    
    // Botón
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#000dff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginTop: '10px',
    },
    
    buttonHover: {
        backgroundColor: '#0b5ed7',
        transform: 'translateY(-2px)',
    },
    
    buttonDisabled: {
        backgroundColor: '#6c757d',
        cursor: 'not-allowed',
    },
    
    // Enlace
    link: {
        color: '#000dff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    
    linkHover: {
        color: '#000dff',
        textDecoration: 'underline',
    },
};

// Animaciones
export const registerAnimations = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;