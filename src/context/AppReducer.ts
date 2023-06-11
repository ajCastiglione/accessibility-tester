// Types
import { InitialStateType } from "../types/context.types";
// Interfaces
import { ActionTypes, ActionEnums } from "../interfaces/context.interface";

export default (
  state: InitialStateType,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case ActionEnums.SET_URL:
      return {
        ...state,
        url: action.payload.url,
      };
    case ActionEnums.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case ActionEnums.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionEnums.SET_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
      };
    case ActionEnums.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
