import fondoLogin from '../assets/backgrounds/LOGIN_FOND.jpg';
export const globalContainer = {
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
}
export const globalwrapper= {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',      // ← Centra verticalmente
        justifyContent: 'center',  // ← Centra horizontalmente
        padding: '20px',
        boxSizing: 'border-box',
}
export const GlobalCard= {
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: 'radial-gradient(circle at 90% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 100%)',
        overflow: 'hidden',
        animation: 'fadeInUp 0.5s ease',
}
export const GlobalCardHeader = {
        backgroundColor: '#000dff',
        color: 'white',
        padding: '25px',
        textAlign: 'center',
}
export const GlobalTitle = {
    fontSize: '24px',
    margin: 0,
    fontWeight: 'bold',
}
export const GlobalSubtitle = {
    margin: '8px 0 0 0',
    fontSize: '16px',
    opacity: 0.9,       
}
export const cardBody = {
        padding: '30px',
}
export const cardFooter = {
        padding: '20px',
        textAlign: 'center',   
        borderTop: '1px solid #eee', 
}
export const label = {
        fontWeight: 500,
        marginBottom: '5px',
        display: 'block',
        color: '#000000',
}
export const input = {
        borderRadius: '20px',
        border: '1px solid #000dff',
        padding: '10px 12px',
        width: '100%',
        transition: 'all 0.5s ease',
        outline: 'none',
        backgroundColor: '#ffffff',
        color: '#000000',        // ← Esto es lo que falta (texto negro)
        cursor: 'text',          // ← Cursor tipo I
        caretColor: '#000dff',
        WebkitBoxShadow: '0 0 0 1000px white inset !important',
        boxShadow: '0 0 0 1000px white inset !important',
}
export const button = {
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
}
export const errorAlert = {
        backgroundColor: '#f8d7da',
        color: '#ff0e22',       
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #f5c2c7',
}
export const link = {
        color: '#000dff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
}
export const linkHover = {
        color: '#000dff',
        textDecoration: 'underline',
}       
export const buttonHover = {
        backgroundColor: '#0b5ed7',
        transform: 'translateY(-2px)',
}       
export const buttonDisabled = {
        backgroundColor: '#6c757d',
        cursor: 'not-allowed',
}               
export const select = {
        width: '100%',
        padding: '10px 12px',
        border: '1px solid #000dff',  // ← Cambia de #ddd a #000dff (azul como input)
        borderRadius: '20px',          // ← Cambia de 8px a 20px para que coincida con input
        fontSize: '14px',
        backgroundColor: 'white',
        cursor: 'pointer',
        boxSizing: 'border-box',
        color: '#000000',              // ← Texto negro
        outline: 'none',
        transition: 'all 0.5s ease',
        // Para eliminar el fondo gris del autocompletado
        WebkitBoxShadow: '0 0 0 1000px white inset',
        boxShadow: '0 0 0 1000px white inset',       
}         