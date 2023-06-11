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
        loading: false,
        url: action.payload.url,
        error: false,
      };

    default:
      return state;
  }
};
