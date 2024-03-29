import {Component, HostListener} from '@angular/core';
import {ImportDialogTemplateComponent} from '../../dialog-templates/import-dialog-template.component';
import {RandomServiceService} from '../../services/random-service.service';
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
})
export class DragAndDropComponent {
  names: string[] = [];
  randomizedService: RandomServiceService;
  fileReader: FileReader;
  dialog: any;
  dragAndDropColor: string = "orange";
  protected readonly visualViewport = visualViewport;

  constructor(randomizedService: RandomServiceService,
              dialog: MatDialog) {
    this.randomizedService = randomizedService;
    this.fileReader = new FileReader();
    this.dialog = dialog;
  }

  @HostListener('dragover', ['$event']) onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
    evt.preventDefault();
    evt.stopPropagation();
    // Dragover listener --> maybe color-change or something like this
    this.dragAndDropColor = "green";
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    // Dragover listener --> maybe color-change or something like this
    this.dragAndDropColor = "orange";
  }

  @HostListener('drop', ['$event'])
  public ondrop(evt: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any; }; }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.readFileInput(evt.dataTransfer.files);
  }

  openExplorerForfileImport(file: HTMLInputElement) {
    file.click();
    file.onchange = () => {
      const selectedFile = file.files;
      this.readFileInput(selectedFile);
    }
  }

  private readFileInput(files: any) {
    if (files.length > 0) {
      const matDialogRef = this.dialog.open(ImportDialogTemplateComponent);
      let file = files[0];
      this.fileReader.readAsText(file);
      this.fileReader.onload = () => {
        matDialogRef.afterClosed().subscribe(() => {
          this.names = this.getFileContentAsStringArray(this.randomizedService._style)!;
          this.notifyService();
        });

      };

    }
  }

  private notifyService() {
    this.randomizedService.clearNames();
    this.randomizedService._names.push(...this.names);
    this.randomizedService.setItemsToCache();
  }

  private getFileContentAsStringArray(style: string) {
    let arr;
    if (style == "line") {
      arr = this.fileReader.result?.valueOf().toString().split(/\r?\n|\r/g)!;
    }
    if (style == "csv") {
      arr = this.fileReader.result?.valueOf().toString().split(",")!;
    }
    if (style == "wild") {
      arr = this.fileReader.result?.valueOf().toString().split(/[\s,]+/)!;
    }
    return arr;
  }
}
