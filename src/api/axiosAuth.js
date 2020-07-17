import axiosClient from './axiosClient';

const axiosAuth = {
    postLogin: (inputLogin) => {
        const url = 'login';
        console.log(inputLogin);
        return axiosClient.post(url, { inputLogin });
    }
};

export default axiosAuth;