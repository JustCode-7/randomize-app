import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fadeInItems } from '@angular/material/menu';
import { RandomizedNameDialogComponent } from '../../randomized-name-dialog/randomized-name-dialog.component';
import { RandomServiceService } from '../../services/random-service.service';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss']
})
export class InputTableComponent implements OnInit {
  value = 'Fill me with text';
  names: string[] = ["Jack", "Jill", "Jane"];
  index: number = 0;
  ind1 = 1;
  randomizedService: RandomServiceService;

  constructor(randomizedService: RandomServiceService,
    private dialog: MatDialog) {
    this.randomizedService = randomizedService;
  }
  ngOnInit(): void {
    if (this.randomizedService.getItem()?.length == 0) {
      this.notifySevice();
    } else {
      this.reloadFromCache();
    }
  }

  notifySevice() {
    this.randomizedService._names = this.names;
    this.randomizedService.setItem();

  }

  addName(name: string) {
    this.names.push(name);
    this.notifySevice();
    this.value = "";
  }
  removeName(name: string) {
    const indexToRemove = this.names.indexOf(name, 0);
    if (indexToRemove > -1) {
      this.names.splice(indexToRemove, 1);
    }
  }

  clearBrowserCache() {
    this.randomizedService.clear();
  }

  randomizeMitEntnahme() {
    var shuffle = Math.floor(Math.random() * (this.names.length - 1));
    this.randomizedService._randomizedName = this.names[shuffle];
    this.dialog.open(RandomizedNameDialogComponent);
    this.removeName(this.names[shuffle]);
  }

  randomizeOhneEntnahme() {
    var shuffle = Math.floor(Math.random() * (this.names.length - 1));
    this.randomizedService._randomizedName = this.names[shuffle];
    this.dialog.open(RandomizedNameDialogComponent);
    // namen in view rot und als randomized kennzeichnen
  }

  reloadFromCache() {
    if (this.randomizedService.getJsonNamesList() != null) {
      this.names = [];
      const arr = this.randomizedService.getJsonNamesList()!.replace("\"", "").split(",");
      arr.forEach(element => {
        this.names.push(element.replace("\"", ""));
      });
    }
  }

}
