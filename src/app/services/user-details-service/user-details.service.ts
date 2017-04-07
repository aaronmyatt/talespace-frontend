import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserDetailsModel } from '../../components/profile/user-details.model';

@Injectable()
export class UserDetailsService {
    private baseUrl = 'http://localhost:8000';
    public userDetailsUrl = this.baseUrl + '/auth/user/';

    constructor(public http: Http) { }

    getUserDetails() {
        const options = UserDetailsService.buildOptions();

        return this.http.get(this.userDetailsUrl, options)
            .map((res: Response) => res.json())
            .catch(UserDetailsService.handleError);
    }

    static buildOptions() {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('id_token')
        });
        return new RequestOptions({
            headers: headers
        });
    }

    static handleError(error: Response | any) {
        let err = [];
        if (error instanceof Response) {
            err = error.json() || '';
        } else {
            err = error.message ? error.message : error.toString();
        }
        return Observable.throw(err);
    }


}
