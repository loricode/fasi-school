import { createContext, useReducer, ReactNode } from "react";
import { ActionAuth, Auth } from "../../interfaces/auth/user";
import { authReducer, initialState } from "./reducer";

const init = () => {
  const hasData = localStorage.getItem("user");
  const isData = hasData ? true : false;
  if (isData) {
    return JSON.parse(hasData!);
  }
  return initialState;
};

type Props = { children: ReactNode };

type ContextDispatch = (action: ActionAuth) => void;

type Context = { auth: Auth };

export const MyContextAuth = createContext<Context>({
  auth: { username: "", token: "", roles: [] },
});

export const MyContextAuthDispactch = createContext<ContextDispatch>(() => {});

export const AuthContext = ({ children }: Props) => {
  const [ auth, dispatch ] = useReducer(authReducer, initialState, init);

  return (
    <MyContextAuthDispactch.Provider value={dispatch}>
      <MyContextAuth.Provider value={{ auth }}>
        {children}
      </MyContextAuth.Provider>
    </MyContextAuthDispactch.Provider>
  );
};
