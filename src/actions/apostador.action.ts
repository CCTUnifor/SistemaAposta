import { autoinject } from "aurelia-framework";
import { Apostador } from "../entities/Apostador";
import { IState } from "../entities/State";

@autoinject
export class ApostadorAction {
    public  add = (state: IState, apostador: Apostador) => {
        const newState = { ...state };
        newState.apostadores = [...newState.apostadores, apostador];
    
        return newState;
    }
}
