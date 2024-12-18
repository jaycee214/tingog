import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/models/interfaces/IUserLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/models/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Tingog, ${user.name}!`,
            'Login Sucessful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed')
        }
      })
    );
  }

  logout(){
    this.userSubject.next(new User());
    window.location.reload();
  }

}
