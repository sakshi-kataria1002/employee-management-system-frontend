import { tokenActionType } from "./token.type"

export const getToken = (token) => {
    return {
        type: tokenActionType.GET_TOKEN,
        payload: token
    }
}
