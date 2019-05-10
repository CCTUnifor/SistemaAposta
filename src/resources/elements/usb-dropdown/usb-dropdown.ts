// import { autoinject, bindable, computedFrom } from 'aurelia-framework';
// import * as usbDetect from 'usb-detection';
// import { UsbService } from './../../../services/usb-service';

// @autoinject
// export class UsbDropdown {
//   public devices: usbDetect.Device[] = [];
//   public devices: any[] = [];
//   @bindable() public deviceSelected?: any;

//   @computedFrom('deviceSelected')
//   public get dropdownName() {
//     return this.deviceSelected
//       ? `${this.deviceSelected.manufacturer} ${this.deviceSelected.deviceName} ${
//           this.deviceSelected.serialNumber
//         }`
//       : 'Selecione o cartão SD';
//   }

//   constructor(private usbService: UsbService) {}

//   public async attached() {
//     this.devices = await this.usbService.find();
//     this.usbService.watch(
//       async (device: usbDetect.Device) => (this.devices = await this.usbService.find())
//       async (device: any) => (this.devices = await this.usbService.find())
//     );
//     this.usbService.start();
//   }

//   public detached() {
//     this.usbService.stop();
//   }

//   public selectDevice(device: usbDetect.Device) {
//   public selectDevice(device: any) {
//     this.deviceSelected = device;
//   }
// }
