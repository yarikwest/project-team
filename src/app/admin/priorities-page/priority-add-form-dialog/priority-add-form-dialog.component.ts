import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Priority} from '../../../shared/interfaces';

@Component({
  selector: 'app-priority-add-form-dialog',
  templateUrl: './priority-add-form-dialog.component.html',
  styleUrls: ['./priority-add-form-dialog.component.css']
})
export class PriorityAddFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PriorityAddFormDialogComponent>,
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('#ffffff'),
      isActive: new FormControl(false)
    });
  }

  save(): Priority {
    if (this.form.invalid) {
      return;
    }

    return {
      name: this.form.value.name,
      color: this.form.value.color,
      isActive: this.form.value.isActive
    };
  }

}
