import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";
import QrScanner from "qr-scanner";

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.scss'],
})
export class CameraViewComponent implements OnInit {
  localVideo: HTMLVideoElement = document.querySelector('#myVidPlayer')!;
  img: HTMLImageElement | null = document.querySelector('#myImage');
  public showWebcam = true;
  public webcamImage!: WebcamImage;
  sysImage = '';
  public multipleWebcamsAvailable = false;
  public errors: WebcamInitError[] = [];
  public deviceId: string | boolean | undefined;
  imageHidden = true;
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 1024},
    height: {ideal: 576}
  };

  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  ngOnInit() {
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
      WebcamUtil.getAvailableVideoInputs()
        .then((mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
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
        alert('You have give browser the permission to run Webcam and mic ;( ');
      });
  }

  readQRFromVideo() {
    const qrScanner = new QrScanner(
      this.localVideo,
      result => console.log('decoded qr code:', result),
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        maxScansPerSecond: 60
      },
    );
    qrScanner.start();
  }

  ///OLD ///

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
  }

  cameraWasSwitched(deviceId: string) {
    this.deviceId = deviceId;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  public triggerSnapshot(): void {
    this.imageHidden = false;
    this.trigger.next();
    this.captureQRCodeData()
  }

  public captureQRCodeData() {
    // @ts-ignore
    QrScanner.scanImage(this.img, {returnDetailedScanResult: true})
      .then(result => console.log(result))
      .catch(error => console.log(error || 'No QR code found.'));
  }

  public showNextWebcam(directionOrDeviceId: boolean | string | undefined): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId!);
  }

  ///OLD - END///
}
