import apiClient from "./apiClient";
import apiEndpoints from "./apiEndpoints";


export const getData = async (endPoints, params = {}) => {
    try {
        const response = await apiClient.get(endPoints, { params });
        return response.data;
    } catch (error) {
        console.error('GET Request Error:', error);
        throw error;
    }
};

export const postData = async (data) => {
    try {
        const response = await apiClient.post(apiEndpoints.POST_DATA, data);
        return response.data;
    } catch (error) {
        console.error('POST Request Error:', error);
        throw error;
    }
};
