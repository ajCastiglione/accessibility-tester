import { createContext, useReducer } from "react";

// Reducer
import AppReducer from "./AppReducer";

// Types
import {
  InitialStateType,
  GlobalContextType,
  GlobalProviderProps,
} from "../types/context.types";

// Interfaces
import { ActionEnums } from "../interfaces/context.interface";

// Create the initial state
const INITIAL_STATE: InitialStateType = {
  url: "",
  loading: false,
  error: false,
  data: {},
};

// Create the Global Context
export const GlobalContext = createContext<GlobalContextType>(INITIAL_STATE);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  // Actions
  const setUrl = (url: string) => {
    dispatch({
      type: ActionEnums.SET_URL,
      payload: { url },
    });
  };

  const setLoading = (loading: boolean) => {
    dispatch({
      type: ActionEnums.SET_LOADING,
      payload: { loading },
    });
  };

  const setError = (error: boolean) => {
    dispatch({
      type: ActionEnums.SET_ERROR,
      payload: { error },
    });
  };

  const fetchUrl = async (url: string) => {
    console.log(url);
    return;
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(url)}`
      );
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        url: state.url,
        loading: state.loading,
        error: state.error,
        data: state.data,
        setUrl,
        setLoading,
        setError,
        fetchUrl,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
