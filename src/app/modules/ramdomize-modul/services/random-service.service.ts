import {Injectable} from '@angular/core';
import {MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig} from '@angular/material/legacy-dialog';
import {RandomizedNameDialogComponent} from '../dialog-templates/randomized-name-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  _randomizedName: string = '';
  _names: string[] = ["Jack", "Jill", "Jane"];
  jsonKey = "names";
  dialogConfig = new MatDialogConfig();
  _style: string = '';

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
      var shuffle = Math.floor(Math.random() * (this._names.length));
      this._randomizedName = this._names[shuffle];
      this.dialog.open(RandomizedNameDialogComponent, this.dialogConfig);
      this.removeName(this._names[shuffle]);
    }
  }

  setImportStyle(style: any) {
    if (style == "line") {
      this._style = "line";
    }
    if (style == "csv") {
      this._style = "csv";
    }
    if (style == "wild") {
      this._style = "wild";
    }


  }

  private localStorageGetItemByKey() {
    return localStorage.getItem(this.jsonKey);
  }
}
