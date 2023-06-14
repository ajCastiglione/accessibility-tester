import { createContext, useReducer } from "react";

// Reducer
import AppReducer from "./AppReducer";

// Utils
import { getUrl } from "../config/url";

// Types
import {
  InitialStateType,
  GlobalContextType,
  GlobalProviderProps,
} from "../types/context.types";

// Interfaces
import { ActionEnums } from "../interfaces/context.interface";
import { Issue } from "../types/issues.types";

// Create the initial state
const INITIAL_STATE: InitialStateType = {
  url: "",
  success: false,
  loading: false,
  error: false,
  data: [],
};

// Create the Global Context
export const GlobalContext = createContext<GlobalContextType>(INITIAL_STATE);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  // Actions
  const setUrl = (url: string) => {
    // Clear errors when setting a new URL.
    setError(false);
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

  const setSuccess = (success: boolean) => {
    dispatch({
      type: ActionEnums.SET_SUCCESS,
      payload: { success },
    });
  };

  const setData = (data: Issue[]) => {
    dispatch({
      type: ActionEnums.SET_DATA,
      payload: { data },
    });
  };

  const fetchUrl = async (url: string) => {
    try {
      setLoading(true);
      // Clear out the data.
      setData([]);
      const res = await fetch(`${getUrl()}/api/test?url=${url}`);
      // Check status before setting data.
      if (res.status !== 200) {
        setError(true);
        setLoading(false);
        setSuccess(false);
        return;
      }

      const { issues } = await res.json();

      setData(issues);
      setLoading(false);
      setSuccess(true);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      setSuccess(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        url: state.url,
        success: state.success,
        loading: state.loading,
        error: state.error,
        data: state.data,
        setUrl,
        fetchUrl,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
