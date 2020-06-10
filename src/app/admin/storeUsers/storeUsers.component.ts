import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'store-users',
  templateUrl: './storeUsers.component.html',
  styleUrls: ['./storeUsers.component.scss']
})
export class StoreUsersComponent {
  users: User[] = [
    {firstName: "John", lastName: "Stone"},
    {firstName: "Ponnappa", lastName: "Priya"},
    {firstName: "Mia", lastName: "Wong"},
    {firstName: "Peter", lastName: "Stanbridge"},
    {firstName: "Natalie", lastName: "Lee-Walsh"},
    {firstName: "John", lastName: "Stone"},
    {firstName: "Ponnappa", lastName: "Priya"},
    {firstName: "Mia", lastName: "Wong"},
    {firstName: "Peter", lastName: "Stanbridge"},
    {firstName: "Natalie", lastName: "Lee-Walsh"},
    {firstName: "John", lastName: "Stone"},
    {firstName: "Ponnappa", lastName: "Priya"},
    {firstName: "Mia", lastName: "Wong"},
    {firstName: "Peter", lastName: "Stanbridge"},
    {firstName: "Natalie", lastName: "Lee-Walsh"},
    {firstName: "John", lastName: "Stone"},
    {firstName: "Ponnappa", lastName: "Priya"},
    {firstName: "Mia", lastName: "Wong"},
    {firstName: "Peter", lastName: "Stanbridge"},
    {firstName: "Natalie", lastName: "Lee-Walsh"}
  ];
  columnsToDisplay = ['firstName', 'lastName'];
}