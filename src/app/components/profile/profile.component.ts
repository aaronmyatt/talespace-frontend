import { Component, OnInit } from '@angular/core';
import { UserDetailsModel } from './user-details.model';
import { UserDetailsService } from '../../services/user-details-service/user-details.service';



@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public userProfile: UserDetailsModel;

    constructor(private userDetailsService: UserDetailsService) { }

    ngOnInit() {
        this.userDetailsService.getUserDetails().subscribe(
            res => {
                console.log(res);
                this.userProfile = res;
            },
            err => {
                console.log(err);
            }
        );
    }

}
