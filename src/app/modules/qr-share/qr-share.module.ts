import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrShareMainComponent} from './components/qr-share-main/qr-share-main.component';
import {GenerateQrCodeComponent} from "./components/generate-qr-code/generate-qr-code.component";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {FormsModule} from "@angular/forms";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CameraViewComponent} from './components/qr-share-main/dialog/camera-view/camera-view.component';
import {MatLegacyDialogModule as MatDialogModule} from "@angular/material/legacy-dialog";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";
import {WebcamModule} from "ngx-webcam";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";


@NgModule({
  declarations: [
    QrShareMainComponent,
    GenerateQrCodeComponent,
    CameraViewComponent
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
  ]
})
export class QrShareModule {
}
