import { Cuenta } from './../../models/Cuenta';
import { CrudService } from 'src/app/servicios/crud.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  @Input() idProducto;


  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
    this.form = this.fb.group({
      correo: [''],
      contrasena: [''],
      link: [''],
      numeroTelefonoAsociado: [''],
      pinPerfil1: [''],
      pinPerfil2: [''],
      pinPerfil3: [''],
      pinPerfil4: [''],
      pinPerfil5: [''],
      precioRenovacion: [''],
      estado: [''],
      idProducto: [''],
      fechaInicio: new Date(),
      fechaRenovacion: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    })
  }

  ngOnInit() {
   this.form.value.idProducto = this.idProducto;
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  
  agregarCuenta(){
    const CUENTA: Cuenta = {
      correo: this.form.value.correo,
      contrasena: this.form.value.contrasena,
      fechaInicio: this.form.value.fechaInicio,
      estado: this.form.value.estado,
      link: this.form.value.link,
      fechaRenovacion: this.form.value.fechaRenovacion,
      pinPerfil1: this.form.value.pinPerfil1,
      pinPerfil2: this.form.value.pinPerfil2,
      pinPerfil3: this.form.value.pinPerfil3,
      pinPerfil4: this.form.value.pinPerfil4,
      pinPerfil5: this.form.value.pinPerfil5,
      precioRenovacion: this.form.value.precioRenovacion,
      numeroTelefonoAsociado: this.form.value.numeroTelefonoAsociado,
      idProducto: this.idProducto,
  
   }
  
   
   console.log(CUENTA);
   this.crudService.agregarCuenta(CUENTA).then(() =>{
     console.log("Cuenta registrada");
     this.modalController.dismiss();
   }, error =>{
     console.log(error);
   })
  }

}
