import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [];

  constructor() { }

  // Método para almacenar el usuario obtenido en LoginPage
  setUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  // Método para obtener un usuario por nombre de usuario y contraseña
  getUser(user: string, pass: string) {
    return this.usuarios.find(aux => aux.usuario === user && aux.contrasenia === pass);
  }

  // Método para obtener todos los usuarios
  getAll() {
    return this.usuarios;
  }
}
