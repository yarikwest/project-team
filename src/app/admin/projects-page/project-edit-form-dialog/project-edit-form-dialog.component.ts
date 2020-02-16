import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project, User} from '../../../shared/interfaces';

const ELEMENT_DATA_USERS: User[] = [
  {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'},
  {id: 1, login: 'login1', password: 'password1', firstName: 'first1', lastName: 'last1', email: 'email@o1.pl'},
  {id: 2, login: 'login2', password: 'password2', firstName: 'first2', lastName: 'last2', email: 'email@o2.pl'},
  {id: 3, login: 'login3', password: 'password3', firstName: 'first3', lastName: 'last3', email: 'email@o3.pl'},
  {id: 4, login: 'login4', password: 'password4', firstName: 'first4', lastName: 'last4', email: 'email@o4.pl'},
  {id: 5, login: 'login5', password: 'password5', firstName: 'first5', lastName: 'last5', email: 'email@o5.pl'},
  {id: 6, login: 'login6', password: 'password6', firstName: 'first6', lastName: 'last6', email: 'email@o6.pl'},
];

@Component({
  selector: 'app-project-edit-form-dialog',
  templateUrl: './project-edit-form-dialog.component.html',
  styleUrls: ['./project-edit-form-dialog.component.css']
})
export class ProjectEditFormDialogComponent implements OnInit {

  form: FormGroup;
  allUsers = ELEMENT_DATA_USERS;
  compareUsers = (u1: User, u2: User): boolean => {
    return u1.id === u2.id;
  };

  constructor(
    public dialogRef: MatDialogRef<ProjectEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
        name: [this.data.name, [Validators.required]],
        description: [this.data.description, [Validators.maxLength(255)]],
        isActive: [this.data.isActive],
        users: [this.data.users]
      }
    );
  }

  save(): Project {
    if (this.form.invalid) {
      return;
    }

    return {
      id: this.data.id,
      created: this.data.created,
      identity: this.data.identity,
      name: this.form.value.name,
      description: this.form.value.description,
      isActive: this.form.value.isActive,
      users: this.form.value.users
    };
  }
}
