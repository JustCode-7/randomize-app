import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrShareMainComponent} from './components/qr-share-main/qr-share-main.component';
import {GenerateQrCodeComponent} from "./components/generate-qr-code/generate-qr-code.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CameraViewComponent} from './components/cam-scan-qr/camera-view/camera-view.component';
import {WebcamModule} from "ngx-webcam";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {CamScanQrComponent} from './components/cam-scan-qr/cam-scan-qr.component';
import {MatTabsModule} from "@angular/material/tabs";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ScanQrFromImageComponent} from './components/scan-qr-from-image/scan-qr-from-image.component';


@NgModule({
  declarations: [
    QrShareMainComponent,
    GenerateQrCodeComponent,
    CameraViewComponent,
    CamScanQrComponent,
    ScanQrFromImageComponent
  ],
  exports: [
    QrShareMainComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatDialogModule,
    MatRadioModule,
    WebcamModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    RouterLink,
    RouterOutlet,
  ]
})
export class QrShareModule {
}
