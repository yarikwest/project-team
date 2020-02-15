import {Component, OnInit, ViewChild} from '@angular/core';
import {Status} from '../../shared/interfaces';
import {MatDialog, MatTable} from '@angular/material';
import {StatusAddFormDialogComponent} from './status-add-form-dialog/status-add-form-dialog.component';
import {StatusEditFormDialogComponent} from './status-edit-form-dialog/status-edit-form-dialog.component';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';

const ELEMENT_DATA: Status[] = [
  {id: 0, name: 'ok', isActive: true, order: 0},
  {id: 1, name: 'to do', isActive: true, order: 1},
  {id: 2, name: 'doing', isActive: true, order: 2},
  {id: 3, name: 'done', isActive: true, order: 3},
  {id: 4, name: 'to do', isActive: true, order: 4},
  {id: 5, name: 'doing', isActive: true, order: 5},
  {id: 6, name: 'done', isActive: true, order: 6},
  {id: 7, name: 'to do', isActive: true, order: 7},
  {id: 8, name: 'doing', isActive: true, order: 8},
  {id: 9, name: 'done', isActive: false, order: 9},
];

@Component({
  selector: 'app-statuses-page',
  templateUrl: './statuses-page.component.html',
  styleUrls: ['./statuses-page.component.css']
})
export class StatusesPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'order', 'name', 'isActive', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(StatusAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Status) => {
      if (result) {
        result.id = this.dataSource.length;
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  openEditForm(element: Status): void {
    const dialogRef = this.dialog.open(StatusEditFormDialogComponent, {
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

  openDeleteMsg(element: Status) {
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
}
