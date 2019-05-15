import { BolaoApostador } from "./bolao-apostador";

export class Bolao {
    public nome: string;
    public apostadores: BolaoApostador[]

    constructor() {
        this.apostadores = [];
    }
}
