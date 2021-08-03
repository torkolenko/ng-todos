import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {
  getUrl = environment.getUrl;
  postUrl = environment.postUrl;

  constructor(private myHttp: HttpClient) {}

  getAll() {
    return this.myHttp.get( this.getUrl );
  }

  patchOne( cardID:number, todoID:number ) {
    const options = { "todo_id": todoID };
    return this.myHttp.patch( `${this.getUrl}/${cardID}/todo/${todoID}`, options );
  }

  putOne( id:string | number, title:string, textTodo:string ) {
    const options = { "id": id, "title": title, "text": textTodo };
    return this.myHttp.post( this.postUrl, options );
  }
}
