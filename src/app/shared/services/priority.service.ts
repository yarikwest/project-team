import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Priority} from '../interfaces';
import {environment} from '../../../environments/environment';

@Injectable()
export class PriorityService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Priority[]> {
    return this.http.get<Priority[]>(`${environment.apiUrl}/priorities`);
  }

  getById(id: number): Observable<Priority> {
    return this.http.get<Priority>(`${environment.apiUrl}/priorities/${id}`);
  }

  create(priority: Priority): Observable<Priority> {
    return this.http.post<Priority>(`${environment.apiUrl}/priorities`, priority);
  }

  update(priority: Priority): Observable<Priority> {
    return this.http.put<Priority>(`${environment.apiUrl}/priorities/${priority.id}`, priority);
  }

  remove(id: number) {
    return this.http.delete(`${environment.apiUrl}/priorities/${id}`);
  }

  comparePriorities(p1: Priority, p2: Priority): boolean {
    return p1.id === p2.id;
  }
}
