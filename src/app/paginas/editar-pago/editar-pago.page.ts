import { Gasto } from './../../models/Gasto';
import { first } from 'rxjs/operators';
import { CrudService } from 'src/app/servicios/crud.service';
import { ModalController } from '@ionic/angular';
import { Vendedor } from './../../models/Vendedor';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editar-pago',
  templateUrl: './editar-pago.page.html',
  styleUrls: ['./editar-pago.page.scss'],
})
export class EditarPagoPage implements OnInit {

  @Input() idGasto:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  listVendedor: any[] = [];
  dinero:any;
  variableDinero:any;
  VENDEDOR: Vendedor;
  listGasto: any[] = [];
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
    this.crudService.getGastoEdit(this.idGasto).pipe(first()).subscribe(doc =>{
      this.listGasto.push(doc.payload.data());
      this.form.patchValue({
        codigoReferencia: this.listGasto[0].codigoReferencia,
        cantidadPantallas: this.listGasto[0].cantidadPantallas,
        correos: this.listGasto[0].correos,
        productos: this.listGasto[0].productos,
        plataforma: this.listGasto[0].plataforma,
        precioTotal: this.listGasto[0].precioTotal,
        fechaInicio: this.listGasto[0].fechaInicio,
        formaPago: this.listGasto[0].formaPago,
        fechaExpiracion: this.listGasto[0].fechaExpiracion,
      })
    
    });
    
    
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
   this.crudService.editarGasto(this.idGasto, GASTO).then(() =>{
     console.log("Gasto registrado");
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


