import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {UsersPageComponent} from './users-page/users-page.component';
import {StatusesPageComponent} from './statuses-page/statuses-page.component';
import {PrioritiesPageComponent} from './priorities-page/priorities-page.component';
import {StatusEditFormDialogComponent} from './statuses-page/status-edit-form-dialog/status-edit-form-dialog.component';
import {StatusAddFormDialogComponent} from './statuses-page/status-add-form-dialog/status-add-form-dialog.component';
import {DeleteRowDialogComponent} from './shared/components/delete-row-dialog/delete-row-dialog.component';
import {PriorityAddFormDialogComponent} from './priorities-page/priority-add-form-dialog/priority-add-form-dialog.component';
import {PriorityEditFormDialogComponent} from './priorities-page/priority-edit-form-dialog/priority-edit-form-dialog.component';
import {UserAddFormDialogComponent} from './users-page/user-add-form-dialog/user-add-form-dialog.component';
import {UserEditFormDialogComponent} from './users-page/user-edit-form-dialog/user-edit-form-dialog.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {ProjectAddFormDialogComponent} from './projects-page/project-add-form-dialog/project-add-form-dialog.component';
import {ProjectEditFormDialogComponent} from './projects-page/project-edit-form-dialog/project-edit-form-dialog.component';
import {ProjectDetailsDialogComponent} from './projects-page/project-details-dialog/project-details-dialog.component';
import {TasksPageComponent} from '../shared/components/tasks-page/tasks-page.component';
import {SharedModule} from '../shared/shared.module';
import {MatChipsModule} from '@angular/material';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DeleteRowDialogComponent,
    UsersPageComponent,
    UserAddFormDialogComponent,
    UserEditFormDialogComponent,
    StatusesPageComponent,
    StatusAddFormDialogComponent,
    StatusEditFormDialogComponent,
    PrioritiesPageComponent,
    PriorityAddFormDialogComponent,
    PriorityEditFormDialogComponent,
    ProjectsPageComponent,
    ProjectAddFormDialogComponent,
    ProjectEditFormDialogComponent,
    ProjectDetailsDialogComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'projects', component: ProjectsPageComponent},
          {path: 'projects/:projectId/tasks', component: TasksPageComponent},
          {path: 'users', component: UsersPageComponent},
          {path: 'statuses', component: StatusesPageComponent},
          {path: 'priorities', component: PrioritiesPageComponent}
        ]
      }
    ]),
    SharedModule,
    MatChipsModule,
  ],
  exports: [
    RouterModule,
  ],
  entryComponents: [
    DeleteRowDialogComponent,
    UserAddFormDialogComponent,
    UserEditFormDialogComponent,
    StatusAddFormDialogComponent,
    StatusEditFormDialogComponent,
    PriorityAddFormDialogComponent,
    PriorityEditFormDialogComponent,
    ProjectAddFormDialogComponent,
    ProjectEditFormDialogComponent,
    ProjectDetailsDialogComponent,
  ]
})
export class AdminModule {
}
