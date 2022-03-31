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
  variableDinero:any;
  VENDEDOR: Vendedor;
  listClientes: Cliente[] = [];
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
    this.obtenerClientes();
    this.crudService.getVentaEdit(this.idVenta).subscribe(doc =>{
      console.log(doc.data())
    })
    
  }

  closeModal(){
    this.modalController.dismiss();
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




