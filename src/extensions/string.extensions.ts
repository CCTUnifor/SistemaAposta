declare global {
  // tslint:disable-next-line:interface-name
  interface String {
    getFileName(): string;
    getDirName(): string;
    getQueryStringParams(): any;
    replaceAll(search: string, value: string): string;
  }
}
String.prototype.getFileName = function() {
  let split = [];
  // tslint:disable-next-line:prefer-conditional-expression
  if (this.includes('\\')) {
    split = this.split('\\');
  } else {
    split = this.split('/');
  }
  return split[split.length - 1];
};

String.prototype.getDirName = function() {
  let split = [];
  // tslint:disable-next-line:prefer-conditional-expression
  if (this.includes('\\')) {
    split = this.split('\\');
  } else {
    split = this.split('/');
  }
  return split
    .splice(0, split.length - 1)
    .toString()
    .replaceAll(',', '\\');
};

String.prototype.getQueryStringParams = function(): any {
  const y = this.replace('/?', '').replace('?', '');
  const params = y.split('&');
  const xx: any = {};
  params.map(x => {
    const key = x.split('=')[0];
    const value = x.split('=')[1];
    xx[key] = value;
    return xx;
  });
  return xx;
};

String.prototype.replaceAll = function(search: string, value: string): string {
  const target = this as string;
  return target.replace(new RegExp(search, 'g'), value);
};

export class Test {}
