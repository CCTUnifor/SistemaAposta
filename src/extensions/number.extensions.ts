declare global {
  // tslint:disable-next-line:interface-name
  interface Number {
    formatBytes(decimals?: number): string;
  }
}

// tslint:disable-next-line:only-arrow-functions
Number.prototype.formatBytes = function(decimals: number): string {
  const bytes = this as number;
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
export class Test {}
