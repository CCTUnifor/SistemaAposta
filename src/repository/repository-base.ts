import { autoinject } from 'aurelia-framework';
import { DatabaseGlobalInstance } from './database-global-instance';

@autoinject
export class RepositoryBase<T> {
  private entityName: string;

  constructor(protected databaseGlobalInstance: DatabaseGlobalInstance) {
    this.entityName = this.constructor.name.replace('Repository', '');
  }

  public getAll(): T[] {
    const res = this.databaseGlobalInstance.exec(`SELECT * FROM ${this.entityName}`);
    const resultMapped = this.handleResult(res);
    console.log(resultMapped);
    return resultMapped;
  }

  protected get(q: string): T[] {
    const res = this.databaseGlobalInstance.exec(q);
    const resultMapped = this.handleResult(res);
    console.log(resultMapped);
    return resultMapped;
  }

  protected getAny(q: string): any[] {
    const res = this.databaseGlobalInstance.exec(q);
    const resultMapped = this.handleResultAny(res);
    console.log(resultMapped);
    return resultMapped;
  }

  protected handleResult(result: any[]): T[] {
    const resultParsed: any[] = [];
    if (!result) {
      return resultParsed;
    }
    for (const parent of result) {
      for (const value of parent.values) {
        const instance: any = {};
        for (let collumnIndex = 0; collumnIndex < value.length; collumnIndex++) {
          instance[parent.columns[collumnIndex]] = value[collumnIndex];
        }
        resultParsed.push(instance);
      }
    }
    return resultParsed;
  }

  protected handleResultAny(result: any[]): any[] {
    const resultParsed: any[] = [];
    if (!result) {
      return resultParsed;
    }
    for (const parent of result) {
      for (const value of parent.values) {
        const instance: any = {};
        for (let collumnIndex = 0; collumnIndex < value.length; collumnIndex++) {
          instance[parent.columns[collumnIndex]] = value[collumnIndex];
        }
        resultParsed.push(instance);
      }
    }
    return resultParsed;
  }
}
