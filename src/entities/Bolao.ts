import { computedFrom } from "aurelia-framework";
import { BolaoApostador } from "./bolao-apostador";

export class Bolao {
    public nome: string;
    public apostadores: BolaoApostador[]

    constructor() {
        this.apostadores = [];
    }

    @computedFrom("nome")
    public get id() {
        return this.nome && this.nome.replace(" ", "-") || "";
    }
}
