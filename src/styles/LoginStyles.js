import * as styles from './GlobalStyles';
export const loginStyles = {    
    container: styles.globalContainer,
    overlay: {
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'linear-gradient(110deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '80px',        
    },
    card: styles.GlobalCard,
    cardHeader: styles.GlobalCardHeader,
    title: styles.GlobalTitle,
    subtitle: styles.GlobalSubtitle,
    cardBody: styles.cardBody,
    label: styles.label,
    input: styles.input,
    button: styles.button,
    errorAlert: styles.errorAlert,
    cardFooter: styles.cardFooter,
    link: styles.link,
    linkHover: styles.linkHover,
    buttonDisabled: styles.buttonDisabled,
    buttonHover: styles.buttonHover,
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