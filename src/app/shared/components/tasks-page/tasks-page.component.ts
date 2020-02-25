import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Status, Task} from '../../interfaces';
import {MatDialog} from '@angular/material';
import {TaskDetailsDialogComponent} from './task-details-dialog/task-details-dialog.component';
import {TaskAddFormDialogComponent} from './task-add-form-dialog/task-add-form-dialog.component';

const STATUS_DATA: Status[] = [
  {id: 1, name: 'to do', isActive: true, order: 1},
  {id: 2, name: 'doing', isActive: true, order: 2},
  {id: 3, name: 'done', isActive: true, order: 3},
];
const ELEMENT_DATA: Task[] = [
  {
    id: 0,
    created: new Date(),
    description: 'description0',
    theme: 'theme0',
    priority: {id: 0, name: 'Highest', isActive: true, color: '#ff0000'},
    status: {id: 1, name: 'to do', isActive: true, order: 1},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'bug',
  },
  {
    id: 1,
    created: new Date(),
    description: 'description1',
    theme: 'theme1',
    priority: {id: 1, name: 'Critical', isActive: true, color: '#ffaa00'},
    status: {id: 2, name: 'doing', isActive: true, order: 2},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'error',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 2,
    created: new Date(),
    description: 'description2',
    theme: 'theme2',
    priority: {id: 2, name: 'Alarming', isActive: true, color: '#ffff00'},
    status: {id: 3, name: 'done', isActive: true, order: 3},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'bug',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 0,
    created: new Date(),
    description: 'description0',
    theme: 'theme0',
    priority: {id: 0, name: 'Highest', isActive: true, color: '#ff0000'},
    status: {id: 1, name: 'to do', isActive: true, order: 1},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'bug',
    user: {id: 0, login: 'login0', password: 'password0', firstName: '', lastName: '', email: 'email@o0.pl'}
  },
  {
    id: 1,
    created: new Date(),
    description: 'description1',
    theme: 'theme1',
    priority: {id: 1, name: 'Critical', isActive: true, color: '#ffaa00'},
    status: {id: 2, name: 'doing', isActive: true, order: 2},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'error',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 2,
    created: new Date(),
    description: 'description2',
    theme: 'theme2',
    priority: {id: 2, name: 'Alarming', isActive: true, color: '#ffff00'},
    status: {id: 3, name: 'done', isActive: true, order: 3},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'bug',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 3,
    created: new Date(),
    description: 'description3',
    theme: 'theme3',
    priority: {id: 4, name: 'Lowest', isActive: true, color: '#00aaff'},
    status: {id: 1, name: 'to do', isActive: true, order: 1},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'feature',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 0,
    created: new Date(),
    description: 'description0',
    theme: 'theme0',
    priority: {id: 0, name: 'Highest', isActive: true, color: '#ff0000'},
    status: {id: 1, name: 'to do', isActive: true, order: 1},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'bug',
    user: {id: 0, login: 'login0', password: 'password0', firstName: '', lastName: '', email: 'email@o0.pl'}
  },
  {
    id: 1,
    created: new Date(),
    description: 'description1',
    theme: 'theme1',
    priority: {id: 1, name: 'Critical', isActive: true, color: '#ffaa00'},
    status: {id: 2, name: 'doing', isActive: true, order: 2},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'error',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 2,
    created: new Date(),
    description: 'description2',
    theme: 'theme2',
    priority: {id: 2, name: 'Alarming', isActive: true, color: '#ffff00'},
    status: {id: 3, name: 'done', isActive: true, order: 3},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'bug',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  },
  {
    id: 3,
    created: new Date(),
    description: 'description3',
    theme: 'theme3',
    priority: {id: 4, name: 'Lowest', isActive: true, color: '#00aaff'},
    status: {id: 1, name: 'to do', isActive: true, order: 1},
    project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
    type: 'feature',
    user: {id: 0, login: 'login0', password: 'password0', firstName: 'first0', lastName: 'last0', email: 'email@o0.pl'}
  }
];

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  projectId: number;
  data = ELEMENT_DATA;
  statusNameArr = STATUS_DATA.map(value => value.name);

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(value => {
      this.projectId = +value.get('projectId');
    });
  }


  openDetails(task: Task): void {
    this.dialog.open(TaskDetailsDialogComponent, {
      width: '50vw',
      data: task
    });
  }

  openAddForm(): void {
    const dialogRef = this.dialog.open(TaskAddFormDialogComponent, {
      width: '500px',
      data: {
        status: {id: 1, name: 'to do', isActive: true, order: 1},
        project: {id: 0, created: new Date(), name: 'project0', description: 'lorem0', identity: 'ident0', isActive: true, users: []},
      }
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        result.id = this.data.length;
        this.data.push(result);
      }
    });
  }
}
