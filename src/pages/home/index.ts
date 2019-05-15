import { autoinject } from 'aurelia-framework';
import { connectTo } from 'aurelia-store';
import { pluck } from 'rxjs/operators';
import '../../extensions/date.extensions';
import '../../extensions/number.extensions';
import '../../extensions/string.extensions';
import { Apostador } from './../../entities/apostador';
import { Bolao } from './../../entities/bolao';

@autoinject
@connectTo({
    selector: {
        apostadores: (store) => store.state.pipe(pluck('apostadores')),
        boloes: (store) => store.state.pipe(pluck('boloes'))
    }
})
export class HomeIndex {
    private apostadores: Apostador[];
    private boloes: Bolao[];
}
