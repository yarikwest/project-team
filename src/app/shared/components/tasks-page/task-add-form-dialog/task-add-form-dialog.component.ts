import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Priority, Task, User} from '../../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-task-add-form-dialog',
  templateUrl: './task-add-form-dialog.component.html',
  styleUrls: ['./task-add-form-dialog.component.css']
})
export class TaskAddFormDialogComponent implements OnInit {

  form: FormGroup;
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
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskAddFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
        theme: ['', [Validators.required]],
        type: ['', [Validators.required]],
        priority: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(255)]]
      }
    );
  }

  save(): Task {
    if (this.form.invalid) {
      return;
    }

    return {
      ...this.data,
      created: new Date(),
      theme: this.form.value.theme,
      priority: this.form.value.priority,
      type: this.form.value.type,
      description: this.form.value.description
    };
  }

}
