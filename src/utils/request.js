import axios from 'axios';

export const request = axios.create({ baseURL: 'http://localhost:8081/api/' });

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);

    return response.data;
};
