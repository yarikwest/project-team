import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-row-dialog',
  templateUrl: './delete-row-dialog.component.html',
  styleUrls: ['./delete-row-dialog.component.css']
})
export class DeleteRowDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) {
  }

  ngOnInit() {
  }



}
