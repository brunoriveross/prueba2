import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    
  }

}
