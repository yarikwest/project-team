import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {User} from '../../shared/interfaces';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {UserAddFormDialogComponent} from './user-add-form-dialog/user-add-form-dialog.component';
import {UserEditFormDialogComponent} from './user-edit-form-dialog/user-edit-form-dialog.component';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'login', 'fullName', 'email', 'admin', 'action'];
  dataSource: User[];

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(value => this.dataSource = value);
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(UserAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
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
        const index = this.dataSource.indexOf(element);
        this.dataSource[index] = result;
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
        this.userService.remove(element.id).subscribe(() => {
          const index: number = this.dataSource.indexOf(element);
          if (index !== -1) {
            this.dataSource.splice(index, 1);
          }
          this.table.renderRows();
        });
      }
    });
  }
}
