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
};
