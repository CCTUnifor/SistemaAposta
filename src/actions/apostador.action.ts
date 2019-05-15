import { Apostador } from "../entities/apostador";
import { Action } from "./base.action";

export class ApostadorAction extends Action<Apostador> {
    public rep: string = "apostadores";
}

