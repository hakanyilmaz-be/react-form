import { userInitialState } from "./userInitialState";


export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
      case "UPDATE_USER":
        return {
            ...state,
            ...action.payload,
          };
        default:
          return state;
      }
    };