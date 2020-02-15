import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Status} from '../../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-status-edit-form-dialog',
  templateUrl: './status-edit-form-dialog.component.html',
  styleUrls: ['./status-edit-form-dialog.component.css']

})
export class StatusEditFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<StatusEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Status
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      order: new FormControl(this.data.order, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]),
      isActive: new FormControl(this.data.isActive)
    });
  }

  save(): Status {
    if (this.form.invalid) {
      return;
    }

    return {
      id: this.data.id,
      name: this.form.value.name,
      order: this.form.value.order,
      isActive: this.form.value.isActive
    };
  }

}
