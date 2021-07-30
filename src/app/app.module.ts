import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { TodoComponent } from './project/todo/todo.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from './services/requests.service';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import 'reflect-metadata';

const appRoutes: Routes = [
  { path: '', component:AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TodoComponent,
    FormComponent
  ],
  imports: [
    [ BrowserModule, ReactiveFormsModule ],
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ RequestsService, DataService ], 
  bootstrap: [ AppComponent ],
  entryComponents: [ FormComponent ]
})
export class AppModule { }
