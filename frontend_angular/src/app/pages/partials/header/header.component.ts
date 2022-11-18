import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/MenuItem';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu:Array<MenuItem> = [];

  constructor(private _navigationService:NavigationService) { }

  ngOnInit(): void {
   this.menu =  this._navigationService.getMenu();
  }

}
