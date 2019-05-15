import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { Bolao } from './../../entities/bolao';
import { BolaoApostador } from './../../entities/bolao-apostador';

@autoinject
@connectTo({
    selector: {
        boloes: (store) => store.state.pipe(pluck('boloes'))
    }
})
export class AdicionarCotaPage {
    private boloes: Bolao[];
    private bolaoSelecionado: Bolao;
    private apostadorSelecionado: BolaoApostador;

    private selecionarBolao(bolao: Bolao) {
        this.bolaoSelecionado = bolao;
    }

    private selecionarApostador(apostador: BolaoApostador) {
        this.apostadorSelecionado = apostador
    }
}