import { Component, OnInit } from '@angular/core';
import { Escuela, Usuario } from '../models/usuario/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  escuelas: Escuela[];
  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.nuevoUsuario();
    this.escuelas = this.usuarioService.getEscuelas();
  }
  nuevoUsuario(): void {
    this.usuarioService.addUsuario(this.usuario);
    this.usuario = this.usuarioService.nuevoUsuario();
  }

}
