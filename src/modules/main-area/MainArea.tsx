import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { sSelector } from "../../redux/selectors";
import { IPC_ACTION_TYPES } from "../../ipc.action-types";
import { ipcAction } from "../../utils/ipc-action";
import { ThemeInterface } from "../../themes/Theme.interface";

const Wrapper = styled.div`
  border: 1px solid
    ${({ theme }: { theme: ThemeInterface }) => theme.colors.main};
`;

interface MainAreaPropI {
  s: string;
  onButtonClick: () => void;
}

function _MainArea({ s, onButtonClick }: MainAreaPropI) {
  return (
    <Wrapper>
      <button onClick={onButtonClick}>Dispatch IPC Action</button>
    </Wrapper>
  );
}

export const MainArea = connect(
  (state: any) => ({
    s: sSelector(state),
  }),
  (dispatch: any) => ({
    onButtonClick: () => dispatch(ipcAction({ type: IPC_ACTION_TYPES.PING })),
  })
)(_MainArea);
