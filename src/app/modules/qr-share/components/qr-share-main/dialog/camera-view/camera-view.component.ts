import {Component, OnInit} from '@angular/core';
import QrScanner from "qr-scanner";
import {QrcodeServiceService} from "../../../../services/qrcode-service.service";
import {MatLegacyDialogRef as MatDialogRef} from "@angular/material/legacy-dialog";

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.scss'],
})
export class CameraViewComponent implements OnInit {
  localVideo: HTMLVideoElement = document.querySelector('#myVidPlayer')!;
  qrDataResult: string = "";
  qrScanner: any = null;
  img: HTMLImageElement | null = document.querySelector('#myImage');
  $scannerStarted = false;
  $stopAndOpen: string = "close window";
  $btnstopcolor: any = "btn-info";
  $scannerNotNeeded = false;

  constructor(public qrcodeService: QrcodeServiceService, private dialogRef: MatDialogRef<CameraViewComponent>) {
  }

  ngOnInit() {
    if ('mediaDevices' in navigator) {
      this.streamVideo();
    }
  }

  streamVideo() {
    const video: HTMLVideoElement = document.querySelector('#myVidPlayer')!;
    //Core
    window.navigator.mediaDevices.getUserMedia({video: true})
      .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
          video.play();
          this.localVideo = video;
        };
      })
      .catch(() => {
        alert('You have give browser the permission to run Webcam ;( ');
      });
  }

  readQRFromVideo() {
    this.qrScanner = new QrScanner(
      this.localVideo,
      result => this.handleResult(result),
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        maxScansPerSecond: 60
      },
    );
    this.qrScanner.start();
    this.$scannerStarted = true;
  }

  closeWindowOrStopScan() {
    if (this.qrDataResult !== "") {
      this.qrcodeService.openNewTabWithQRValue(this.qrDataResult);
    }
    if (this.qrScanner !== null) {
      this.qrScanner.stop();
    }
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
    });
  }

  private handleResult(result: QrScanner.ScanResult) {
    // console.log(result)
    // console.log(result.data)
    if (result != null && result.data !== "") {
      this.$stopAndOpen = "stop scan and open in new tab";
      this.$btnstopcolor = "btn-outline-success";
      this.$scannerNotNeeded = true;
    }
    this.qrDataResult = result.data;
  }
}
