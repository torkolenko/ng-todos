import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ViewEncapsulation } from '@angular/core';
import { Project } from '../models/project';
import { Todo } from '../models/todo';

@Component ({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {

  constructor( private _dataService: DataService ) {}

  projects = this._dataService.getCards();

  trackByPrj (index: number, iterProject: Project): number {
    return iterProject.id;
  }

  trackByTodo (index: number, iterTodo: Todo): number {
    return iterTodo.id;
  }
}