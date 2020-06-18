import {AUTHENTICATE_USER, SIGN_OUT} from "./types";

export function authenticateUser(id) {
    return {
        type: AUTHENTICATE_USER,
        id
    }
}

export function signOut(id) {
    return {
        type: SIGN_OUT,
        id
    }
}