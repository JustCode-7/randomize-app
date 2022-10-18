import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrcodeServiceService {

  constructor() {
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
    alert("work in progress");
    // this.getCameraAcc();
    // if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    //   console.log("Let's get this party started")
    // }
  }

  getCameraAcc() {
    navigator.mediaDevices.getUserMedia({video: true});
  }

}
