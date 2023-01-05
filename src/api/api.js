import axios from "axios";

const apiInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return apiInstance
            .get("users", {
                params: { page: currentPage, count: pageSize },
            })
            .then((response) => response.data);
    },
    follow: (id) => {
        return apiInstance.post(`follow/${id}`);
    },
    unfollow: (id) => {
        return apiInstance.delete(`follow/${id}`);
    },
    getProfile: (id) => {
        return apiInstance.get(`profile/${id}`);
    },
};

export const authAPI = {
    me: () => {
        return apiInstance.get("auth/me");
    },
};
