import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomizeInputComponent } from './randomize-input/randomize-input.component';
import { DragAndDropComponent } from 'src/app/modules/ramdomize-modul/components/drag-and-drop/drag-and-drop.component';
import { InputTableComponent } from './components/input-table/input-table.component';



@NgModule({
  declarations: [
    RandomizeInputComponent,
    DragAndDropComponent,
    InputTableComponent,
  ],
  imports: [
    CommonModule,

  ]
})
export class RamdomizeModulModule { }
