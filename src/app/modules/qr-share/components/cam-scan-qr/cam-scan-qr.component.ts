import {Component} from '@angular/core';
import {QrcodeShareService} from "../../services/qrcode-share.service";

@Component({
  selector: 'app-cam-scan-qr',
  templateUrl: './cam-scan-qr.component.html',
})
export class CamScanQrComponent {
  constructor(public qrShareService: QrcodeShareService) {
  }

}
