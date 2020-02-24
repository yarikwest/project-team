import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-edit-type-dialog',
  templateUrl: './task-edit-type-dialog.component.html',
  styleUrls: ['./task-edit-type-dialog.component.css']
})
export class TaskEditTypeDialogComponent implements OnInit {

  typeFormControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<TaskEditTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
  }

  ngOnInit() {
    this.typeFormControl = new FormControl(this.data, [Validators.maxLength(50)]
    );
  }

  save() {
    if (this.typeFormControl.invalid) {
      return;
    }

    return this.typeFormControl.value;
  }

}
