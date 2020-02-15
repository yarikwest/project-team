import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-add-form-dialog',
  templateUrl: './user-add-form-dialog.component.html',
  styleUrls: ['./user-add-form-dialog.component.css']
})
export class UserAddFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserAddFormDialogComponent>
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      firstName: new FormControl('', [Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  save() {

    if (this.form.invalid) {
      return;
    }

    const createdUser: User = {
      login: this.form.value.login,
      password: [...Array(16)].map(i => (~~(Math.random() * 36)).toString(36)).join(''), // generate random password string
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email
    };

    return createdUser;
  }
}
