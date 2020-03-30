import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-add-form-dialog',
  templateUrl: './user-add-form-dialog.component.html',
  styleUrls: ['./user-add-form-dialog.component.css']
})
export class UserAddFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserAddFormDialogComponent>,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      firstName: new FormControl('', [Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      admin: new FormControl(false)
    });
  }

  save(): User {

    if (this.form.invalid) {
      return;
    }

    const user: User = {
      login: this.form.value.login,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      admin: this.form.value.admin
    };

    this.userService.create(user).subscribe(result => this.dialogRef.close(result));
  }
}
