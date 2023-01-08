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
    document.execCommand("paste")
  }


  scanQRCodeWithCam() {
    // alert("work in progress");
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      console.log("Let's get this party started")
      this.getCameraAcc();
    }
  }

  getCameraAcc() {
    this.readQRCode()
  }

  private readQRCode() {
    this.dialog.open(CameraViewComponent)

  }

}
