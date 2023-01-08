import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CameraViewComponent} from "../components/qr-share-main/dialog/camera-view/camera-view.component";

@Injectable({
  providedIn: 'root'
})
export class QrcodeServiceService {

  constructor(public dialog: MatDialog) {
  }

  openNewTabWithQRValue(value: string) {
    let input = new String(value);
    if (input.startsWith("http")) {
      window.open(value, '_blank')!.focus();
    } else {
      window.open("https://www.google.de/search?q=" + value, '_blank')!.focus();
    }
  }


  getQRCodeFromClipboard() {
    this.getClipboardContents();
  }

  getClipboardContents() {
    //use https://www.npmjs.com/package/qr-scanner and scan from image
    // image = document.execCommand("paste")
  }


  scanQRCodeWithCam() {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      this.useCamera();
    }
  }

  useCamera() {
    this.dialog.open(CameraViewComponent)
  }

}
