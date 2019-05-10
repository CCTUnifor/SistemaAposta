import { autoinject, inject, PLATFORM  } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import 'bootstrap';

@autoinject
export class App {
  constructor(private router: Router) {
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
        moduleId: PLATFORM.moduleName('pages/pagamento-cota/pagamento-cota.page'),
        name: 'pagamento-cota',
        route: ['pagamento-cota'],
        title: 'Pagamento de Cotas'
      }
    ]);
    config.fallbackRoute('');
    console.log(config.instructions[0])
  }
}
