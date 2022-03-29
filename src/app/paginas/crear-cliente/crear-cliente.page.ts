import { Cliente } from './../../models/Cliente';
import { CrudService } from 'src/app/servicios/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
})
export class CrearClientePage implements OnInit {
  form: FormGroup;
  titulo:any;
  id: string | undefined;


  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
    this.form = this.fb.group({
      nombre: [''],
      whatsapp: [''],
      fechaInicio: new Date(),
    })
  }

  ngOnInit() {
   
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  
  agregarCliente(){
    const CLIENTE: Cliente = {
      nombre: this.form.value.nombre,
      whatsapp: this.form.value.whatsapp,
      fechaInicio: this.form.value.fechaInicio,
  
   }
  
   
   console.log(CLIENTE);
   this.crudService.agregarCliente(CLIENTE).then(() =>{
     console.log("Cliente registrado");
     this.modalController.dismiss();
   }, error =>{
     console.log(error);
   })
  }

 
  

}


