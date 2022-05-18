import { getAllEmployeeActionType } from './allEmployee.type'

const INITIAL_STATE = {
    employees: []
}

export const allEmployeeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case getAllEmployeeActionType.GET_EMPLOYEE:
            return {
                ...state,
                employees: action.payload
            }
        default:
            return state
    }
}
