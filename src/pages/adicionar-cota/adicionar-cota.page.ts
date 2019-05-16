import { autoinject, observable } from "aurelia-framework";
import { Router } from 'aurelia-router';
import { connectTo, Store } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { BolaoAction } from './../../actions/bolao.action';
import { Bolao } from './../../entities/bolao';
import { BolaoApostador } from './../../entities/bolao-apostador';
import { Cota } from './../../entities/Cota';
import { IState } from './../../entities/State';

@autoinject
@connectTo({
    selector: {
        boloes: (store) => store.state.pipe(pluck('boloes'))
    }
})
export class AdicionarCotaPage {
    private boloes: Bolao[];
    private bolaoSelecionado: Bolao;
    @observable() private apostadorSelecionado: BolaoApostador;

    constructor(private store: Store<IState>, private bolaoAction: BolaoAction, private router: Router) {
    }

    private selecionarBolao(bolao: Bolao) {
        this.bolaoSelecionado = bolao;
    }

    private selecionarApostador(apostador: BolaoApostador) {
        this.apostadorSelecionado = apostador
    }

    private adicionarNovaCota(apostador: BolaoApostador) {
        apostador.cotas.push(new Cota(apostador));
    }

    private apostadorSelecionadoChanged() {
        if (this.apostadorSelecionado.cotas.length === 0) {
            this.apostadorSelecionado.cotas.push(new Cota(this.apostadorSelecionado));
        }
    }

    private salvar() {
        this.store.dispatch(this.bolaoAction.update, this.boloes);
        this.router.navigate("");
    }
}