import { Component, HostListener } from '@angular/core';
import { RandomServiceService } from '../../services/random-service.service';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  names: string[] = [];
  randomizedService: RandomServiceService;
  fileReader: FileReader;

  constructor(randomizedService: RandomServiceService) {
    this.randomizedService = randomizedService;
    this.fileReader = new FileReader();
  }

  @HostListener('dragover', ['$event']) onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
    evt.preventDefault();
    evt.stopPropagation();
    // Dragover listener --> maybe color-change or something like this
  }

  @HostListener('drop', ['$event']) public ondrop(evt: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any; }; }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.readFileInput(evt.dataTransfer.files);
  }

  private readFileInput(files: any) {
    if (files.length > 0) {
      let file = files[0];
      this.fileReader.readAsText(file);
      this.fileReader.onload = (e) => {
        this.names = this.getFileContentAsStringArray();
        this.notifyService();
      };

    }
  }
  private notifyService() {
    this.randomizedService.clearNames();
    this.randomizedService._names.push(... this.names);
    this.randomizedService.setItemsToCache();
  }

  private getFileContentAsStringArray() {
    let arr = this.fileReader.result?.valueOf().toString().split(/[\s,]+/)!;
    return arr;
  }

}
