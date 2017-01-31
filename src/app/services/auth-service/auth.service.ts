import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserModel } from '../../components/auth/user.model';
import { LoginModel } from '../../components/auth/login.model';


@Injectable()
export class AuthService {
  // only for testing purpose
  private baseUrl = 'http://localhost:8000';
  public registerUrl = this.baseUrl + '/auth/registration/';
  public loginUrl = this.baseUrl + '/auth/login/';

  constructor(public http: Http) {}

  register(user: UserModel) {
    const options = AuthService.buildOptions();

    return this.http.post(this.registerUrl, user, options)
        .map( (res: Response) => res.json() )
        .catch( AuthService.handleError);
  }

  login(loginDetails: LoginModel) {
    const options = AuthService.buildOptions();

    return this.http.post(this.loginUrl, loginDetails, options)
      .map( (res: Response) => res.json() )
      .catch( AuthService.handleError);
  }

  static buildOptions() {
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  static handleError (error: Response | any) {
    let err = [];
    if (error instanceof Response) {
      err = error.json() || '';
    } else {
      err = error.message ? error.message : error.toString();
    }
    return Observable.throw(err);
  }

}
