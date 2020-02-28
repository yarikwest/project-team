import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Status} from '../interfaces';
import {environment} from '../../../environments/environment';

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Status[]> {
    return this.http.get<Status[]>(`${environment.apiUrl}/statuses`);
  }

  getById(id: number): Observable<Status> {
    return this.http.get<Status>(`${environment.apiUrl}/statuses/${id}`);
  }

  create(status: Status): Observable<Status> {
    return this.http.post<Status>(`${environment.apiUrl}/statuses`, status);
  }

  update(status: Status): Observable<Status> {
    return this.http.put<Status>(`${environment.apiUrl}/statuses/${status.id}`, status);
  }

  remove(id: number) {
    return this.http.delete(`${environment.apiUrl}/statuses/${id}`);
  }

  compareStatuses(s1: Status, s2: Status): boolean {
    return s1.id === s2.id;
  }
}
