import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  _randomizedName: string = '';
  _names: string[] = [];

  constructor() { }

  setNamesToJson() {
    return JSON.stringify(this._names.join(","));
  }

  getJsonNamesList() {
    return localStorage.getItem('names');
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
  public clear() {
    localStorage.clear();
  }
}
