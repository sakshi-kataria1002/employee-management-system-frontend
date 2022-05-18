import { combineReducers } from "redux";
import { allEmployeeReducer } from "./allEmployee/allEmployee.reducer";
import { signinReducer } from "./signin/signin.reducer";
import { tokenReducer } from "./token/token.reducer";

export const rootReducer = combineReducers({
    signin: signinReducer,
    token: tokenReducer,
    allEmployee: allEmployeeReducer
})
