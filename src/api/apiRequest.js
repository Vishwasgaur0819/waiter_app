import apiClient from "./apiClient";
import apiEndpoints from "./apiEndpoints";


export const getData = async (endPoints, params = {}) => {
    console.log('endPoints', endPoints)
    try {
        const response = await apiClient.get(endPoints, { params });
        return response.data;
    } catch (error) {
        console.error('GET Request Error:', error);
        throw error;
    }
};

export const postData = async (url, body) => {
    console.log('URL-->', url)
    try {
        const response = await apiClient.post(url, body);
        return response.data;
    } catch (error) {
        console.error('POST Request Error:', error);
        throw error;
    }
};
