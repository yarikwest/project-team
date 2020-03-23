import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {Project} from '../../shared/interfaces';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {ProjectAddFormDialogComponent} from './project-add-form-dialog/project-add-form-dialog.component';
import {ProjectEditFormDialogComponent} from './project-edit-form-dialog/project-edit-form-dialog.component';
import {ProjectDetailsDialogComponent} from './project-details-dialog/project-details-dialog.component';
import {ProjectService} from '../../shared/services/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'created', 'name', 'identity', 'tasks', 'details', 'action'];
  dataSource: Project[];

  constructor(
    public dialog: MatDialog,
    public projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.projectService.getAll().subscribe(value => this.dataSource = value);
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(ProjectAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Project) => {
      if (result) {
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  openEditForm(element: Project): void {
    const dialogRef = this.dialog.open(ProjectEditFormDialogComponent, {
      width: '500px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.indexOf(element);
        this.dataSource[index] = result;
        this.table.renderRows();
      }
    });
  }

  openDeleteMsg(element: Project) {
    const dialogRef = this.dialog.open(DeleteRowDialogComponent, {
      width: '300px',
      data: element.id,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.remove(element.id).subscribe(() => {
          const index: number = this.dataSource.indexOf(element);
          if (index !== -1) {
            this.dataSource.splice(index, 1);
          }
          this.table.renderRows();
        });
      }
    });
  }

  openDetails(element: Project): void {
    this.dialog.open(ProjectDetailsDialogComponent, {
      width: '75vw',
      data: element
    });
  }
}
