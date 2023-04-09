import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RandomizeInputComponent} from './randomize-input/randomize-input.component';
import {DragAndDropComponent} from 'src/app/modules/ramdomize-modul/components/drag-and-drop/drag-and-drop.component';
import {InputTableComponent} from './components/input-table/input-table.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RandomizedNameDialogComponent} from './dialog-templates/randomized-name-dialog.component';
import {OutputTableComponent} from './components/output-table/output-table.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ImportDialogTemplateComponent} from './dialog-templates/import-dialog-template.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


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
