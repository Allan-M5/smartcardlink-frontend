import axios from "axios";

const API_BASE = "https://smartcardlink-backend.fly.dev/api";

export const fetchProfiles = async () => {
    const response = await axios.get(`${API_BASE}/profiles`);
    return response.data;
};

export const addProfile = async (profile) => {
    const response = await axios.post(`${API_BASE}/profiles`, profile);
    return response.data;
};
