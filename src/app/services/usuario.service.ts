import { Injectable } from '@angular/core';
import { Escuela, Usuario } from '../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[];
  private escuelas: Escuela[];
  constructor() {
    this.escuelas = [
      {
        id: 0,
        nombre: 'Sistemas'
      },
      {
        id: 1,
        nombre: 'Alimentos'
      },
      {
        id: 2,
        nombre: 'Ambiental'
      }
    ];
    this.usuarios = [];

  }
  getEscuelas() {
    return this.escuelas;
  }
  getUsuarios() {
    return this.usuarios;
  }
  addUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }
  nuevoUsuario(): Usuario {
    return {
      id: 0,
      nombre: '',
      direccion: '',
      escuela: 0
    }
  }
}
