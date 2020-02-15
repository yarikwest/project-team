import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Status} from '../../../shared/interfaces';

@Component({
  selector: 'app-status-edit-form-dialog',
  templateUrl: './status-edit-form-dialog.component.html',
  styleUrls: ['./status-edit-form-dialog.component.css']

})
export class StatusEditFormDialogComponent implements OnInit {

  editedData: Status;

  constructor(
    public dialogRef: MatDialogRef<StatusEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Status
  ) {
  }

  ngOnInit(): void {
    this.editedData = Object.assign({}, this.data);
  }

}
