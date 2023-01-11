import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrShareMainComponent} from './components/qr-share-main/qr-share-main.component';
import {GenerateQrCodeComponent} from "./components/generate-qr-code/generate-qr-code.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CameraViewComponent} from './components/qr-share-main/dialog/camera-view/camera-view.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {WebcamModule} from "ngx-webcam";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";


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
