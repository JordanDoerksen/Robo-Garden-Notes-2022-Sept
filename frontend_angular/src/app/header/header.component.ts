import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/MenuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu:Array<MenuItem> = [];

  constructor() { }

  ngOnInit(): void {
    this.menu.push(
      new MenuItem("Home","/",true,[]),
      new MenuItem("The Basics","#",false,[
        new MenuItem("Software Setup","#",false,[]),
        new MenuItem("GIT","/git-notes",false,[])
      ]),
      new MenuItem("Web Essentials","#",false,[
        new MenuItem("HTML","/html-notes",false,[]),
        new MenuItem("CSS","/css-notes",false,[]),
        new MenuItem("JS","/js-notes",false,[])
      ]),
    )
  }

}
