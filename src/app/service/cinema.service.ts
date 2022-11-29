import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinema } from '../model/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  apiUrl: string = environment.apiUrl;

  entityName: string = 'cinema';


  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Cinema> {
    return this.http.get<Cinema>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  update(cinema: Cinema): Observable<Cinema> {
    return this.http.patch<Cinema>(`${this.apiUrl}${this.entityName}/${cinema.id}`, cinema);
  }

  create(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(
      `${this.apiUrl}${this.entityName}`,
      cinema
    );
  }

  delete(cinema: Cinema): Observable<Cinema> {
    return this.http.delete<Cinema>(
      `${this.apiUrl}${this.entityName}/${cinema.id}`
    );
  }


}
