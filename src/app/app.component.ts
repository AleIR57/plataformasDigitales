import { ModalController } from '@ionic/angular';
import { ApartadoMediosPage } from './paginas/apartado-medios/apartado-medios.page';
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

  constructor( private authService: AuthService, public modalController: ModalController) {
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

  async openModal(id:any){
    const modal = await this.modalController.create({
      component: ApartadoMediosPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idVenta: id,
      }
     
    });
    return await modal.present();
  }

}
