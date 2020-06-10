import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdownMenu.component.html',
  styleUrls: ['./dropdownMenu.component.scss']
})
export class DropdownMenuComponent {
  @Input() menuOptions: MenuOption[];

  constructor(private elRef: ElementRef) {

  }

  ngOnInit() {
    this.elRef.nativeElement.parentElement.style.padding = '0px';
  }

  openedCallback(menuOption: MenuOption) {
    if (menuOption.openedCallback != null) {
      menuOption.openedCallback(menuOption);
    }    
  }

  closedCallback(menuOption: MenuOption) {
    if (menuOption.closedCallback != null) {
      menuOption.closedCallback(menuOption);
    }    
  }

  clickedCallback(menuOption: MenuOption) {
    if (menuOption.clickedCallback != null) {
      menuOption.clickedCallback(menuOption);
    }    
  }
}

export interface MenuOption {
  name: string;
  id: string;
  children?: MenuOption[];
  openedCallback?: MenuCallback;
  closedCallback?: MenuCallback;
  clickedCallback?: MenuCallback;
}

export interface MenuCallback {
  (menuOption: MenuOption): void;
}