import {Component, Input} from '@angular/core';
import {QrcodeServiceService} from "../../../services/qrcode-service.service";

@Component({
  selector: 'app-cam-scan-qr',
  templateUrl: './cam-scan-qr.component.html',
})
export class CamScanQrComponent {

  @Input() qrcodeService!: QrcodeServiceService;
}
