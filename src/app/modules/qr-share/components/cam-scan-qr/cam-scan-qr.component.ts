import {Component} from '@angular/core';
import {QrcodeShareService} from "../../services/qrcode-share.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cam-scan-qr',
  templateUrl: './cam-scan-qr.component.html',
  standalone: true,
  imports: [
    MatButtonModule
  ]
})
export class CamScanQrComponent {
  constructor(public qrShareService: QrcodeShareService) {
  }

}
