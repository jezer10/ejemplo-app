import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
