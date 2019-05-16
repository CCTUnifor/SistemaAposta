import { BolaoApostador } from './bolao-apostador';

export class Cota {
    public bolaoApostador: BolaoApostador;
    public valor: number;
    public pago: boolean;

    constructor(bolaoApostador: BolaoApostador) {
        this.bolaoApostador = bolaoApostador;
    }
}
