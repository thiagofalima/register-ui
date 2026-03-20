import { createContext } from "react";
import { IAuthContext, IAuthContextProviderProps } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}