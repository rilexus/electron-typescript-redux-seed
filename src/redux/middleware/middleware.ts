import { AnyAction } from "redux";
// @ts-ignore
const { ipcRenderer } = window;

export const RENDERER_TO_MAIN_ACTION_TYPE = "[IPC]VIEW>MAIN";

export const ipcMiddleware = ({ dispatch }: any) => (next: any) => (
  action: any
) => {
  const { ipcm_type, payload: ipc_action } = action;
  if (ipcm_type === RENDERER_TO_MAIN_ACTION_TYPE) {
    ipcRenderer
      .invoke(RENDERER_TO_MAIN_ACTION_TYPE, ipc_action)
      .then((mainAction: AnyAction) => {
        dispatch(mainAction);
      });

    next(ipc_action);
  } else {
    next(action);
  }
};
