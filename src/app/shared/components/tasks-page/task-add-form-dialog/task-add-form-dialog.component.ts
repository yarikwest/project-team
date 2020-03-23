import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Priority, Project, Status, Task} from '../../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TaskService} from '../../../services/task.service';
import {PriorityService} from '../../../services/priority.service';
import {StatusService} from '../../../services/status.service';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'app-task-add-form-dialog',
  templateUrl: './task-add-form-dialog.component.html',
  styleUrls: ['./task-add-form-dialog.component.css']
})
export class TaskAddFormDialogComponent implements OnInit {

  form: FormGroup;
  priorities: Priority[];
  statuses: Status[];
  project: Project;
  comparePriorities = this.priorityService.comparePriorities;
  compareStatuses = this.statusService.compareStatuses;


  constructor(
    public taskService: TaskService,
    public dialogRef: MatDialogRef<TaskAddFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private fb: FormBuilder,
    private priorityService: PriorityService,
    private statusService: StatusService,
    private projectService: ProjectService,
  ) {
  }

  ngOnInit() {
    this.projectService.getById(this.data).subscribe(value => this.project = value);
    this.priorityService.getAll().subscribe(value => this.priorities = value);
    this.statusService.getAll().subscribe(value => this.statuses = value);

    this.form = this.fb.group({
        theme: ['', [Validators.required]],
        type: [''],
        priority: ['', [Validators.required]],
        status: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(255)]]
      }
    );
  }

  save(): Task {
    if (this.form.invalid) {
      return;
    }

    const task: Task = {
      project: this.project,
      theme: this.form.value.theme,
      type: this.form.value.type,
      priority: this.form.value.priority,
      status: this.form.value.status,
      description: this.form.value.description
    };

    this.taskService.create(task).subscribe(result => this.dialogRef.close(result));
  }

}
