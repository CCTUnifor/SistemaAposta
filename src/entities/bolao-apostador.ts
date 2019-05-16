import { Apostador } from "./apostador";
import { Bolao } from "./bolao";
import { Cota } from "./cota";

export class BolaoApostador {
    public bolao: Bolao;
    public apostador: Apostador;
    public cotas: Cota[];

    constructor() {
        this.cotas = [];
    }
}

