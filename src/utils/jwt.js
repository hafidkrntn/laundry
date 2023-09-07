import jwtDecode from "jwt-decode";

const authStorage = "auth";

export function getTokenFromLS() {
  const token = localStorage.getItem(authStorage);

  if (token) {
    return token;
  }

  return null;
}

export function setTokenToLS(value) {
  return localStorage.setItem(authStorage, value);
}

export function decodeJwt(token) {
  return jwtDecode(token);
}
