import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para agregar el token a todas las peticiones
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Servicio de autenticación
export const authService = {
    register: (userData) => api.post('/users/register/', userData),
    login: (credentials) => api.post('/users/login/', credentials),
    getProfile: () => api.get('/users/profile/'),
};

// Servicio de citas (próximamente)
export const appointmentService = {
    // getSpecialties: () => api.get('/appointments/specialties/'),
    // getDoctors: (specialtyId) => api.get(`/appointments/doctors/?specialty=${specialtyId}`),
    // bookAppointment: (data) => api.post('/appointments/book/', data),
    // getMyAppointments: () => api.get('/appointments/my-appointments/'),
};

export default api;