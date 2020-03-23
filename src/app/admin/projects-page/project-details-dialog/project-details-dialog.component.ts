import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../../shared/interfaces';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-dialog.component.html',
  styleUrls: ['./project-details-dialog.component.css']
})
export class ProjectDetailsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) { }

  ngOnInit() {
  }

}
