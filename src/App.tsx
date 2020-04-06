import React, { useEffect } from "react";
import { MainArea } from "./modules/main-area/MainArea";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { ApplicationStateInterface } from "./interfaces/ApplicationState.interface";
import { ipcAction } from "./utils/ipc-action";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/lightTheme";
import { IPC_ACTION_TYPES } from "./ipc.action-types";

export function _App({ theme, getTheme }: any) {
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div
        style={{
          width: "100w",
          height: "100vh",
          backgroundColor: theme ? "black" : "white",
        }}
      >
        <MainArea />
      </div>
    </ThemeProvider>
  );
}

export const App = connect(
  (state: ApplicationStateInterface) => ({
    theme: state.theme.isDark,
  }),
  (dispatch: any) => ({
    getTheme: () => dispatch(ipcAction({ type: IPC_ACTION_TYPES.GET_THEME })),
  })
)(_App);
