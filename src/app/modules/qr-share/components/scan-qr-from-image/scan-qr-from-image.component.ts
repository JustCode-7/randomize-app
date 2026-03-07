import {Component} from '@angular/core';
import {QrcodeShareService} from "../../services/qrcode-share.service";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-scan-qr-from-image',
  templateUrl: './scan-qr-from-image.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgIf,
    NgStyle,
    MatListModule,
    NgForOf
  ]
})
export class ScanQrFromImageComponent {


  constructor(public qrShareService: QrcodeShareService) {
  }

}
