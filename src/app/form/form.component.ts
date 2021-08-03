import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { DataService } from "..//services/data.service";
import { Project } from "../models/project";
import { Todo } from "../models/todo";
import { plainToClass } from 'class-transformer';

@Component ({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FormComponent implements OnInit {
    
  form: FormGroup;
    
  selectedValue: string = "hidden";

  constructor(    
    private fb: FormBuilder,
    
    private _requestsservice: RequestsService,

    private dialogRef: MatDialogRef<FormComponent>,

    private _dataService: DataService,
    
  ){}
  
  projects = this._dataService.getCards();

  trackByPrj(index: number, iterProject: Project): number {
    return iterProject.id;
  }

  changeValueInput(value: number | string) {
    if (value === 0) {
      this.selectedValue = "visible";
    } else {
      this.selectedValue = "hidden";
    }
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      text: ["", [ Validators.required ] ],
      title: [ "" ],
      new_title: []
    })
  }
  
  async callPutOne(projectId: number | string, textTodo: string, titleNewCategory: string) {
    const controls = this.form.controls;

    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
      
    if ( projectId === "" ) {
      alert( "Чтобы создать задачу, необходимо выбрать категорию" )
    
    } else if ( this.selectedValue === 'visible' &&  titleNewCategory === '' ) {
      alert( "Введите текст задачи" );
    
    } else {
      
      this._requestsservice.putOne( projectId, titleNewCategory, textTodo ).subscribe( response => {
        if ( projectId === 0 ) {
          response = plainToClass(Project, response);
          this._dataService.addProject(response as Project);
        
        } else {
          response = plainToClass(Todo, response);
          this._dataService.addTodo(response as Todo);
        }
      })
      
      this.onNoClick();
    }
  }
  onNoClick() {
    this.dialogRef.close ();
  }
}