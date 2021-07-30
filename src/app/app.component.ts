import { Component, OnInit } from "@angular/core";
import { RequestsService } from "./services/requests.service";
import { DataService } from "./services/data.service";
import { plainToClass } from 'class-transformer';
import { Project } from "./models/project";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit { 
  
  projects: Project[] = this._dataService.getCards();

  constructor( 
    private _requestsService: RequestsService, 
    private _dataService: DataService,
    private dialog: MatDialog ) {}
  
  fileNameDialogRef: MatDialogRef<FormComponent>;
  
  openDialog() {
    this.fileNameDialogRef = this.dialog.open(FormComponent, {
      width: "382px"
    });
  }

  ngOnInit() {
    this._requestsService.getAll().subscribe( data => {
      data = plainToClass(Project, data);
      for (let one_data of data as Project[]) {
        this._dataService.addProject(one_data as Project);
      }
    });
  }
}
