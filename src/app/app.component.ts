import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'book' },
    { title: 'Escanear QR', url: 'lectorqr', icon: 'qr-code' },
    { title: 'Cerrar Session ', url: 'login', icon: 'log-out' },
  ];
  public appprofe = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'book' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];

  public appalumno = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'book' },
    { title: 'Escanear QR', url: 'lectorqr', icon: 'qr-code' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private router: Router) {
   
  }


  mostrarMenuProfesor() {
    return this.router.url !== '/login';
  }

  mostrarMenuAlumno() {
    return this.router.url !== '/login';
  }


  
}
