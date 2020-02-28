import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Project, User} from '../../../shared/interfaces';
import {ProjectService} from '../../../shared/services/project.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-project-add-form-dialog',
  templateUrl: './project-add-form-dialog.component.html',
  styleUrls: ['./project-add-form-dialog.component.css']
})
export class ProjectAddFormDialogComponent implements OnInit {

  form: FormGroup;
  allUsers: User[];
  compareUsers = (u1: User, u2: User): boolean => {
    return u1.id === u2.id;
  };

  constructor(
    public projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectAddFormDialogComponent>,
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(value => this.allUsers = value);

    this.form = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.maxLength(255)]],
        active: [false],
        users: [[]]
      }
    );
  }

  save(): Project {
    if (this.form.invalid) {
      return;
    }

    const project: Project = {
      name: this.form.value.name,
      description: this.form.value.description,
      active: this.form.value.isActive,
      users: this.form.value.users
    };

    this.projectService.create(project).subscribe(result => this.dialogRef.close(result));
  }
}

