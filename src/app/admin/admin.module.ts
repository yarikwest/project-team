import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {UsersPageComponent} from './users-page/users-page.component';
import {StatusesPageComponent} from './statuses-page/statuses-page.component';
import {PrioritiesPageComponent} from './priorities-page/priorities-page.component';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {StatusEditFormDialogComponent} from './statuses-page/status-edit-form-dialog/status-edit-form-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StatusAddFormDialogComponent} from './statuses-page/status-add-form-dialog/status-add-form-dialog.component';
import {DeleteRowDialogComponent} from './shared/components/delete-row-dialog/delete-row-dialog.component';
import {PriorityAddFormDialogComponent} from './priorities-page/priority-add-form-dialog/priority-add-form-dialog.component';
import {PriorityEditFormDialogComponent} from './priorities-page/priority-edit-form-dialog/priority-edit-form-dialog.component';
import {UserAddFormDialogComponent} from './users-page/user-add-form-dialog/user-add-form-dialog.component';
import {UserEditFormDialogComponent} from './users-page/user-edit-form-dialog/user-edit-form-dialog.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    UsersPageComponent,
    StatusesPageComponent,
    PrioritiesPageComponent,
    StatusAddFormDialogComponent,
    StatusEditFormDialogComponent,
    DeleteRowDialogComponent,
    PriorityAddFormDialogComponent,
    PriorityEditFormDialogComponent,
    UserAddFormDialogComponent,
    UserEditFormDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'users', component: UsersPageComponent},
          {path: 'statuses', component: StatusesPageComponent},
          {path: 'priorities', component: PrioritiesPageComponent},
          // {path: '', component: ''}
        ]
      }
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    StatusAddFormDialogComponent,
    StatusEditFormDialogComponent,
  ],
  entryComponents: [
    StatusAddFormDialogComponent,
    StatusEditFormDialogComponent,
    DeleteRowDialogComponent,
    PriorityAddFormDialogComponent,
    PriorityEditFormDialogComponent,
    UserAddFormDialogComponent,
    UserEditFormDialogComponent,

  ]
})
export class AdminModule {

}
