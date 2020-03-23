import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-edit-description-dialog',
  templateUrl: './task-edit-description-dialog.component.html',
  styleUrls: ['./task-edit-description-dialog.component.css']
})
export class TaskEditDescriptionDialogComponent implements OnInit {

  descriptionFormControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<TaskEditDescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
  }

  ngOnInit() {
    this.descriptionFormControl = new FormControl(this.data, [Validators.maxLength(255)]
    );
  }

  save() {
    if (this.descriptionFormControl.invalid) {
      return;
    }

    return this.descriptionFormControl.value;
  }

}
