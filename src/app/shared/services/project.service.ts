import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Project, User} from '../interfaces';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ProjectService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}/projects`);
  }

  getById(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.apiUrl}/projects/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.apiUrl}/projects`, project)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  update(project: Project): Observable<Project> {
    return this.http.put<Project>(`${environment.apiUrl}/projects/${project.id}`, project)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  remove(id: number) {
    return this.http.delete(`${environment.apiUrl}/projects/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error;
    this.error$.next(message);

    return throwError(error);
  }
}
