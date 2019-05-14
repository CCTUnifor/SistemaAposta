import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { connectTo, Store } from 'aurelia-store';
import { pluck } from 'rxjs/operators';
import { Apostador } from '../../../entities/Apostador';
import { IState } from '../../../entities/State';
import '../../../extensions/date.extensions';
import '../../../extensions/number.extensions';
import '../../../extensions/string.extensions';
import { ApostadorAction } from './../../../actions/apostador.action';

@autoinject
@connectTo({
    selector: {
        apostadores: (store) => store.state.pipe(pluck('apostadores')),
        frameworks: (store) => store.state.pipe(pluck('frameworks')),
    }
})
export class CadastroApostadorPage {
    private apostador: Apostador;

    constructor(private router: Router, private store: Store<IState>, private apostadorAction: ApostadorAction) {
    }

    public attached() {
        this.apostador = new Apostador();
    }

    public salvar() {
        this.store.dispatch(this.apostadorAction.add, this.apostador);
        this.router.navigate("");
    }

    public cancelar() {
        this.router.navigate("");
    }
}
