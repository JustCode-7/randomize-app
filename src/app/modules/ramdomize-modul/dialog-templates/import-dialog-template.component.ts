import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RandomServiceService } from '../services/random-service.service';

@Component({
  selector: 'app-import-dialog',
  template: `
    <h1 mat-dialog-title>Which format has your text-file?</h1>
<mat-dialog-content>
    content
</mat-dialog-content>
<mat-dialog-actions>
    <button mat-button mat-dialog-close="" (click)="this.randomService.setImportStyle(line)">Just Line by
        Line</button>
    <button mat-button mat-dialog-close="" (click)="this.randomService.setImportStyle(csv)">it's definatly CSV</button>
    <button mat-button mat-dialog-close="" (click)="this.randomService.setImportStyle(wild)">I don't know</button>
</mat-dialog-actions> `,
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
