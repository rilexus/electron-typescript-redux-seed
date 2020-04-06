import { AnyAction, combineReducers } from "redux";
import { Injector } from "../../utils/Injector";
import { theme } from "./theme.reducer";

const main = (store = {}, action: AnyAction) => {
  return {
    s: "a",
  };
};

Injector.registerReducer(main);
export const rootReducer = combineReducers({
  main,
  theme,
});
