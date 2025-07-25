import { Injectable } from '@angular/core';
import { User } from '../../store/myapp.state';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addUser(user: User): Observable<User> {
    console.log('Adding user service:', user);
    return of(user);
  }
}
