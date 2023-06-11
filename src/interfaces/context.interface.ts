import { InitialStateType } from "../types/context.types";

export enum ActionEnums {
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_URL = "SET_URL",
  FETCH_URL = "FETCH_URL",
}

export type ActionTypes =
  | {
      type: ActionEnums.SET_URL;
      payload: {
        url: InitialStateType["url"];
      };
    }
  | {
      type: ActionEnums.SET_LOADING;
      payload: {
        loading: InitialStateType["loading"];
      };
    }
  | {
      type: ActionEnums.SET_ERROR;
      payload: {
        error: InitialStateType["error"];
      };
    }
  | {
      type: ActionEnums.FETCH_URL;
    };
