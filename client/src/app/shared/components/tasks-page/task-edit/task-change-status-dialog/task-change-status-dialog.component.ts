import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Status} from '../../../../interfaces';
import {StatusService} from '../../../../services/status.service';

@Component({
  selector: 'app-task-change-status-dialog',
  templateUrl: './task-change-status-dialog.component.html',
  styleUrls: ['./task-change-status-dialog.component.css']
})
export class TaskChangeStatusDialogComponent implements OnInit {

  selectedStatus: Status = Object.assign({}, this.data);

  statuses: Status[];

  compareStatuses = this.statusService.compareStatuses;

  constructor(
    private statusService: StatusService,
    public dialogRef: MatDialogRef<TaskChangeStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Status,
  ) {
  }

  ngOnInit() {
    this.statusService.getAll().subscribe(value => this.statuses = value);
  }

}
