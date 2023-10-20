import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/pages/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [
    {
      id: '1',
      usuario: 'panshoots',
      contrasenia: '123456'
    }
  ]

  constructor() { }


getAll() {
  return [...this.usuarios]
}

getUser(user: string, pass: string) {
  return {
    ...this.usuarios.find(aux => {
      return aux.usuario === user && aux.contrasenia === pass
    })
  }
}
}