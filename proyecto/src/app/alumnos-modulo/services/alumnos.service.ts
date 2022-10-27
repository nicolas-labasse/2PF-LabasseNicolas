import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Nicolas',
      apellido: 'Labasse',
      edad: 30,
      email: 'nicolaslabasse4@gmail.com'
    },
    {
      id: 2,
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 30,
      email: 'info@gmail.com'
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Gomez',
      edad: 30,
      email: 'pedro@gmail.com'
    },
    {
      id: 4,
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 30,
      email: 'maria@gmail.com'
    }
  
  ];
  private alumnoSubject: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnoSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnoSubject.asObservable();
  }

  obtenerAlumno(id: number): Observable<Alumno[]>{
    return this.obtenerAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter((alumno: Alumno) => alumno.id === id))
    )
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    this.alumnoSubject.next(this.alumnos);
  }

  editarAlumno(alumno: Alumno){
    let indice = this.alumnos.findIndex((a: Alumno) => a.id === alumno.id);

    if(indice > -1){
      this.alumnos[indice] = alumno;
    }

    this.alumnoSubject.next(this.alumnos);
  }

  eliminarAlumno(id: number){
    let indice = this.alumnos.findIndex((a: Alumno) => a.id === id);

    if(indice > -1){
      this.alumnos.splice(indice, 1);
    }

    this.alumnoSubject.next(this.alumnos);
  }
}
