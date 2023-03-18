import { createContext, ReactNode, useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { UserInput } from "../component/LoginForm/LoginForm";
import { Auth } from "../App";

type AppContexts = {
  auth: (obj: UserInput) => Promise<Auth | undefined>;
  session: string;
  setSession:React.Dispatch<React.SetStateAction<string>>
};
type AppContextProviderProps = {
  children: ReactNode;
};
export const AppContext = createContext({} as AppContexts);

const URL = process.env.REACT_APP_URL;

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [session,setSession]=useState('')
  async function auth(obj: UserInput): Promise<Auth | undefined> {
    try {
      const session = await axios({
        url: `${URL}/api/auth/login`,
        method: "POST",
        data: {
          username: obj.user,
          password: obj.password,
        },
      });

      return {
        user: session.data.user.username,
        token: session.data.accessToken,
        authorized: true,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          return {
            user: "",
            token: "",
            authorized: false,
          };
        }
      } else throw error;
    }
  }
  const value = {
    auth,
    session,
    setSession,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
