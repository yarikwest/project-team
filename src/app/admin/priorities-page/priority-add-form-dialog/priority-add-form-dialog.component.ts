import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Priority} from '../../../shared/interfaces';

@Component({
  selector: 'app-priority-add-form-dialog',
  templateUrl: './priority-add-form-dialog.component.html',
  styleUrls: ['./priority-add-form-dialog.component.css']
})
export class PriorityAddFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PriorityAddFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Priority
  ) { }

  ngOnInit() {
  }

}
