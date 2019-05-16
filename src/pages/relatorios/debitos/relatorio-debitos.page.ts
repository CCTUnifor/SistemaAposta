import { autoinject, computedFrom } from "aurelia-framework";
import { connectTo, Store } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { BolaoAction } from './../../../actions/bolao.action';
import { Bolao } from './../../../entities/bolao';
import { Cota } from './../../../entities/Cota';
import { IState } from "./../../../entities/state";

@autoinject
@connectTo({
    selector: {
        boloes: (store) => store.state.pipe(pluck('boloes'))
    }
})
export class RelatorioDebitosPage {
    private boloes: Bolao[];

    @computedFrom("boloes.length")
    private get cotas(): Cota[] {
        if (!!this.boloes && this.boloes.length > 0) {
            const cc = this.boloes.map(x => x.apostadores).reduce((a, b) => a.concat(b));
            if (cc.length > 0) {
                return cc.map(x => x.cotas).reduce((a, b) => a.concat(b));
            }
        }
        return [];
    }

    constructor(private store: Store<IState>, private bolaoAction: BolaoAction) {
    }

    public changed() {
        this.store.dispatch(this.bolaoAction.update, this.boloes);
    }
}