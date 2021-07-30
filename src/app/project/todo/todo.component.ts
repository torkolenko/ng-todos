import { Component, Input } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { ViewEncapsulation } from '@angular/core';
import { Todo } from '../../models/todo';
import { plainToClass } from 'class-transformer';
import { DataService } from "../../services/data.service";

@Component ({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TodoComponent {

  @Input() todo: Todo;
  

  constructor ( 
    private _requestsService: RequestsService,
    private _dataService: DataService
  ) {}

  callPatchOne( cardID:number, todoID:number ) {
    
    this._requestsService.patchOne( cardID, todoID ).subscribe( data => {
        data = plainToClass(Todo, data);
        console.log(data);
        this._dataService.updateTodo(data as Todo);
    })
  }
}