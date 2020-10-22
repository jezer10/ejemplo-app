import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {

  }
  usuarios: Usuario[];

  ngOnInit(): void {
    this.usuarios=this.usuarioService.getUsuarios();
  }

}
