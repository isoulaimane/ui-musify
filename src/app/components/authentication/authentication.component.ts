import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public login: string;
  public password: string;
  public user: User = new User();



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.addUser('deboule', 'deboule', 'Eboule', 'Daphné');
    this.checkAuthentication();

  }

  checkAuthentication() {

    const params = new HttpParams()
      .set('login', 'deboule')
      .set('password', 'deboule');
    this.http.get('http://localhost:8083/authentication/check', {params}).subscribe(
      data => {
      console.log(data);
    })
  }

  addUser(login: string, password: string, firstName: string, lastName: string) {
    this.user.login = login;
    this.user.password = password;
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.http.post('http://localhost:8083/authentication/add', this.user).subscribe(
      data => {
        console.log(data);
      })
  }

}
