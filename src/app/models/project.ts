import { Type } from 'class-transformer';
import { Todo } from './todo';
import 'reflect-metadata';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Project {

  id: number;
  
  title: string;

  @Type(() => Todo)
  todos: Todo[];
}

