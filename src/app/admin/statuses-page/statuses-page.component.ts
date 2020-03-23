import {Component, OnInit, ViewChild} from '@angular/core';
import {Status} from '../../shared/interfaces';
import {MatDialog, MatTable} from '@angular/material';
import {StatusAddFormDialogComponent} from './status-add-form-dialog/status-add-form-dialog.component';
import {StatusEditFormDialogComponent} from './status-edit-form-dialog/status-edit-form-dialog.component';
import {DeleteRowDialogComponent} from '../shared/components/delete-row-dialog/delete-row-dialog.component';
import {StatusService} from '../../shared/services/status.service';

@Component({
  selector: 'app-statuses-page',
  templateUrl: './statuses-page.component.html',
  styleUrls: ['./statuses-page.component.css']
})
export class StatusesPageComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'level', 'active', 'action'];
  dataSource: Status[];

  constructor(
    public dialog: MatDialog,
    private statusService: StatusService
  ) {
  }

  ngOnInit() {
    this.statusService.getAll().subscribe(statuses => this.dataSource = statuses);
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(StatusAddFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Status) => {
      if (result) {
        this.statusService.create(result).subscribe(status => {
          this.dataSource.push(status);
          this.table.renderRows();
        });
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
        this.statusService.update(result).subscribe(status => {
          const index = this.dataSource.indexOf(element);
          this.dataSource[index] = status;
          this.table.renderRows();
        });
      }
    });
  }

  openDeleteMsg(element: Status) {
    const dialogRef = this.dialog.open(DeleteRowDialogComponent, {
      width: '300px',
      data: element.id,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.statusService.remove(element.id).subscribe(() => {
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
