import { tokenActionType } from "./token.type"

export const setToken = (token) => ({
        type: tokenActionType.SET_TOKEN,
        payload: token,
})
