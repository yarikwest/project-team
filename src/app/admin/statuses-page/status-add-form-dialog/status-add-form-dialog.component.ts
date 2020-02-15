import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Status} from '../../../shared/interfaces';

@Component({
  selector: 'app-status-add-form-dialog',
  templateUrl: './status-add-form-dialog.component.html',
  styleUrls: ['./status-add-form-dialog.component.css']
})
export class StatusAddFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<StatusAddFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Status
  ) {
  }

}
