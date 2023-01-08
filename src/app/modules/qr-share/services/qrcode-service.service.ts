import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CameraViewComponent} from "../components/qr-share-main/dialog/camera-view/camera-view.component";

@Injectable({
  providedIn: 'root'
})
export class QrcodeServiceService {

  constructor(public dialog: MatDialog) {}

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

  // dont work in firefox
  // choose the right npm - package
  async getClipboardContents() {
    alert("work in progress");
    //const clipboardItems = await navigator.clipboard.read();
    // let text = navigator.clipboard.read();

    /*  for (const clipboardItem of clipboardItems) {

        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          console.log(blob)
        }
      }
      */
    // console.log(text)
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
