import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent {
  user: User;

  ngOnInit() {
    this.user = {firstName: "John", lastName: "Smith"};
  }
}