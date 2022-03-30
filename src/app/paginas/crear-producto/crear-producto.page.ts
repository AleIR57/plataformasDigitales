import { Producto } from './../../models/Producto';
import { CrudService } from 'src/app/servicios/crud.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {

  form: FormGroup;
  titulo:any;
  id: string | undefined;


  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
    this.form = this.fb.group({
      nombre: [''],
      foto: [''],
    })
  }

  ngOnInit() {
   
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  
  agregarProducto(){
    const PRODUCTO: Producto = {
      nombre: this.form.value.nombre,
      foto: this.form.value.foto,
  
   }

   console.log(PRODUCTO);
   this.crudService.agregarProducto(PRODUCTO).then(() =>{
     console.log("Producto registrado");
     this.modalController.dismiss();
   }, error =>{
     console.log(error);
   })
  }



}
