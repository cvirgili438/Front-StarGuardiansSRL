import { createContext, type ReactNode, useState } from 'react';
import axios, { type AxiosError, type AxiosResponse } from 'axios';
import { type UserInput } from '../component/LoginForm/LoginForm';
import { type Auth } from '../App';
import { type returnSchedule, type CalendarTD } from '../constant/types';
import { Month } from '../constant/enum';
import { CalendarContextProvider } from './CalendarContext';

interface AppContexts {
  auth: (obj: UserInput) => Promise<Auth | undefined>;
  session: string;
  setSession: React.Dispatch<React.SetStateAction<string>>;
  getUserSchedule: (body: CalendarTD) => Promise<returnSchedule[]>;
}
interface AppContextProviderProps {
  children: ReactNode;
}
export const AppContext = createContext<AppContexts>({} as AppContexts);

const URL = process.env.REACT_APP_URL;

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [session, setSession] = useState('');
  async function auth(obj: UserInput): Promise<Auth | undefined> {
    try {
      const session = await axios({
        url: `${URL}/api/auth/login`,
        method: 'POST',
        data: {
          username: obj.user,
          password: obj.password,
        },
      });

      return {
        user: session.data.user.id,
        token: session.data.accessToken,
        authorized: true,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          return {
            user: '',
            token: '',
            authorized: false,
          };
        }
      } else throw error;
    }
  }

  async function getUserSchedule(body: CalendarTD): Promise<returnSchedule[]> {
    try {
      const response: AxiosResponse = await axios({
        url: `${URL}/api/work-schedule/calendar/${body.id}`,
        method: 'GET',
        params: {
          month: Month[body.month],
          year: body.year,
        },
        headers: { access_token: body.token },
      });
      if ((await response.data).length === 0) {
        throw new Error('Nothing have ');
      }
      return await response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  const value = {
    auth,
    session,
    setSession,
    getUserSchedule,
  };

  return (
    <AppContext.Provider value={value}>
      <CalendarContextProvider>{children}</CalendarContextProvider>
    </AppContext.Provider>
  );
}
