import axios from "axios";

// Crea un'istanza Axios
const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true, // necessario per inviare il cookie httpOnly del refresh token
});

// Interceptor richiesta: aggiunge automaticamente Authorization
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor risposta: gestisce access token scaduti
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 403 && // token scaduto
            !originalRequest._retry             // evita loop infiniti
        ) {
            originalRequest._retry = true;

            try {
                const res = await axios.get("http://localhost:5001/api/utenti/refreshToken", {
                    withCredentials: true,
                });

                const nuovoAccessToken = res.data.accessToken;

                localStorage.setItem("accessToken", nuovoAccessToken); // aggiorna localStorage

                // aggiorna header nella richiesta originale e la rilancia
                originalRequest.headers.Authorization = `Bearer ${nuovoAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshErr) {
                console.error("Errore durante il refresh:", refreshErr);
                //window.location.href = "/login";//reindirizza al login
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
