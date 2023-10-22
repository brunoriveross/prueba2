import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { Usuario } from 'src/app/pages/usuario/usuario.model';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';
import { ApibdService } from 'src/app/services/bd/apibd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listaUsuarios: Usuario[] = [];
  loginForm: FormGroup;
  user: any;
  emailValue?: string;
  passValue?: string;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private apiService: ApibdService, // Cambia la importación para usar tu propio servicio de API
    private mensajeUtil: MensajeService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.mensajeUtil.mensajeToast('info', 'Ingrese Sus Datos', 2000, 'bottom');
    this.menu.enable(true);

    // Llama a tu servicio para obtener datos de la API en lugar de userrandom
    this.apiService.listAlumnos().subscribe((alumnos) => {
      if (alumnos.length > 0) {
        const firstAlumno = alumnos[0]; // Obtén el primer alumno, puedes ajustar la lógica de selección según tus necesidades
        this.emailValue = firstAlumno.correo;
        this.passValue = firstAlumno.contraseña;
        console.log(this.emailValue + ' ' + this.passValue);
      }
    });
  }

  login(user:any, pass:any) {
    this.usuarioService.getUser(user.value, pass.value);
    this.router.navigate(['home']);
    this.mensajeUtil.mensajeToast('success','Bienvenido al Sistema',2000,'bottom')
  }


}

