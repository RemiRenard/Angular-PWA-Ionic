import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Repository } from '../model/Repository';

@Component({
  selector: 'app-github',
  templateUrl: 'github.page.html',
  styleUrls: ['github.page.scss']
})
export class GithubPage implements OnInit {

  username: string = '';
  isUsernameEmpty: boolean = true;
  repositories: Repository[];

  constructor(public rest: RestService) { }

  ngOnInit() {
  }

  getRepositories(){
    this.isUsernameEmpty = !this.username.length || /^\s*$/.test(this.username.length));
    if(this.isUsernameEmpty){
      return;
    }
    this.rest.getRepositories(this.username).subscribe((repositories: Repository[]) => {
      // Set the variable as true to hide the spinner
      this.isUsernameEmpty = true;
      this.repositories = repositories;
    });
  }
}
