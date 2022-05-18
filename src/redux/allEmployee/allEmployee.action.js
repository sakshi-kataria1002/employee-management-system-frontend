import { getAllEmployeeActionType } from "./allEmployee.type"

export const showAllEmployee = (getAllEmployee) => {
    return {
        type: getAllEmployeeActionType.GET_EMPLOYEE,
        payload: getAllEmployee
    }
}
