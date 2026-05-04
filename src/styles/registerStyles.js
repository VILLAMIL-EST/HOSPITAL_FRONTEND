import * as styles from './GlobalStyles';

  
export const registerStyles = {

    container: styles.globalContainer,
    Wrapper: styles.globalwrapper,
    card: styles.GlobalCard,
    cardHeader: styles.GlobalCardHeader,    
    title: styles.GlobalTitle,
    subtitle: styles.GlobalSubtitle,
    cardBody: styles.cardBody,
    cardFooter: styles.cardFooter,
    errorAlert: styles.errorAlert,        
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
    label: styles.label,
    input: styles.input,
    select: {
        ...styles.input,        
        cursor: 'pointer',      
        appearance: 'none', 
    },
    inputDate: {
        ...styles.input,
        colorScheme: 'light',          
    },
    button: styles.button,
    buttonHover: styles.buttonHover,    
    buttonDisabled: styles.buttonDisabled,
    link: styles.link,
    linkHover: styles.linkHover,
    
}
