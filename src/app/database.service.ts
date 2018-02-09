import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DatabaseService {
  url = 'http://localhost:3000/list';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url)
      .do(res => console.log(res));
  }

}
