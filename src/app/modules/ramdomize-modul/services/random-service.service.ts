import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RandomizedNameDialogComponent } from '../randomized-name-dialog/randomized-name-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  _randomizedName: string = '';
  _names: string[] = ["Jack", "Jill", "Jane"];
  jsonKey = "names";
  dialogConfig = new MatDialogConfig()

  constructor(
    private dialog: MatDialog) {
    this.dialogConfig.position = {
      top: '15%'
    };
  }

  clearNames() {
    this._names = [];
  }

  getParsedJSON() {
    return JSON.parse(this.localStorageGetItemByKey()!);
  }

  public setItemsToCache() {
    localStorage.setItem(this.jsonKey, JSON.stringify(this._names));
  }

  public getItemFromCache() {
    return this.localStorageGetItemByKey();
  }

  private localStorageGetItemByKey() {
    return localStorage.getItem(this.jsonKey);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clearCache() {
    localStorage.clear();
  }

  reloadFromCache() {
    if (this.getParsedJSON() != null) {
      this._names = [];
      this._names.push(...this.getParsedJSON());
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
      this.dialog.open(RandomizedNameDialogComponent, this.dialogConfig);
      this.removeName(this._names[shuffle]);
    }
  }
}
