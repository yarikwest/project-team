import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Priority, Status, Task, User} from '../../../interfaces';
import {TaskChangeUserDialogComponent} from '../task-edit/task-change-user-dialog/task-change-user-dialog.component';
import {TaskChangePriorityDialogComponent} from '../task-edit/task-change-priority-dialog/task-change-priority-dialog.component';
import {TaskEditTypeDialogComponent} from '../task-edit/task-edit-type-dialog/task-edit-type-dialog.component';
import {TaskEditDescriptionDialogComponent} from '../task-edit/task-edit-description-dialog/task-edit-description-dialog.component';
import {TaskChangeStatusDialogComponent} from '../task-edit/task-change-status-dialog/task-change-status-dialog.component';

@Component({
  selector: 'app-task-details-dialog',
  templateUrl: './task-details-dialog.component.html',
  styleUrls: ['./task-details-dialog.component.css']
})
export class TaskDetailsDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TaskDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {
  }

  ngOnInit() {
  }

  changeUser() {
    const dialogRef = this.dialog.open(TaskChangeUserDialogComponent, {
      data: this.data.user
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        // save into task
        this.data.user = result;
      }
    });
  }

  changePriority() {
    const dialogRef = this.dialog.open(TaskChangePriorityDialogComponent, {
      data: this.data.priority
    });

    dialogRef.afterClosed().subscribe((result: Priority) => {
      if (result) {
        // save into task
        this.data.priority = result;
      }
    });
  }

  editType() {
    const dialogRef = this.dialog.open(TaskEditTypeDialogComponent, {
      data: this.data.type
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        // save into task
        this.data.type = result;
      }
    });
  }

  editDescription() {
    const dialogRef = this.dialog.open(TaskEditDescriptionDialogComponent, {
      width: '400px',
      data: this.data.description
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        // save into task
        this.data.description = result;
      }
    });
  }

  changeStatus() {
    const dialogRef = this.dialog.open(TaskChangeStatusDialogComponent, {
      data: this.data.status
    });

    dialogRef.afterClosed().subscribe((result: Status) => {
      if (result) {
        // save into task
        this.data.status = result;
      }
    });
  }
}
