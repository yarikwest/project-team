import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Priority} from '../../../../interfaces';
import {PriorityService} from '../../../../services/priority.service';

@Component({
  selector: 'app-task-change-priority-dialog',
  templateUrl: './task-change-priority-dialog.component.html',
  styleUrls: ['./task-change-priority-dialog.component.css']
})
export class TaskChangePriorityDialogComponent implements OnInit {

  selectedPriority: Priority = Object.assign({}, this.data);

  priorities: Priority[];

  comparePriorities = this.priorityService.comparePriorities;

  constructor(
    private priorityService: PriorityService,
    public dialogRef: MatDialogRef<TaskChangePriorityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Priority,
  ) {
  }

  ngOnInit() {
    this.priorityService.getAll().subscribe(value => this.priorities = value);
  }

}
