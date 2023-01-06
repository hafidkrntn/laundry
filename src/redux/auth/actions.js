import { USER_LOGIN, USER_LOGOUT } from "./constants";

import { setTokenToLS } from "../../utils/jwt";

export function userLogin(token) {
	setTokenToLS(token);
	return {
		type: USER_LOGIN,
		token,
	};
}

export function userLogout() {
	return {
		type: USER_LOGOUT,
	};
}