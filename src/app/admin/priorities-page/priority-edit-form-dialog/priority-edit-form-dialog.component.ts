import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Priority} from '../../../shared/interfaces';

@Component({
  selector: 'app-priority-edit-form-dialog',
  templateUrl: './priority-edit-form-dialog.component.html',
  styleUrls: ['./priority-edit-form-dialog.component.css']
})
export class PriorityEditFormDialogComponent implements OnInit {
  editedData: Priority;

  constructor(
    public dialogRef: MatDialogRef<PriorityEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Priority
  ) {
  }

  ngOnInit() {
    this.editedData = Object.assign({}, this.data);
  }

}
