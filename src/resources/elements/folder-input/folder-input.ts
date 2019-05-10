import { bindable, bindingMode, observable } from 'aurelia-framework';

export class FolderInputCustomElement {
  @bindable() public id: string =
    'folder-input-' + new Date().getTime() + Math.round(Math.random() * 1000000);
  @observable() public files: any;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public path: string;
  @bindable() public label: string;

  constructor() {
    this.path = '';
    this.label = '';
  }

  public filesChanged() {
    this.path = this.files && this.files[0] && this.files[0].path;
  }
}
