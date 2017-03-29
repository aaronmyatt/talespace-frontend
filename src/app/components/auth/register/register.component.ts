import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth-service/auth.service';
import { UserModel } from '../user.model';

@Component({
    selector: 'register-form',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {
    public errMsg: string;
    public showErrMsg: boolean;

    constructor(private authService: AuthService) { }
    ngOnInit() {
        this.showErrMsg = false;
    }

    register(user: UserModel, isValid: boolean) {
        if (user.user_type === true) { user.user_type = 'm' }
        if (isValid) {
            this.authService.register(user).subscribe(
                res => {
                    console.log(res);
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
