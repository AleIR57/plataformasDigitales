import { Cliente } from './../../models/Cliente';
import { Vendedor } from './../../models/Vendedor';
import { element } from 'protractor';
import { CrudService } from './../../servicios/crud.service';
import { Venta } from './../../models/Venta';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { docData } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

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
  listVendedor: any[] = [];
  dinero:any;
  dineroMedio:any;
  variableDinero:any;
  variableDineroMedio:any;
  VENDEDOR: Vendedor;
  listClientes: Cliente[] = [];
  listMedios: any[] = [];
  MEDIO: any;
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
      fechaExpiracion: [''],
    })
  }

  ngOnInit() {
    console.log(this.idVenta);
    this.obtenerClientes();
    
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

  obtenerMedios(){
    this.crudService.obtenerMedios().subscribe(doc =>{
      
      this.listMedios = [];
      doc.forEach(element => {
        this.listMedios.push({
          idMedio: element.payload.doc.id,
          ...element.payload.doc.data(),
        })

       
      });
    })
  }

  obtenerClientes(){
    this.crudService.obtenerClientes().subscribe(doc =>{
      
      this.listClientes = [];
      doc.forEach(element => {
        this.listClientes.push({
          idCliente: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
          console.log(element.payload.doc.id);
          console.log(element.payload.doc.data())
      });
    })
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
     this.editarVendedor();
     this.modalController.dismiss();
   }, error =>{
     console.log(error);
   })
  }

  editarVendedor(){
    let variableMedio = '';

    this.crudService.getVendedorEdit('QmgFh25b48hS6eRifRGm').pipe(first()).subscribe(doc =>{
      this.listVendedor.push(doc.payload.data());
      this.dinero = Number(this.listVendedor[0].dinero);
      
      this.variableDinero = String(this.dinero+Number(this.form.value.precioTotal));
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

    if(this.form.value.formaPago == 'Nequi'){
      variableMedio = 'EBbKeVcigRBGBRE9WOyV';
    }
    else if(this.form.value.formaPago == 'Bancolombia'){
      variableMedio = '8S1SVm7MJQaBxUNohR9T';
    }
    else if(this.form.value.formaPago == 'Daviplata'){
      variableMedio = 'wAovBxzhYMz4r7O89UQp';
    }
    else if(this.form.value.formaPago == 'Movii'){
      variableMedio = 'wi8QYpSa7Xuu7BKtlQSu';
    }
    else if(this.form.value.formaPago == 'Giro'){
      variableMedio = 'jrarrZcWjXHKGWS48yml';
    }

    console.log(variableMedio);

    this.crudService.getMedioEdit(variableMedio).pipe(first()).subscribe(doc =>{
      this.listMedios.push(doc.payload.data());
      this.dineroMedio = Number(this.listMedios[0].Dinero);
      
      this.variableDineroMedio = String(this.dineroMedio+Number(this.form.value.precioTotal));
      console.log("Precio resta: " +this.variableDineroMedio)
      
      this.MEDIO = {
        Nombre: this.form.value.formaPago,
        Dinero: this.variableDineroMedio,
    
     }
     console.log("Precio: " + this.dineroMedio)
     this.crudService.editarMedio(variableMedio, this.MEDIO);
     
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




