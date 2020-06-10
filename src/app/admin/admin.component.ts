import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuOption, MenuCallback } from '../dropdownMenu/dropdownMenu.component';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  mobileQuery: MediaQueryList;
  menuOptions: MenuOption[] = [
    {name: "User Profile", id: "user-profile", clickedCallback: this.changeContent.bind(this)},
    {name: "Menus", id: "menus", clickedCallback: this.changeContent.bind(this)},
    {name: "Schedule", id: "schedule", clickedCallback: this.changeContent.bind(this)},
    {name: "Store Options", id: "store-options", children: [
      {name: "Users", id: "store-users", clickedCallback: this.changeContent.bind(this)},
      {name: "Account", id: "store-account", clickedCallback: this.changeContent.bind(this)},
      {name: "Settings", id: "store-settings", clickedCallback: this.changeContent.bind(this)}
    ]},
    {name: "Support", id: "support"},
  ]
  @ViewChild(MatSidenavContainer) sideNav: MatSidenavContainer;

  private mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private route: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.mobileQuery.matches) {
        this.sideNav.open();
        //this.changeDetectorRef.detectChanges();
      }
    });    
  }
  
  changeContent(callback: MenuOption) {
    this.router.navigate(["./" + callback.id], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}