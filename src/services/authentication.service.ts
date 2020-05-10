import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private http:HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('loggedInUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    getUsers() {
        let userUrl = "api/users.json";
        return this.http.get(userUrl)
    }

    login(username:String, password:string) {
        return this.getUsers()
        .pipe(map((users: any[]) => {
            let user = users.find(p => p.username === username && p.password === password);
            if(user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.router.navigate(['/products']);

            }
            return user;
        }));
    }

    logout() {
        sessionStorage.removeItem('loggedInUser');
        this.currentUserSubject.next(null);
    }

    isLoggedInUser() {
        return sessionStorage.getItem('loggedInUser') ? true: false;
    }

    signup() {

    }
}
