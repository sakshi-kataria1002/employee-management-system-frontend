import { signInActionType } from "./signin.type"

export const showEmployee = (employee) => {
    return {
        type: signInActionType.SHOW_EMPLOYEE,
        payload: employee
    }
}
