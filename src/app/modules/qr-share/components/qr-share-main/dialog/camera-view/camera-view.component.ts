import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.scss'],
})
export class CameraViewComponent implements OnInit {
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
    }
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }

  cameraWasSwitched(deviceId: string) {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  public triggerSnapshot(): void {
    this.imageHidden = false;
    this.trigger.next();
  }

  public showNextWebcam(directionOrDeviceId: boolean | string | undefined): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId!);
  }
}
