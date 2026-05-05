import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('Verificando datos...');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/users/verify/${token}/`);
                const data = await response.json();
                
                if (response.ok) {
                    setMessage('✅ ¡Cuenta verificada exitosamente!');
                } else {
                    setMessage('⚠️ Verificando datos...');
                }
                
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                
            } catch (error) {
                setMessage('Verificando datos...');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        };

        if (token) {
            verifyEmail();
        } else {
            setMessage('Verificando datos...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [token, navigate]);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh',
            flexDirection: 'column'
        }}>
            <div style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <h3>{message}</h3>
                <p>Redirigiendo al inicio de sesión...</p>
            </div>
        </div>
    );
};

export default VerifyEmail;