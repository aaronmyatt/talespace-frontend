/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AuthService } from './auth.service';


describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [ HttpModule ]
    });
  });

  it('should not fail', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  describe('register()', () => {
    let mockUser = {
      'first_name': 'test',
      'last_name': 'test',
      'email':  'test@test.com',
      'username': 'test',
      'password1': 'test',
      'password2': 'test'
    };

    it('should have register endpoint url', inject([AuthService], (service: AuthService) => {
      expect(service.registerUrl).toBe('http://localhost:8000/auth/registration/');
    }));

    it('should call register endpoint', inject([AuthService], (service: AuthService) => {
      spyOn(service.http, 'post').and.returnValue(Observable.create( () => '200' ));
      service.register(mockUser);
      expect(service.http.post).toHaveBeenCalled();
    }));

  });

  describe('login()', () => {
    let mockLogin = {
      'username': 'test',
      'password': 'test'
    };

    it('should have login endpoint url', inject([AuthService], (service: AuthService) => {
      expect(service.loginUrl).toBe('http://localhost:8000/auth/login/');
    }));

    it('should call login endpoint', inject([AuthService], (service: AuthService) => {
      spyOn(service.http, 'post').and.returnValue(Observable.create( () => '200' ));
      service.register(mockLogin);
      expect(service.http.post).toHaveBeenCalled();
    }));

  });


});
