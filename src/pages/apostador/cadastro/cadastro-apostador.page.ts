import { autoinject } from 'aurelia-framework';
import { Apostador } from '../../../entities/Apostador';
import '../../../extensions/date.extensions';
import '../../../extensions/number.extensions';
import '../../../extensions/string.extensions';

@autoinject
export class CadastroApostadorPage {
    private apostador: Apostador;

    public attached() {
        this.apostador = new Apostador();
    }

    public salvar() {
        console.log("Salvar")
    }

    public cancelar() {
        console.log("Cancelar")
    }
}
