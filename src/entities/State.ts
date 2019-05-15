
import { Apostador } from './apostador';
export interface IState {
  apostadores: Apostador[];
  boloes: Apostador[];
}

export const initialState: IState = {
  apostadores: [],
  boloes: []
};