import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss']
})
export class InputTableComponent {
  value = 'Clear me';
  names: string[] = ["Jack", "Jill", "Jane"];

  constructor(private fb: FormBuilder
  ) {
  }

  addName(name: string) {
    this.names.push(name);

  }
  removeName(name: string) {
    this.names.pop();
  }

}
