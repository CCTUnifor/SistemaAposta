import { bindable, bindingMode } from 'aurelia-framework';

export class SelectDropdownCustomElement {
  @bindable() public id: string =
    'select-' + new Date().getTime() + Math.round(Math.random() * 1000000);
  @bindable() public label: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public options: any;

  constructor() {
    this.label = '';
    this.value = '';
  }
}
