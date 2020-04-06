import { createSelector, Selector } from "reselect";
import { ApplicationStateInterface } from "../../interfaces/ApplicationState.interface";

const getS: Selector<ApplicationStateInterface, string> = (
  state: ApplicationStateInterface
): string => state.main.s;

export const sSelector = createSelector<ApplicationStateInterface, any, string>(
  [getS],
  (s: string): string => {
    return s;
  }
);
