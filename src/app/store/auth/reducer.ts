import { AUTHENTICATED, LOGOUT } from "./action";

export interface Action {
   type:string;
   payload:any;
}

export const initialState = {
   username:"", 
   token:"",
   roles:[]
}

export const authReducer = (state = initialState, action:Action ) => {
 switch (action.type) {
    case AUTHENTICATED:
       return { ...action.payload }
       case LOGOUT:
         return { ...action.payload }
    default:
       return state;
 }
}