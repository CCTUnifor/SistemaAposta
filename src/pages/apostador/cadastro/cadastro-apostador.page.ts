import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { connectTo, Store } from 'aurelia-store';
import { pluck } from 'rxjs/operators';
import { ApostadorAction } from "../../../actions/apostador.action";
import { Apostador } from '../../../entities/apostador';
import { IState } from '../../../entities/state';
import '../../../extensions/date.extensions';
import '../../../extensions/number.extensions';
import '../../../extensions/string.extensions';

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
