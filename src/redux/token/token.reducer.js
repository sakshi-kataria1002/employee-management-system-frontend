import { tokenActionType } from './token.type'

const INITIAL_STATE = {
    token: ""
}

export const tokenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tokenActionType.GET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}
