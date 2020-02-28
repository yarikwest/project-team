import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {Priority} from '../../shared/interfaces';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {PriorityAddFormDialogComponent} from './priority-add-form-dialog/priority-add-form-dialog.component';
import {PriorityEditFormDialogComponent} from './priority-edit-form-dialog/priority-edit-form-dialog.component';
import {PriorityService} from '../../shared/services/priority.service';

@Component({
  selector: 'app-priorities-page',
  templateUrl: './priorities-page.component.html',
  styleUrls: ['./priorities-page.component.css']
})
export class PrioritiesPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'color', 'active', 'action'];
  dataSource: Priority[];

  constructor(
    public dialog: MatDialog,
    private priorityService: PriorityService
  ) {
  }

  ngOnInit() {
    this.priorityService.getAll().subscribe(value => this.dataSource = value);
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(PriorityAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Priority) => {
      if (result) {
        this.priorityService.create(result).subscribe(value => {
          this.dataSource.push(value);
          this.table.renderRows();
        });
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
        this.priorityService.update(result).subscribe(value => {
          const index = this.dataSource.indexOf(element);
          this.dataSource[index] = value;
          this.table.renderRows();
        });
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
        this.priorityService.remove(element.id).subscribe(() => {
          const index: number = this.dataSource.indexOf(element);
          if (index !== -1) {
            this.dataSource.splice(index, 1);
          }
          this.table.renderRows();
        });
      }
    });
  }

}
