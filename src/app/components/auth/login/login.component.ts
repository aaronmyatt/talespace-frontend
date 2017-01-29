import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { LoginModel } from '../login.model';

@Component({
    selector: 'Login-form',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errMsg: string;
  public showErrMsg: boolean;

    constructor(private authService: AuthService) { }

    ngOnInit() {
      this.showErrMsg = false;
    }

    login (loginDetails: LoginModel, isValid: boolean) {
      if (isValid) {
        this.authService.login(loginDetails).subscribe(
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
