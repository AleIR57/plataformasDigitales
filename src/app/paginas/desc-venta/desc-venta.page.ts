import { Venta } from './../../models/Venta';
import { first } from 'rxjs/operators';
import { CrudService } from './../../servicios/crud.service';
import { ModalController } from '@ionic/angular';
import { Cliente } from './../../models/Cliente';
import { Vendedor } from './../../models/Vendedor';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desc-venta',
  templateUrl: './desc-venta.page.html',
  styleUrls: ['./desc-venta.page.scss'],
})
export class DescVentaPage implements OnInit {

  @Input() idVenta:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  listVendedor: any[] = [];
  dinero:any;
  variableDinero:any;
  VENDEDOR: Vendedor;
  listVenta: any[] = [];
  codigoReferencia: any;
  cantidadPantallas: any;
  correos: any;
  productos: any;
  idCliente: any;
  plataforma: any;
  precioTotal: any;
  tipo: any;
  fechaInicio: any;
  formaPago: any;
  fechaExpiracion: any;
  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
 
  

  
  
   
  }
   
  

  ngOnInit() {
    console.log(this.idVenta);
    this.crudService.getVentaEdit(this.idVenta).pipe(first()).subscribe(doc =>{
      this.listVenta.push(doc.payload.data());
        this.codigoReferencia = this.listVenta[0].codigoReferencia;
        this.cantidadPantallas = this.listVenta[0].cantidadPantallas;
        this.correos = this.listVenta[0].correos;
        this.correos = this.correos.split(',', this.correos.length);
        console.log(this.correos)
        this.productos =  this.listVenta[0].productos;
        this.idCliente = this.listVenta[0].idCliente;
        this.plataforma = this.listVenta[0].plataforma;
        this.precioTotal = this.listVenta[0].precioTotal;
        this.tipo = this.listVenta[0].tipo;
        this.fechaInicio = this.listVenta[0].fechaInicio;
        this.formaPago = this.listVenta[0].formaPago;
        this.fechaExpiracion = this.listVenta[0].fechaExpiracion;
    
    });
    
    
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  

}




