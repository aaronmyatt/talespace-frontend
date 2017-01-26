import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserModel } from '../../components/auth/user.model';


@Injectable()
export class AuthService {
  // only for testing porpuse
  private baseUrl = 'http://localhost:8000/rest-auth/registration/';

  constructor(private http: Http) {}

  register(user: UserModel) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl, user, options)
        .map( (res: Response) => res.json() )
        .catch( this.handleError);
  }

  private handleError (error: Response | any) {
    let err = [];
    if (error instanceof Response) {
      const body = error.json() || '';
      err = body;
    } else {
      err = error.message ? error.message : error.toString();
    }
    return Observable.throw(err);
  }

}