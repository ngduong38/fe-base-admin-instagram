import baseAdminAxios from "../../plugins/axios";

const baseRoute = 'auth/'
const authApi = {
    login: (data) => {
        return baseAdminAxios.post(baseRoute + "login", data);
    },
    changePassword: (data) => {
        return baseAdminAxios.post(baseRoute + 'confirm-account/change-password', data)
    },
    confirmAccount: (data) => {
        return baseAdminAxios.post(baseRoute + 'confirm-account', data)
    },
}

export default authApi;