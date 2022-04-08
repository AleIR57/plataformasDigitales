import { first } from 'rxjs/operators';
import { Vendedor } from './../../models/Vendedor';
import { CrudService } from './../../servicios/crud.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cliente } from './../../models/Cliente';
import { Venta } from './../../models/Venta';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.page.html',
  styleUrls: ['./editar-venta.page.scss'],
})
export class EditarVentaPage implements OnInit {

  @Input() idVenta:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  listVendedor: any[] = [];
  dinero:any;
  variableDinero:any;
  VENDEDOR: Vendedor;
  listClientes: Cliente[] = [];
  listVenta: any[] = [];
  fechaExpiracion:any;
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
    this.crudService.getVentaEdit(this.idVenta).pipe(first()).subscribe(doc =>{
      this.listVenta.push(doc.payload.data());
      this.form.patchValue({
        codigoReferencia: this.listVenta[0].codigoReferencia,
        cantidadPantallas: this.listVenta[0].cantidadPantallas,
        correos: this.listVenta[0].correos,
        productos: this.listVenta[0].productos,
        idCliente: this.listVenta[0].idCliente,
        plataforma: this.listVenta[0].plataforma,
        precioTotal: this.listVenta[0].precioTotal,
        tipo: this.listVenta[0].tipo,
        fechaInicio: this.listVenta[0].fechaInicio,
        formaPago: this.listVenta[0].formaPago,
        fechaExpiracion: this.listVenta[0].fechaExpiracion,
      })
      this.fechaExpiracion = new Date(this.listVenta[0].fechaExpiracion);
    
    });
    
    
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
   this.crudService.editarVenta(this.idVenta, VENTA).then(() =>{
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


