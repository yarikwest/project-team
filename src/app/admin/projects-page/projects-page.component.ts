import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {Priority, Project, User} from '../../shared/interfaces';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {ProjectAddFormDialogComponent} from './project-add-form-dialog/project-add-form-dialog.component';
import {ProjectEditFormDialogComponent} from './project-edit-form-dialog/project-edit-form-dialog.component';
import {ProjectDetailsDialogComponent} from './project-details-dialog/project-details-dialog.component';

const ELEMENT_DATA: Project[] = [
  {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
  {id: 1, created: new Date(), name: 'project1', description: 'lorem1', identity: 'ident1', isActive: true, users: []},
  {id: 2, created: new Date(), name: 'project2', description: 'lorem2', identity: 'ident2', isActive: true, users: []},
  {id: 3, created: new Date(), name: 'project3', description: 'lorem3', identity: 'ident3', isActive: true, users: []},
  {id: 4, created: new Date(), name: 'project4', description: 'lorem4', identity: 'ident4', isActive: true, users: []},
];

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'created', 'name', 'identity', 'tasks', 'details', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(ProjectAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Project) => {
      if (result) {
        result.id = this.dataSource.length;
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  openEditForm(element: Priority): void {
    const dialogRef = this.dialog.open(ProjectEditFormDialogComponent, {
      width: '500px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource[element.id] = result;
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
        const index: number = this.dataSource.indexOf(element);
        if (index !== -1) {
          this.dataSource.splice(index, 1);
        }
        this.table.renderRows();
      }
    });
  }

  openDetails(element: Project): void {
    this.dialog.open(ProjectDetailsDialogComponent, {
      width: '75vw',
      data: element
    });
  }

  openTasksList(id: number) {

  }
}
