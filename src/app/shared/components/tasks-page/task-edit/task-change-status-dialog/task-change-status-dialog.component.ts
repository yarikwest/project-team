import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Priority, Status} from '../../../../interfaces';

@Component({
  selector: 'app-task-change-status-dialog',
  templateUrl: './task-change-status-dialog.component.html',
  styleUrls: ['./task-change-status-dialog.component.css']
})
export class TaskChangeStatusDialogComponent implements OnInit {

  selectedStatus: Status = Object.assign({}, this.data);

  statuses: Status[] = [
    {id: 0, name: 'ok', isActive: true, order: 0},
    {id: 1, name: 'to do', isActive: true, order: 1},
    {id: 2, name: 'doing', isActive: true, order: 2},
    {id: 3, name: 'done', isActive: true, order: 3},
  ];

  compareStatuses = (s1: Status, s2: Status): boolean => {
    return s1.id === s2.id;
  };

  constructor(
    public dialogRef: MatDialogRef<TaskChangeStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Status,
  ) {
  }

  ngOnInit() {
  }

}
