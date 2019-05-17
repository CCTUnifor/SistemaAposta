import * as electron from 'electron';

const mainProcess: NodeJS.Process = electron
  ? electron.remote
    ? electron.remote.process
    : process
  : { argv: [] };

export default {
  debug: mainProcess.argv.some(a => a.includes('--debug')),
  devTools: mainProcess.argv.some(a => a.includes('--dev-tools')),
  environment: (process.env.production ? 'production' : process.env.testing ? 'testing' : 'development') as
    | 'production'
    | 'development'
    | 'testing',
  packaged: mainProcess.defaultApp === undefined
};
