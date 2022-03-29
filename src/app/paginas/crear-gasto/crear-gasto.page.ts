import { Gasto } from './../../models/Gasto';
import { CrudService } from 'src/app/servicios/crud.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crear-gasto',
  templateUrl: './crear-gasto.page.html',
  styleUrls: ['./crear-gasto.page.scss'],
})
export class CrearGastoPage implements OnInit {

  @Input() idGasto:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
    this.form = this.fb.group({
      codigoReferencia: generateRandomString(6),
      cantidadPantallas: [''],
      correos: [''],
      productos: [''],
      plataforma: new FormControl('StreamGo'),
      precioTotal: [''],
      fechaInicio: new Date(),
      formaPago: [''],
      fechaExpiracion: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    })
  }

  ngOnInit() {
    console.log(this.idGasto);
    this.crudService.getVentaEdit(this.idGasto).subscribe(doc =>{
      console.log(doc.data())
    })
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  
  agregarGasto(){
    const GASTO: Gasto = {
      codigoReferencia: this.form.value.codigoReferencia,
      cantidadPantallas: this.form.value.cantidadPantallas,
      correos: this.form.value.correos,
      productos: this.form.value.productos,
      plataforma: this.form.value.plataforma,
      precioTotal: this.form.value.precioTotal,
      fechaInicio: this.form.value.fechaInicio,
      fechaExpiracion: this.form.value.fechaExpiracion,
      formaPago: this.form.value.formaPago,
   }
  
   
   console.log(GASTO);
   this.crudService.agregarGasto(GASTO).then(() =>{
     console.log("Gasto registrada");
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

