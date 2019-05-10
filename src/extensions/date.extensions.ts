import * as dateFormat from 'dateformat';

declare global {
  // tslint:disable-next-line:interface-name
  interface Date {
    format(format?: string): string;
    toDate(): Date;
    inicioDoDia(): Date;
    inicioDoDiaFormated(format?: string): string;
    finalDoDia(): Date;
    finalDoDiaFormated(format?: string): string;
  }
}
Date.prototype.format = function(format: string = 'yyyy-mm-dd_HH-MM-ss') {
  return dateFormat(this, format);
};

Date.prototype.toDate = function() {
  const v = this as Date;
  return new Date(v.getFullYear(), v.getMonth(), v.getDate());
};

Date.prototype.inicioDoDia = function() {
  const v = this as Date;
  return new Date(v.getFullYear(), v.getMonth(), v.getDate(), 0, 0, 0);
};

Date.prototype.finalDoDia = function() {
  const v = this as Date;
  return new Date(v.getFullYear(), v.getMonth(), v.getDate(), 23, 59, 59);
};

Date.prototype.inicioDoDiaFormated = function(format: string = 'yyyy-mm-dd HH:MM:ss') {
  const v = this as Date;
  const vv = v.inicioDoDia();
  const vvv = vv.format(format);
  return vvv;
};

Date.prototype.finalDoDiaFormated = function(format: string = 'yyyy-mm-dd HH:MM:ss') {
  const v = this as Date;
  return v.finalDoDia().format(format);
};

export class Test {}
