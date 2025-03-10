import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_API_VERSION}`,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
});

const getCountryData = async (endpoint) => {
    const response = await axiosInstance.get(endpoint);
    return response.data;
}

export {
    getCountryData
}