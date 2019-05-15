import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { connectTo, Store } from 'aurelia-store';
import { pluck } from 'rxjs/operators';
import { BolaoAction } from "../../../actions/bolao.action";
import { Apostador } from '../../../entities/apostador';
import { Bolao } from '../../../entities/bolao';
import { BolaoApostador } from '../../../entities/bolao-apostador';
import { IState } from '../../../entities/state';
import '../../../extensions/date.extensions';
import '../../../extensions/number.extensions';
import '../../../extensions/string.extensions';

@autoinject
@connectTo({
    selector: {
        apostadores: (store) => store.state.pipe(pluck('apostadores'))
    }
})
export class CadastroBolaoPage {
    private bolao: Bolao;
    private apostadores: Apostador[];

    constructor(private router: Router, private store: Store<IState>, private bolaoAction: BolaoAction) {
    }

    public attached() {
        this.bolao = new Bolao();
    }

    public salvar() {
        this.store.dispatch(this.bolaoAction.add, this.bolao);
        this.router.navigate("");
    }

    public cancelar() {
        this.router.navigate("");
    }

    public novo() {
        this.bolao.apostadores.push(new BolaoApostador());
    }

    public selecionar(apostadorBolao: BolaoApostador, apostador: Apostador) {
        apostadorBolao.apostador = apostador;
        apostadorBolao.bolao = this.bolao;
    }
}
