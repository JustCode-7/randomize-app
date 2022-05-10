import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  error: string = '';
  dragAreaClass: string = '';
  draggedFiles: any;

  constructor() { }

  dropHandler(evt: Event | DragEvent) {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    evt.preventDefault();
    /* if (evt.dataTransfer.items) {
       // Use DataTransferItemList interface to access the file(s)
       for (var i = 0; i < evt.dataTransfer.items.length; i++) {
         // If dropped items aren't files, reject them
         if (evt.dataTransfer.items[i].kind === 'file') {
           var file = evt.dataTransfer.items[i].getAsFile();
           console.log('... file[' + i + '].name = ' + file.name);
         }
       }
     }
     */
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      // console.log(files[0].size, files[0].name, files[0].type);
      this.draggedFiles = files;

      //files[0] // readContent --> Service --> display Content in outputable
    }
  }

  convertFileInput() {
    var reader = new FileReader();

    // Read file into memory as UTF-16
    const filetext = reader.readAsText(this.draggedFiles[0], "UTF-8");
    console.log(filetext)

  }

  onFileChange({ value }: any) {
    value = 0;
    this.convertFileInput()
  }

}
