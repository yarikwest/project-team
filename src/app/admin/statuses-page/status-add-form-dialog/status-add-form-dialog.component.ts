import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Status} from '../../../shared/interfaces';

@Component({
  selector: 'app-status-add-form-dialog',
  templateUrl: './status-add-form-dialog.component.html',
  styleUrls: ['./status-add-form-dialog.component.css']
})
export class StatusAddFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<StatusAddFormDialogComponent>,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      level: new FormControl(1, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]),
      active: new FormControl(false)
    });
  }

  save(): Status {
    if (this.form.invalid) {
      return;
    }

    return {
      name: this.form.value.name,
      level: this.form.value.level,
      active: this.form.value.active
    };
  }

}
