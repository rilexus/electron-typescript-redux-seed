import { IPC_ACTION_TYPES } from "../../ipc.action-types";

export function theme(state = { isDark: false }, action: any) {
  const { type } = action;
  switch (type) {
    case IPC_ACTION_TYPES.GET_THEME: {
      const { payload } = action;
      return {
        ...state,
        isDark: payload,
      };
    }
    default:
      return state;
  }
}
