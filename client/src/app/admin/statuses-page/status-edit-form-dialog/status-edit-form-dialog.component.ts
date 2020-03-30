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
      level: new FormControl(this.data.level, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]),
      active: new FormControl(this.data.active)
    });
  }

  save(): Status {
    if (this.form.invalid) {
      return;
    }

    return {
      id: this.data.id,
      name: this.form.value.name,
      level: this.form.value.level,
      active: this.form.value.active
    };
  }

}
