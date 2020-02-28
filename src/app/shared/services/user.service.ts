import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {User} from '../interfaces';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, user)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  remove(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error;
    this.error$.next(message);

    return throwError(error);
  }

  compareUsers(u1: User, u2: User): boolean {
    return u1.id === u2.id;
  }
}
