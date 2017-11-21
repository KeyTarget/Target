import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '@app/pages/services/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styles: []
})
export class DirectoryComponent implements OnInit {

  //instanciate users to an empty array

  users : any = [];

  constructor(private directoryService: DirectoryService) { }

  ngOnInit() {
    //retrive users from the API
    this.directoryService.getAllUsers().subscribe(users => {
      this.users = users;
    })
  }

}
