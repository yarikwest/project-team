import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {Priority} from '../../shared/interfaces';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {PriorityAddFormDialogComponent} from './priority-add-form-dialog/priority-add-form-dialog.component';
import {PriorityEditFormDialogComponent} from './priority-edit-form-dialog/priority-edit-form-dialog.component';

const ELEMENT_DATA: Priority[] = [
  {id: 0, name: 'Highest', isActive: true},
  {id: 1, name: 'Critical', isActive: true},
  {id: 2, name: 'Alarming', isActive: true},
  {id: 3, name: 'Low', isActive: true},
  {id: 4, name: 'Lowest', isActive: true},
];

@Component({
  selector: 'app-priorities-page',
  templateUrl: './priorities-page.component.html',
  styleUrls: ['./priorities-page.component.css']
})
export class PrioritiesPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'isActive', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(PriorityAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Priority) => {
      if (result) {
        result.id = this.dataSource.length;
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  openEditForm(element: Priority): void {
    const dialogRef = this.dialog.open(PriorityEditFormDialogComponent, {
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

  openDeleteMsg(element: Priority) {
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
