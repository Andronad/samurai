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
            .then(response => response.data);
    },
    follow: id => {
        return apiInstance.post(`follow/${id}`);
    },
    unfollow: id => {
        return apiInstance.delete(`follow/${id}`);
    },
};

export const profileAPI = {
    getProfile: id => {
        return apiInstance.get(`profile/${id}`);
    },
    getStatus: id => {
        return apiInstance.get(`profile/status/${id}`);
    },
    updateStatus: status => {
        return apiInstance.put(`profile/status`, { status });
    },
};

export const authAPI = {
    me: () => {
        return apiInstance.get("auth/me");
    },
    login: (email, password, rememberMe) => {
        return apiInstance.post("auth/login", { email, password, rememberMe });
    },
    logout: () => {
        return apiInstance.delete("auth/login");
    },
};
