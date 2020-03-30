import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Task} from '../interfaces';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TaskService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${environment.apiUrl}/tasks/${id}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getAllByProjectId(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks/project/${projectId}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/tasks`, task)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${environment.apiUrl}/tasks/${task.id}`, task)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  remove(id: number) {
    return this.http.delete(`${environment.apiUrl}/tasks/${id}`)
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
