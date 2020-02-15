import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../../shared/interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit-form-dialog',
  templateUrl: './user-edit-form-dialog.component.html',
  styleUrls: ['./user-edit-form-dialog.component.css']
})
export class UserEditFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(this.data.login, [Validators.required, Validators.maxLength(30)]),
      firstName: new FormControl(this.data.firstName, [Validators.maxLength(30)]),
      lastName: new FormControl(this.data.lastName, [Validators.maxLength(30)]),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    });
  }

  save() {

    if (this.form.invalid) {
      return;
    }

    const editedUser: User = {
      login: this.form.value.login,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      id: this.data.id,
      password: this.data.password
    };

    return editedUser;
  }
}
