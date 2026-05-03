import fondoLogin from '../assets/backgrounds/LOGIN_FOND.jpg';

export const loginStyles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${fondoLogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        overflow: 'auto', 
        filter: 'brightness(1)',          
    },  
    overlay: {
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'linear-gradient(110deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '80px',
    },
    
  card: {
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: 'radial-gradient(circle at 90% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 100%)',
        overflow: 'hidden',
        animation: 'fadeInUp 0.5s ease',

    },
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
    subtitle: {
        margin: '8px 0 0 0',
        fontSize: '16px',
        opacity: 0.9,
    },
    cardBody: {
        padding: '30px',
    },
    label: {
        fontWeight: 500,
        marginBottom: '5px',
        display: 'block',
        color: '#000000',
    },
    input: {
        borderRadius: '20px',
        border: '1px solid #000dff',
        padding: '10px 12px',
        width: '100%',
        transition: 'all 0.5s ease',
    },
    inputFocus: {
        borderColor: '#3271d0',
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(13,110,253,0.1)',
    },
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
    cardFooter: {
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #eee',
    },
    link: {
        color: '#000dff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    linkHover: {
        color: '#000dff',
        textDecoration: 'underline',
    },
    errorAlert: {
        backgroundColor: '#f8d7da',
        color: '#ff0e22',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #f5c2c7',
    },
};

// Animaciones globales
export const globalStyles = `
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