import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragAndDropComponent} from 'src/app/modules/ramdomize-modul/components/drag-and-drop/drag-and-drop.component';
import {UserInputComponent} from './components/user-input/user-input.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RandomizedNameDialogComponent} from './dialog-templates/randomized-name-dialog.component';
import {OutputListComponent} from './components/output-list/output-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ImportDialogTemplateComponent} from './dialog-templates/import-dialog-template.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RandomizeMainComponent} from "./components/randomize-main/randomize-main.component";


@NgModule({
  declarations: [
    DragAndDropComponent,
    UserInputComponent,
    RandomizedNameDialogComponent,
    OutputListComponent,
    ImportDialogTemplateComponent,
    RandomizeMainComponent,
  ],
  exports: [],
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
    RouterLink,
    RouterOutlet,
    MatTooltipModule,

  ]
})
export class RamdomizeModulModule {
}
