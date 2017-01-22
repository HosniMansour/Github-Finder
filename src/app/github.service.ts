import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id='01f951530bea4c7aeb9a';
  private client_secret='31d1761ee36cb537b8e097926fea98f3f0c45281';

  constructor(
    private _http: Http
  ) {
    this.username = 'HosniMansour';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+"?client_id="+this.client_id+"&client_secret="+this.client_secret).map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret).map(res => res.json());
  }
  updateUser(username:string){
    this.username = username;
  }

}
