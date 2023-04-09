import {Component} from '@angular/core';
import {QrcodeShareService} from "../../services/qrcode-share.service";

@Component({
  selector: 'app-qr-share-main',
  templateUrl: './qr-share-main.component.html',
})
export class QrShareMainComponent {
  constructor(public qrcodeService: QrcodeShareService) {
  }

}
