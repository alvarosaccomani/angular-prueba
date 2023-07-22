import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent {

  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;

  public scannerEnabled: boolean = false;
  public allowedFormats: BarcodeFormat[] = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX
  ];

  public hasDevices: boolean = false;
  public hasPermission: boolean = false;

  public torchEnabled = false;
  public torchAvailable$ = new BehaviorSubject<boolean>(false);

  constructor(
    private _router: Router
  ) {
  }

  public onCamerasFound(cameras: MediaDeviceInfo[]): void {
    this.hasDevices = Boolean(cameras && cameras.length);
    this.cameras = cameras;
    this.onDeviceSelectChange(this.cameras[0].label);
  }

  public onCodeResult(event: string): void {
    console.log(event);
    alert(event);
  }

  public onDeviceSelectChange(cameraLabel: string): void {
    this.cameras.forEach(camera => {
      if(camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        console.log(camera.label);
        this.scannerEnabled = true;
      }
    })
  }

  public onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  public onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  public toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  public back(): void {
    this._router.navigate(['/home']);
  }

}
