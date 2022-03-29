import { AuthService } from './servicios/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuarioLogeado = true;

  usuario = {
    email: '',
    password: ''
  }

  constructor( private authService: AuthService) {
    this.obtenerUsuarioLogeado();
  }


  Ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res =>{
      console.log("Se registró: ", res)
    })
  }

  IngresarConGoogle(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res =>{
      console.log("Se registró: ", res)
    })
  }

  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res =>{
      console.log(res?.email);
      this.usuarioLogeado = true;
    });
  }

  logout(){
    this.authService.logout();
  }

}
