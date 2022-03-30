import { Vendedor } from './../../models/Vendedor';
import { Gasto } from './../../models/Gasto';
import { CrudService } from 'src/app/servicios/crud.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';

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
  listVendedor: any[] = [];
  dinero:any;
  variableDinero:any;
  VENDEDOR: Vendedor;
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
     this.editarVendedor();
   }, error =>{
     console.log(error);
   })
  }

  editarVendedor(){
    

    this.crudService.getVendedorEdit('QmgFh25b48hS6eRifRGm').pipe(first()).subscribe(doc =>{
      this.listVendedor.push(doc.payload.data());
      this.dinero = Number(this.listVendedor[0].dinero);
      
      this.variableDinero = String(this.dinero-Number(this.form.value.precioTotal));
      console.log("Precio resta: " +this.variableDinero)
      
      this.VENDEDOR = {
        nombre: 'Alejandro',
        whatsapp: '3122031469',
        dinero: this.variableDinero,
        fechaInicio: '30/03/2022',
    
     }
     console.log("Precio: " + this.dinero)
     this.crudService.editarVendedor('QmgFh25b48hS6eRifRGm', this.VENDEDOR);
     
    });

    
  
   
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

