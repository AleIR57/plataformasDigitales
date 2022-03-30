import { ListarCuentasPorProductoPage } from './../../paginas/listar-cuentas-por-producto/listar-cuentas-por-producto.page';
import { Vendedor } from './../../models/Vendedor';
import { Producto } from './../../models/Producto';
import { CrearProductoPage } from './../../paginas/crear-producto/crear-producto.page';
import { Gasto } from './../../models/Gasto';
import { CrearGastoPage } from './../../paginas/crear-gasto/crear-gasto.page';
import { Cliente } from './../../models/Cliente';
import { CrearClientePage } from './../../paginas/crear-cliente/crear-cliente.page';
import { Venta } from './../../models/Venta';
import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { CrearVentaPage } from 'src/app/paginas/crear-venta/crear-venta.page';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  listVentas: Venta[] = [];
  listClientes: Cliente[] = [];
  listGastos: Gasto[] = [];
  listProductos: Producto[] = [];
  listVendedor: any[] = [];
  valorSegmento:any = 'Ventas';
  dinero: any;
  lastItem: any = [];

  constructor(public modalController: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.obtenerVentas();
    this.obtenerClientes();
    this.obtenerGastos();
    this.obtenerProductos();
    this.obtenerVendedor();
  }

  segmentChanged(event:any){
    this.valorSegmento = event.detail.value;
    console.log(this.valorSegmento);
  }
  
  async openModal(id:any){
    const modal = await this.modalController.create({
      component: CrearVentaPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idVenta: id,
      }
     
    });
    return await modal.present();
  }

  async openModalCliente(id:any){
    const modal = await this.modalController.create({
      component: CrearClientePage,
      cssClass: 'my-suctom-class',
     
    });
    return await modal.present();
  }

  async openModalGasto(id:any){
    const modal = await this.modalController.create({
      component: CrearGastoPage,
      cssClass: 'my-suctom-class',
     
    });
    return await modal.present();
  }

  async openModalProducto(id:any){
    const modal = await this.modalController.create({
      component: CrearProductoPage,
      cssClass: 'my-suctom-class',
     
    });
    return await modal.present();
  }

  async openModalCuenta(id:any){
    const modal = await this.modalController.create({
      component: ListarCuentasPorProductoPage,
      cssClass: 'my-suctom-class',
     
    });
    return await modal.present();
  }

  obtenerVentas(){
    this.crudService.obtenerVentas().subscribe(doc =>{
     
      this.listVentas = [];
      doc.forEach(element => {
        this.listVentas.push({
          idVenta: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
          console.log(element.payload.doc.id);
          console.log(element.payload.doc.data())
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

  obtenerGastos(){
    this.crudService.obtenerGastos().subscribe(doc =>{
      console.log(doc);
      this.listGastos = [];
      doc.forEach(element => {
        this.listGastos.push({
          idCliente: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
          console.log(element.payload.doc.id);
          console.log(element.payload.doc.data())
      });
    })
  }

  obtenerProductos(){
    this.crudService.obtenerProductos().subscribe(doc =>{
      console.log(doc);
      this.listProductos = [];
      doc.forEach(element => {
        this.listProductos.push({
          idCliente: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
          console.log(element.payload.doc.id);
          console.log(element.payload.doc.data())
      });
    })
  }


  eliminarVenta(id:any){
    this.crudService.eliminarVenta(id).then(() =>{
      
    })
  }

  eliminarCliente(id:any){
    this.crudService.eliminarCliente(id).then(() =>{
      
    })
  }

  eliminarGasto(id:any){
    this.crudService.eliminarGasto(id).then(() =>{
      console.log(id);
    })
  }

  editarVenta(venta: Venta){
    this.crudService.addVentaEdit(venta);
  }

  loadData($event){
    
  }

  obtenerVendedor(){
    this.crudService.getVendedorEdit('QmgFh25b48hS6eRifRGm').subscribe(doc =>{
      console.log(doc);
      this.listVendedor.push(doc.payload.data());
      for(let i = 0; i < this.listVendedor.length-1; i++){
        this.listVendedor.splice(i, 1);
      }
     
     
      console.log(this.listVendedor);
     
    });
  }



  

}
