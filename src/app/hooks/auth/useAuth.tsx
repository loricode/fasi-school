import { useContext  } from "react";
import { MyContextAuth } from "../../store/auth/context";
import { MyContextAuthDispactch } from "../../store/auth/context";

export const useAuth = () => useContext(MyContextAuth);

export const useAuthDispatch = () => useContext(MyContextAuthDispactch);