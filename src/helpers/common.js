import {Cookies} from "react-cookie";

export const getHeaderWithAuthorizationBearerToken =  () => {
    const cookie = new Cookies();
    const userToken = cookie.get('user_token') ?? "";

    return {
        Authorization: `Bearer ${userToken}`,
    }
}

