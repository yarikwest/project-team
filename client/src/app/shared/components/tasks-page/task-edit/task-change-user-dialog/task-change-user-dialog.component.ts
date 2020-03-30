import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Task, User} from '../../../../interfaces';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-task-change-user-dialog',
  templateUrl: './task-change-user-dialog.component.html',
  styleUrls: ['./task-change-user-dialog.component.css']
})
export class TaskChangeUserDialogComponent implements OnInit {

  selectedUser: User = {...this.data.user};

  users: User[] = this.data.project.users;

  compareUsers = this.userService.compareUsers;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<TaskChangeUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {
  }

  ngOnInit() {
  }

}
