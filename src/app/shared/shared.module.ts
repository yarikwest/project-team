import {NgModule} from '@angular/core';
import {TaskCardComponent} from './components/tasks-page/task-card/task-card.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {TasksPageComponent} from './components/tasks-page/tasks-page.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterTasksPipe} from './filter-tasks.pipe';
import {TaskDetailsDialogComponent} from './components/tasks-page/task-details-dialog/task-details-dialog.component';
import {TaskChangeUserDialogComponent} from './components/tasks-page/task-edit/task-change-user-dialog/task-change-user-dialog.component';
import {TaskChangePriorityDialogComponent} from './components/tasks-page/task-edit/task-change-priority-dialog/task-change-priority-dialog.component';
import {TaskEditTypeDialogComponent} from './components/tasks-page/task-edit/task-edit-type-dialog/task-edit-type-dialog.component';
import {TaskEditDescriptionDialogComponent} from './components/tasks-page/task-edit/task-edit-description-dialog/task-edit-description-dialog.component';
import {TaskChangeStatusDialogComponent} from './components/tasks-page/task-edit/task-change-status-dialog/task-change-status-dialog.component';

@NgModule({
  declarations: [
    TasksPageComponent,
    TaskCardComponent,
    FilterTasksPipe,
    TaskDetailsDialogComponent,
    TaskChangeUserDialogComponent,
    TaskChangePriorityDialogComponent,
    TaskEditTypeDialogComponent,
    TaskEditDescriptionDialogComponent,
    TaskChangeStatusDialogComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
  ],
  entryComponents: [
    TaskDetailsDialogComponent,
    TaskChangeUserDialogComponent,
    TaskChangePriorityDialogComponent,
    TaskEditTypeDialogComponent,
    TaskEditDescriptionDialogComponent,
    TaskChangeStatusDialogComponent,

  ]

})
export class SharedModule {

}
