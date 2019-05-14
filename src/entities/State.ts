
import { Apostador } from './Apostador';
export interface IState {
  apostadores: Apostador[];
}

export const initialState: IState = {
  apostadores: []
};