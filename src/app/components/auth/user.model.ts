export class UserModel {
    constructor (public first_name: string,
                 public last_name: string,
                 public email: string,
                 public username: string,
                 public password1: string | number,
                 public password2: string | number) {}
}
