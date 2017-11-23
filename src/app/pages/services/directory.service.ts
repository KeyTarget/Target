import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DirectoryService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('/api/users')
    .map((res:Response) => res);
  }

}
