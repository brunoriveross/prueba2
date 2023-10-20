import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ialumnos } from 'src/app/interfaces/ialumnos';
//import { Ialumno } from 'src/app/interfaces/ialumnos';
import { Observable } from 'rxjs';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';

@Injectable({
  providedIn: 'root'
})
export class ApibdService {
  listAlumno() {
    throw new Error('Method not implemented.');
  }
  apiURL = 'https://apiappmovil.onrender.com'
  constructor(private http: HttpClient) { }

  listAlumnos(): Observable<Ialumnos> {
    return this.http.get<Ialumnos>(`${this.apiURL}/alumnos`);
  }

  getAsignaturas(): Observable<Iasignaturas>  {
    return this.http.get<Iasignaturas>(`${this.apiURL}/asignatura`);
  }
}
