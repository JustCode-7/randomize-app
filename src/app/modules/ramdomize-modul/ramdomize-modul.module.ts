import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RandomizeInputComponent} from './randomize-input/randomize-input.component';
import {DragAndDropComponent} from 'src/app/modules/ramdomize-modul/components/drag-and-drop/drag-and-drop.component';
import {InputTableComponent} from './components/input-table/input-table.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RandomizedNameDialogComponent} from './dialog-templates/randomized-name-dialog.component';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {OutputTableComponent} from './components/output-table/output-table.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ImportDialogTemplateComponent} from './dialog-templates/import-dialog-template.component';


@NgModule({
  declarations: [
    RandomizeInputComponent,
    DragAndDropComponent,
    InputTableComponent,
    RandomizedNameDialogComponent,
    OutputTableComponent,
    ImportDialogTemplateComponent,
  ],
  exports: [
    RandomizeInputComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule,

  ]
})
export class RamdomizeModulModule {
}
