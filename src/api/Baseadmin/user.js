import {PAGINATION} from "../../helpers/constants";
import baseAdminAxios from "../../plugins/axios";
import { getHeaderWithAuthorizationBearerToken } from "../../helpers/common";

const baseRoute = 'users/'

export const userApis = {
    index: (params = {}, page = PAGINATION.startPage, limit = PAGINATION.limit) => {
        return baseAdminAxios.get(baseRoute, {
            params: {
                ...params,
                page,
                limit
            },
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    store: (data) => {
        return baseAdminAxios.post(baseRoute, data, {
            headers: getHeaderWithAuthorizationBearerToken()  
        })
    },
    show: (userId) => {
        return baseAdminAxios.get(baseRoute + userId, {
            headers:getHeaderWithAuthorizationBearerToken()
        });
    },
    update: (userId, data) => {
        return baseAdminAxios.put(baseRoute + userId, data, {
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    destroy: (userId) => {
        return baseAdminAxios.delete(baseRoute + userId, {
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },

}

export default userApis;