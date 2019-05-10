import { existsSync, readFileSync, writeFileSync } from 'fs';
import * as sql from 'sql.js';

export class DatabaseGlobalInstance {
  public databasePath: string;
  private database: sql.Database;

  constructor() {
    this.database = new sql.Database();
    this.databasePath = 'D:\\Workspace\\Personal\\AureliaElectronPOC\\databases';
    // this.databasePath = '/home/thiago/Área de Trabalho/AureliaElectronPOC/db2.db';
  }

  public initializeByFile(file: Buffer) {
    try {
      this.database = new sql.Database(file);
    } catch (error) {
      console.error(error);
    }
  }

  public commit() {
    const content = this.database.export();
    writeFileSync(this.databasePath, content);
  }

  public run(sqlstr: string): any {
    this.database.run(sqlstr);
  }

  public exec(query: string): sql.QueryResults[] {
    return this.database.exec(query);
  }

  public loadDataBase(path: string) {
    if (!path) {
      return;
    }
    this.databasePath = path;
    if (existsSync(this.databasePath)) {
      this.initializeByFile(readFileSync(this.databasePath));
    } else {
      alert('SQLite não foi encontrado!');
    }
  }
}
