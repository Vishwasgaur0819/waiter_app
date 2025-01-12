import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://foodscaner.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
    },
});

// Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Add Authorization token if needed
        // const token = "your-auth-token";
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default apiClient;
