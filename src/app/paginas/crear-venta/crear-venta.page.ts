import { element } from 'protractor';
import { CrudService } from './../../servicios/crud.service';
import { Venta } from './../../models/Venta';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.page.html',
  styleUrls: ['./crear-venta.page.scss'],
})
export class CrearVentaPage implements OnInit {

  @Input() idVenta:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
    this.form = this.fb.group({
      codigoReferencia: generateRandomString(6),
      cantidadPantallas: [''],
      correos: [''],
      productos: [''],
      idCliente: [''],
      plataforma: new FormControl('StreamGo'),
      precioTotal: [''],
      tipo: new FormControl('Nueva'),
      fechaInicio: new Date(),
      formaPago: [''],
      fechaExpiracion: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    })
  }

  ngOnInit() {
    console.log(this.idVenta);
    this.crudService.getVentaEdit(this.idVenta).subscribe(doc =>{
      console.log(doc.data())
    })
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  
  agregarVenta(){
    const VENTA: Venta = {
      codigoReferencia: this.form.value.codigoReferencia,
      cantidadPantallas: this.form.value.cantidadPantallas,
      correos: this.form.value.correos,
      productos: this.form.value.productos,
      idCliente: this.form.value.idCliente,
      plataforma: this.form.value.plataforma,
      precioTotal: this.form.value.precioTotal,
      tipo: this.form.value.tipo,
      fechaInicio: this.form.value.fechaInicio,
      fechaExpiracion: this.form.value.fechaExpiracion,
      formaPago: this.form.value.formaPago,
   }
  
   
   console.log(VENTA);
   this.crudService.agregarVenta(VENTA).then(() =>{
     console.log("Venta registrada");
     this.modalController.dismiss();
   }, error =>{
     console.log(error);
   })
  }

 
  

}


const  generateRandomString = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result1= ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < num; i++ ) {
      result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result1;
}

const displayRandomString = () =>{
 let randomStringContainer = document.getElementById('random_string'); 
  randomStringContainer.innerHTML =  generateRandomString(8);    
}


