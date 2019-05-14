import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { App } from './app';
import { initialState } from './entities/State';
import environment from './environment';
import { DatabaseGlobalInstance } from './repository/database-global-instance';

bootstrap(async (aurelia: Aurelia) => {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-dialog'))
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-store'), {
      initialState
    });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }
  const databaseGlobalInstance = new DatabaseGlobalInstance();
  aurelia.container.registerSingleton('DatabaseGlobalInstance', () => databaseGlobalInstance);

  await aurelia.start();
  return aurelia.setRoot(App, document.body);
});
