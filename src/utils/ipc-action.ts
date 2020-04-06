import { AnyAction } from "redux";
import { RENDERER_TO_MAIN_ACTION_TYPE } from "../redux/middleware/middleware";

export function ipcAction(action: AnyAction) {
  return { ipcm_type: RENDERER_TO_MAIN_ACTION_TYPE, payload: action };
}
