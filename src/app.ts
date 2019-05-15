import { autoinject, inject, PLATFORM  } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { Store } from 'aurelia-store';
import 'bootstrap';
import { ApostadorAction } from "./actions/apostador.action";
import { BolaoAction } from './actions/bolao.action';
import { IState } from './entities/state';

@autoinject
export class App {
  constructor(
    private router: Router, 
    private store: Store<IState>, 
    private apostadorAction: ApostadorAction,
    private bolaoAction: BolaoAction) {
  }

  public attached() {
    this.store.registerAction("AddApostadorAction", this.apostadorAction.add);
    this.store.registerAction("AddBolaoAction", this.bolaoAction.add);
  }

  public detached() {
    this.store.unregisterAction(this.apostadorAction.add);
    this.store.unregisterAction(this.bolaoAction.add);
  }

  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Sistema de Aposta';
    config.map([
      {
        moduleId: PLATFORM.moduleName('pages/home/index'),
        name: 'home',
        route: [''],
        title: 'Inicio'
      },
      {
        moduleId: PLATFORM.moduleName('pages/relatorios/debitos/relatorio-debitos.page'),
        name: 'relatorio-debitos',
        route: ['relatorio/debito'],
        title: 'Relatório de Débitos'
      },
      {
        moduleId: PLATFORM.moduleName('pages/apostador/cadastro/cadastro-apostador.page'),
        name: 'cadastro-apostador',
        route: ['cadastro/apostador'],
        title: 'Cadastro de Apostador'
      },
      {
        moduleId: PLATFORM.moduleName('pages/adicionar-cota/adicionar-cota.page'),
        name: 'adicionar-cota',
        route: ['adicionar-cota'],
        title: 'Adicionar Cota'
      },
      {
        moduleId: PLATFORM.moduleName('pages/bolao/cadastro/cadastro-bolao.page'),
        name: 'cadastro-bolao',
        route: ['cadastro/bolao'],
        title: 'Cadastro de Bolão'
      },
    ]);
    config.fallbackRoute('');
  }
}
