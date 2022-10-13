import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrShareMainComponent} from './components/qr-share-main/qr-share-main.component';
import {GenerateQrCodeComponent} from "./components/generate-qr-code/generate-qr-code.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    QrShareMainComponent,
    GenerateQrCodeComponent
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
  ]
})
export class QrShareModule {
}
