import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Priority} from '../../../../interfaces';

@Component({
  selector: 'app-task-change-priority-dialog',
  templateUrl: './task-change-priority-dialog.component.html',
  styleUrls: ['./task-change-priority-dialog.component.css']
})
export class TaskChangePriorityDialogComponent implements OnInit {

  selectedPriority: Priority = Object.assign({}, this.data);

  priorities: Priority[] = [
    {id: 0, color: '#ff0000', name: 'Highest', isActive: true},
    {id: 1, color: '#ffaa00', name: 'Critical', isActive: true},
    {id: 2, color: '#ffff00', name: 'Alarming', isActive: true},
    {id: 3, color: '#00ff00', name: 'Low', isActive: true},
    {id: 4, color: '#00aaff', name: 'Lowest', isActive: true},
  ];

  comparePriorities = (p1: Priority, p2: Priority): boolean => {
    return p1.id === p2.id;
  };

  constructor(
    public dialogRef: MatDialogRef<TaskChangePriorityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Priority,
  ) {
  }

  ngOnInit() {
  }

}
