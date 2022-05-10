import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RandomizedNameDialogComponent } from '../randomized-name-dialog/randomized-name-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  _randomizedName: string = '';
  _names: string[] = ["Jack", "Jill", "Jane"];

  constructor(
    private dialog: MatDialog) { }

  setNamesToJson() {
    return JSON.stringify(this._names);
  }

  getNamesToJson(json: any) {
    return JSON.parse(json);
  }
  getJsonNamesList() {
    const json = localStorage.getItem('names');
    return this.getNamesToJson(json);
  }

  public setItem() {
    localStorage.setItem('names', this.setNamesToJson());
  }

  public getItem() {
    return localStorage.getItem('names')
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clearCache() {
    localStorage.clear();
  }

  reloadFromCache() {
    if (this.getJsonNamesList() != null) {
      console.log(this.getJsonNamesList());
      this._names = [];
      this._names.push(...this.getJsonNamesList());
    }
  }

  removeName(name: string) {
    if (name.length > 0) {
      const indexToRemove = this._names.indexOf(name, 0);
      if (indexToRemove > -1) {
        this._names.splice(indexToRemove, 1);
      }
    }
  }

  randomize() {
    if (this._names.length > 0) {
      var shuffle = Math.floor(Math.random() * (this._names.length - 1));
      this._randomizedName = this._names[shuffle];
      this.dialog.open(RandomizedNameDialogComponent);
      this.removeName(this._names[shuffle]);
    }
  }
}
