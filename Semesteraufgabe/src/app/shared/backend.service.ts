import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rezepte } from './rezepte';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/Rezepte'

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Rezepte[]>{
    return this.http.get<Rezepte[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Rezepte>{
    return this.http.get<Rezepte>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Rezepte): Observable<Rezepte> {
    return this.http.patch<Rezepte>(this.baseUrl + '/' + id, data);
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  }
}
