import { Injectable } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private menu:Array<MenuItem> = [];

  constructor() {
    this.menu.push(
      new MenuItem("Home","/",true,[],true),
      new MenuItem("The Basics","#",false,[
        new MenuItem("Software Setup","#",false,[],true),
        new MenuItem("GIT","/git-notes",false,[],true)
      ], false),
      new MenuItem("Web Essentials","#",false,[
        new MenuItem("HTML","/html-notes",false,[],true),
        new MenuItem("CSS","/css-notes",false,[],true),
        new MenuItem("JS","/js-notes",false,[],true)
      ], false),
    )
  }

  public getMenu():Array<MenuItem>{
    return this.menu;
  }

}
