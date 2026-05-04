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