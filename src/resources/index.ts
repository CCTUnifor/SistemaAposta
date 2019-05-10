import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/folder-input/folder-input'),
    PLATFORM.moduleName('./elements/select-dropdown/select-dropdown'),
    PLATFORM.moduleName('./elements/usb-dropdown/usb-dropdown'),
  ]);
}
