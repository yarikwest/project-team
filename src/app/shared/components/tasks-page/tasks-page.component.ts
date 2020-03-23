import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../interfaces';
import {MatDialog} from '@angular/material';
import {TaskDetailsDialogComponent} from './task-details-dialog/task-details-dialog.component';
import {TaskAddFormDialogComponent} from './task-add-form-dialog/task-add-form-dialog.component';
import {TaskService} from '../../services/task.service';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  projectId: number;
  dataSource: Task[] = [];
  statusNameArr: string[];

  constructor(
    private taskService: TaskService,
    private statusService: StatusService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(value => {
      this.projectId = +value.get('projectId');
    });

    this.statusService.getAll().subscribe(value => {
      this.statusNameArr = value.sort((a, b) => a.level - b.level).map(status => status.name);
    });
    this.taskService.getAllByProjectId(this.projectId).subscribe(value => this.dataSource = value);
  }


  openDetails(task: Task): void {
    this.dialog.open(TaskDetailsDialogComponent, {
      width: '50vw',
      data: task
    });
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(TaskAddFormDialogComponent, {
      width: '500px',
      data: this.projectId
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        this.dataSource = this.dataSource.concat(result);
      }
    });
  }
}
