import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';
import { ApibdService } from 'src/app/services/bd/apibd.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  emailValue?: string;
  passValue?: string;
  userRole: string = '';

  profesorButtonHidden: boolean = false; // Inicialmente oculto




  constructor(
    private router: Router,
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private apiService: ApibdService, 
    private mensajeUtil: MensajeService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.mensajeUtil.mensajeToast('info', 'Ingrese Sus Datos', 2000, 'bottom');
    this.menu.enable(true);

    // Rellenado automatico
    this.setAlumnoData(); // Llena los campos con datos de alumno por defecto
  }

  // Establece los datos de un alumno
  setAlumnoData() {
    this.apiService.listAlumnos().subscribe((alumnos) => {
      if (alumnos.length > 0) {
        const firstAlumno = alumnos[0];
        this.emailValue = firstAlumno.correo;
        this.passValue = firstAlumno.contraseña;
        this.userRole = 'alumno';
      }
    });
  }

  // Establece los datos de un profesor
  setProfesorData() {
    this.apiService.listProfes().subscribe((profesores) => {
      if (profesores.length > 0) {
        const firstProfesor = profesores[0];
        this.emailValue = firstProfesor.correo;
        this.passValue = firstProfesor.contraseña;
        this.userRole = 'profesor';
  
        // Después de cargar los datos, muestra el botón
        this.profesorButtonHidden = false;
      }
    });
  }
  async showInvalidCredentialsAlert() {
    this.mensajeUtil.mensajeToast('error', 'El correo o la contraseña son incorrectos. Por favor, inténtelo de nuevo.', 3000, 'bottom');
  }  
  
// Iniciar sesión

login() {
  const emailControl = this.loginForm.get('email');
  const passwordControl = this.loginForm.get('password');

  if (emailControl && passwordControl) {
    const email = emailControl.value;
    const password = passwordControl.value;

    // Combina las subscripciones a listAlumnos y listProfes usando forkJoin
    forkJoin([
      this.apiService.listAlumnos(),
      this.apiService.listProfes()
    ]).subscribe(([alumnos, profesores]) => {
      // Verifica si el usuario es un alumno
      const alumno = alumnos.find(alumno => alumno.correo === email && alumno.contraseña === password);
      if (alumno) {
        this.userRole = 'alumno';
        this.router.navigate(['home']); // Redirige a la página de alumno
        this.mensajeUtil.mensajeToast('success','Bienvenido Alumno',2000,'bottom')
      } else {
        // Verifica si el usuario es un profesor
        const profesor = profesores.find(profesor => profesor.correo === email && profesor.contraseña === password);
        if (profesor) {
          this.userRole = 'profesor';
          this.router.navigate(['home']); // Redirige a la página de profesor
          this.mensajeUtil.mensajeToast('success','Bienvenido Profesor',2000,'bottom')
        } else {
          // Si el usuario no coincide con ningún rol, muestra un mensaje de error
          this.showInvalidCredentialsAlert();
        }
      }
    });
  }
}


}
