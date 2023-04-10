import {Component} from '@angular/core';
import {QrcodeShareService} from "../../services/qrcode-share.service";

@Component({
  selector: 'app-scan-qr-from-image',
  templateUrl: './scan-qr-from-image.component.html',
})
export class ScanQrFromImageComponent {


  constructor(public qrShareService: QrcodeShareService) {
  }

}
