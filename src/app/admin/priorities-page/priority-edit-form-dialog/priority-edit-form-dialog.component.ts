import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Priority} from '../../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-priority-edit-form-dialog',
  templateUrl: './priority-edit-form-dialog.component.html',
  styleUrls: ['./priority-edit-form-dialog.component.css']
})
export class PriorityEditFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PriorityEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Priority
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      isActive: new FormControl(this.data.isActive)
    });
  }

  save(): Priority {
    if (this.form.invalid) {
      return;
    }

    return {
      id: this.data.id,
      name: this.form.value.name,
      isActive: this.form.value.isActive
    };
  }
}
