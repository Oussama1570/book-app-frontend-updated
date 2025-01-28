// utils/baseURL.js
const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'https://book-app-backend-env-updated.vercel.app/'; // Or your development server URL
    } else {
        return 'https://book-app-backend-env-updated.vercel.app/';
    }
};

export default getBaseUrl;


