import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project, User} from '../../../shared/interfaces';
import {ProjectService} from '../../../shared/services/project.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-project-edit-form-dialog',
  templateUrl: './project-edit-form-dialog.component.html',
  styleUrls: ['./project-edit-form-dialog.component.css']
})
export class ProjectEditFormDialogComponent implements OnInit {

  form: FormGroup;
  allUsers: User[];
  compareUsers = (u1: User, u2: User): boolean => {
    return u1.id === u2.id;
  };

  constructor(
    public projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(value => this.allUsers = value);

    this.form = this.fb.group({
        name: [this.data.name, [Validators.required]],
        description: [this.data.description, [Validators.maxLength(255)]],
        active: [this.data.active],
        users: [this.data.users]
      }
    );
  }

  save(): Project {
    if (this.form.invalid) {
      return;
    }

    const project: Project = {
      ...this.data,
      name: this.form.value.name,
      description: this.form.value.description,
      active: this.form.value.isActive,
      users: this.form.value.users
    };

    this.projectService.update(project).subscribe(result => this.dialogRef.close(result));
  }
}
