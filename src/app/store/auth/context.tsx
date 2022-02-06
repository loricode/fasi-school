import { createContext, useReducer, ReactNode } from "react";
import { ActionAuth, Auth } from "../../interfaces/auth/user";
import { authReducer, initialState } from "./reducer";

const init = () => {
  const hasData = localStorage.getItem("user"); 
  const isData = hasData ? true : false;
  if(isData){
     return JSON.parse(hasData!);
  }  
  return initialState;
}

type Props = { children:ReactNode }

type Context = {
    state: Auth,
   dispatch: (action:ActionAuth) => void };
 
export const MyContextAuth = createContext<Context>({
   state: { username:"", token:"", roles:[] },
   dispatch: () => {}
});

export const AuthContext = ({children}:Props) => {

  const [ state, dispatch ] = useReducer(authReducer, initialState, init);

   return( 
    <MyContextAuth.Provider value={{state, dispatch}}>
      {children}
    </MyContextAuth.Provider> );
}