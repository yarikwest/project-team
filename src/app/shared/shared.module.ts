import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

import {FilterTasksPipe} from './filter-tasks.pipe';
import {TasksPageComponent} from './components/tasks-page/tasks-page.component';
import {TaskCardComponent} from './components/tasks-page/task-card/task-card.component';
import {TaskDetailsDialogComponent} from './components/tasks-page/task-details-dialog/task-details-dialog.component';
import {TaskAddFormDialogComponent} from './components/tasks-page/task-add-form-dialog/task-add-form-dialog.component';
import {TaskEditTypeDialogComponent} from './components/tasks-page/task-edit/task-edit-type-dialog/task-edit-type-dialog.component';
import {TaskChangeUserDialogComponent} from './components/tasks-page/task-edit/task-change-user-dialog/task-change-user-dialog.component';
import {TaskChangeStatusDialogComponent} from './components/tasks-page/task-edit/task-change-status-dialog/task-change-status-dialog.component';
import {TaskChangePriorityDialogComponent} from './components/tasks-page/task-edit/task-change-priority-dialog/task-change-priority-dialog.component';
import {TaskEditDescriptionDialogComponent} from './components/tasks-page/task-edit/task-edit-description-dialog/task-edit-description-dialog.component';
import {StatusService} from './services/status.service';
import {PriorityService} from './services/priority.service';
import {UserService} from './services/user.service';
import {ProjectService} from './services/project.service';

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
    TaskChangeStatusDialogComponent,
    TaskAddFormDialogComponent

  ],
  providers: [
    UserService,
    StatusService,
    ProjectService,
    PriorityService,
  ],
  imports: [
    HttpClientModule,
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
    TaskAddFormDialogComponent,

  ]

})
export class SharedModule {

}
