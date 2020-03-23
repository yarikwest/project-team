import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../interfaces';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;

  constructor() {
  }

  ngOnInit() {
  }

}

