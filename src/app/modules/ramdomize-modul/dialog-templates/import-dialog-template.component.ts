import {Component} from '@angular/core';
import {RandomServiceService} from '../services/random-service.service';

@Component({
  selector: 'app-import-dialog',
  template: `
    <h1 mat-dialog-title>Which format has your text-file?</h1>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close="" (click)="this.randomService.setImportStyle(line)">just line by line
      </button>
      <button mat-button mat-dialog-close="" (click)="this.randomService.setImportStyle(csv)">it's CSV</button>
      <button mat-button mat-dialog-close="" (click)="this.randomService.setImportStyle(wild)">I don't know</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class ImportDialogTemplateComponent {
  line: any = "line";
  csv: any = "csv";
  wild: any = "wild";

  constructor(public randomService:
                RandomServiceService
  ) {
  }
}
