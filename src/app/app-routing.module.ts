import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomizeInputComponent } from './modules/ramdomize-modul/randomize-input/randomize-input.component';

const routes: Routes = [
  { path: '', component: RandomizeInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
