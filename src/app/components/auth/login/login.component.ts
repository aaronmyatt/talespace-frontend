import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { LoginModel } from '../login.model';
import { Router } from '@angular/router';

@Component({
    selector: 'Login-form',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public errMsg: string;
    public showErrMsg: boolean;

    constructor(
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.showErrMsg = false;
    }

    login(loginDetails: LoginModel, isValid: boolean) {
        if (isValid) {
            this.authService.login(loginDetails).subscribe(
                res => {
                    console.log(res);
                    localStorage.setItem('id_token', res.key);
                    this.router.navigate(['/profile']);
                },

                err => {
                    console.log(err);
                    this.showErrMsg = true;
                    for (var key in err) {
                        this.errMsg = err[key];
                    }
                }
            );
        } else {
            this.errMsg = 'Please fill the required data marked in red';
        }
    }
}
