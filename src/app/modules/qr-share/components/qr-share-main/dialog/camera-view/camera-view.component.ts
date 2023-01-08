import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.scss'],
})
export class CameraViewComponent implements OnInit{

  controls = document.querySelector('.controls');
  cameraOptions = document.querySelector('.video-options>select');
  video = document.querySelector('video');
  canvas = document.querySelector('canvas');
  screenshotImage = document.querySelector('img');
  streamStarted = false;

  constraints = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440
      },
    }
  };

    ngOnInit(): void {
      this.getCameraSelection().then(value => console.log("selection loaded"));
    }

   async getCameraSelection() {
     let devices = await navigator.mediaDevices.enumerateDevices();
     let videoDevices = devices.filter(device => device.kind === 'videoinput');
     let options = videoDevices.map(videoDevice => {
       return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
     });
     this.cameraOptions!.innerHTML = options.join('');
   };


  playprivateOnclick() {
    if (this.streamStarted) {
      this.video!.play();
      return;
    }
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
      let updatedConstraints = {
        ... (this.constraints),
        deviceId: {
          exact: this.cameraOptions!.nodeValue
        }
      };
      this.startStream(updatedConstraints).then(value => console.log("stream started => " + value));
    }
  };

 async startStream(constraint: MediaStreamConstraints | undefined) {
    await navigator.mediaDevices.getUserMedia(constraint)
      .then((stream) =>{
        this.handleStream(stream);
      } )
      .catch(reason => console.log(reason));

  };

  handleStream(stream: MediaProvider | null){
    this.video!.srcObject = stream;
    this.streamStarted = true;
  };

}
