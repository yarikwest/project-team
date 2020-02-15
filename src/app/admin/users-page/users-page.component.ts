import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {User} from '../../shared/interfaces';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {UserAddFormDialogComponent} from './user-add-form-dialog/user-add-form-dialog.component';
import {UserEditFormDialogComponent} from './user-edit-form-dialog/user-edit-form-dialog.component';

const ELEMENT_DATA: User[] = [
  {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'},
  {id: 1, login: 'login1', password: 'password1', firstName: 'first1', lastName: 'last1', email: 'email@o1.pl'},
  {id: 2, login: 'login2', password: 'password2', firstName: 'first2', lastName: 'last2', email: 'email@o2.pl'},
  {id: 3, login: 'login3', password: 'password3', firstName: 'first3', lastName: 'last3', email: 'email@o3.pl'},
  {id: 4, login: 'login4', password: 'password4', firstName: 'first4', lastName: 'last4', email: 'email@o4.pl'},
  {id: 5, login: 'login5', password: 'password5', firstName: 'first5', lastName: 'last5', email: 'email@o5.pl'},
  {id: 6, login: 'login6', password: 'password6', firstName: 'first6', lastName: 'last6', email: 'email@o6.pl'},
];

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'login', 'fullName', 'email', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(UserAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        result.id = this.dataSource.length;
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  openEditForm(element: User): void {
    const dialogRef = this.dialog.open(UserEditFormDialogComponent, {
      width: '500px',
      data: element
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        this.dataSource[element.id] = result;
        this.table.renderRows();
      }
    });
  }

  openDeleteMsg(element: User) {
    const dialogRef = this.dialog.open(DeleteRowDialogComponent, {
      width: '300px',
      data: element.id,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index: number = this.dataSource.indexOf(element);
        if (index !== -1) {
          this.dataSource.splice(index, 1);
        }
        this.table.renderRows();
      }
    });
  }
}
