import { computedFrom } from "aurelia-framework";

export class Apostador {
    public nome: string;
    public cpf: string;
    public email: string;
    public telefone: string;
    public setor: string;

    @computedFrom("nome")
    public get id() {
        return this.nome && this.nome.replace(" ", "-") || "";
    }
}
