import { signInActionType } from './signin.type'

const INITIAL_STATE = {
    employee: {}
}

export const signinReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case signInActionType.SHOW_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        default:
            return state
    }
}
