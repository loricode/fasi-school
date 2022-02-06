import { useContext  } from "react";
import { MyContextAuth } from "../../store/auth/context";

export const useAuth = () => useContext(MyContextAuth);