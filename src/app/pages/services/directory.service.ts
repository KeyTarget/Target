import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DirectoryService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    console.log(this.http.get('/api/posts'));
    return this.http.get('/api/posts')
    .map((res:Response) => res);
  }

}
