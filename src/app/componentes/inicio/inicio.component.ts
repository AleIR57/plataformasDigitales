import { DescVentaPage } from './../../paginas/desc-venta/desc-venta.page';
import { EditarPagoPage } from './../../paginas/editar-pago/editar-pago.page';
import { EditarClientePage } from './../../paginas/editar-cliente/editar-cliente.page';
import { first } from 'rxjs/operators';
import { EditarVentaPage } from './../../paginas/editar-venta/editar-venta.page';
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
  color: any = 'success';
  variableDinero:any;
  VENDEDOR: Vendedor;
  cantidadVentas: any;
  listMedios: any[] = [];
  dineroMedio: any;
  variableDineroMedio:any;
  MEDIO: any;
  filterVentas = '';
  filterClientes = '';
  filterGastos = '';

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
   
  }

  loadDataVentas(event) {
    /*setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);*/
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

  async editarVentaModal(id:any){
    const modal = await this.modalController.create({
      component: EditarVentaPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idVenta: id,
      }
     
    });
    return await modal.present();
  }

  async editarClienteModal(id:any){
    const modal = await this.modalController.create({
      component: EditarClientePage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idCliente: id,
      }
     
    });
    return await modal.present();
  }

  async editarGastoModal(id:any){
    const modal = await this.modalController.create({
      component: EditarPagoPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idGasto: id,
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
      componentProps: {
        idProducto: id,
      }
     
    });
    return await modal.present();
  }

  async openModalDescVenta(id:any){
    const modal = await this.modalController.create({
      component: DescVentaPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idVenta: id,
      }
     
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
          
      });
    })
    this.cantidadVentas = this.listVentas.length;
  }

  obtenerClientes(){
    this.crudService.obtenerClientes().subscribe(doc =>{
      
      this.listClientes = [];
      doc.forEach(element => {
        this.listClientes.push({
          idCliente: element.payload.doc.id,
          ...element.payload.doc.data(),
        })

       
      });
    })
  }

  obtenerGastos(){
    this.crudService.obtenerGastos().subscribe(doc =>{
      console.log(doc);
      this.listGastos = [];
      doc.forEach(element => {
        this.listGastos.push({
          idGasto: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
         
      });
    })
  }

  obtenerProductos(){
    this.crudService.obtenerProductos().subscribe(doc =>{
      console.log(doc);
      this.listProductos = [];
      doc.forEach(element => {
        this.listProductos.push({
          idProducto: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
         
      });
    })
  }


  eliminarVenta(id:any, precioTotal:any, formaPago: any){
    this.crudService.eliminarVenta(id).then(() =>{
      this.editarVentaVendedor(precioTotal, formaPago);
    })
  }

  eliminarCliente(id:any){
    this.crudService.eliminarCliente(id).then(() =>{
      
    })
  }

  eliminarGasto(id:any, precioTotal:any, formaPago:any){
    this.crudService.eliminarGasto(id).then(() =>{
 
      this.editarGastoVendedor(precioTotal, formaPago);
    })
  }

  editarVenta(venta: Venta){
    this.crudService.addVentaEdit(venta);
  }

  loadData($event){
    
  }

  obtenerVendedor(){
    this.crudService.getVendedorEdit('QmgFh25b48hS6eRifRGm').subscribe(doc =>{
      this.listVendedor.push(doc.payload.data());
      for(let i = 0; i < this.listVendedor.length-1; i++){
        this.listVendedor.splice(i, 1);
      
      }

      if(Number(this.listVendedor[0].dinero) >= 0){
        this.color = 'success'
      }
      else if(Number(this.listVendedor[0].dinero) < 0){
        this.color = 'warning'
      }
     
     
    });
  }


  editarGastoVendedor(precioTotal: any, formaPago: any){
    let variableMedio;

    this.crudService.getVendedorEdit('QmgFh25b48hS6eRifRGm').pipe(first()).subscribe(doc =>{
      this.listVendedor.push(doc.payload.data());

      for(let i = 0; i < this.listVendedor.length-1; i++){
        this.listVendedor.splice(i, 1);
      
      }

        this.variableDinero = String(precioTotal+Number(this.listVendedor[0].dinero));
        console.log("Precio suma: " +this.variableDinero);
     
      
      this.VENDEDOR = {
        nombre: 'Alejandro',
        whatsapp: '3122031469',
        dinero: this.variableDinero,
        fechaInicio: '30/03/2022',
    
     }
     console.log("Precio: " + this.dinero)
     this.crudService.editarVendedor('QmgFh25b48hS6eRifRGm', this.VENDEDOR);
     
    });

    if(formaPago == 'Nequi'){
      variableMedio = 'EBbKeVcigRBGBRE9WOyV';
    }
    else if(formaPago == 'Bancolombia'){
      variableMedio = '8S1SVm7MJQaBxUNohR9T';
    }
    else if(formaPago == 'Daviplata'){
      variableMedio = 'wAovBxzhYMz4r7O89UQp';
    }
    else if(formaPago == 'Movii'){
      variableMedio = 'wi8QYpSa7Xuu7BKtlQSu';
    }
    else if(formaPago == 'Giro'){
      variableMedio = 'jrarrZcWjXHKGWS48yml';
    }

    console.log(variableMedio);

    this.crudService.getMedioEdit(variableMedio).pipe(first()).subscribe(doc =>{
      this.listMedios.push(doc.payload.data());
      this.dineroMedio = Number(this.listMedios[0].Dinero);
      
      this.variableDineroMedio = String(this.dineroMedio+Number(precioTotal));
      console.log("Precio resta: " +this.variableDineroMedio)
      
      this.MEDIO = {
        Nombre: formaPago,
        Dinero: this.variableDineroMedio,
    
     }
     console.log("Precio: " + this.dineroMedio)
     this.crudService.editarMedio(variableMedio, this.MEDIO);
     
    });

    

    
  
   
  }

  editarVentaVendedor(precioTotal: any, formaPago: any){
    let variableMedio;

    this.crudService.getVendedorEdit('QmgFh25b48hS6eRifRGm').pipe(first()).subscribe(doc =>{
      this.listVendedor.push(doc.payload.data());

      for(let i = 0; i < this.listVendedor.length-1; i++){
        this.listVendedor.splice(i, 1);
      
      }

      this.variableDinero = String(Number(this.listVendedor[0].dinero)-precioTotal);
      console.log("Precio suma: " +this.variableDinero);
   
      
      
     
      
      this.VENDEDOR = {
        nombre: 'Alejandro',
        whatsapp: '3122031469',
        dinero: this.variableDinero,
        fechaInicio: '30/03/2022',
    
     }
     console.log("Precio: " + this.dinero)
     this.crudService.editarVendedor('QmgFh25b48hS6eRifRGm', this.VENDEDOR);
     
    });

    if(formaPago == 'Nequi'){
      variableMedio = 'EBbKeVcigRBGBRE9WOyV';
    }
    else if(formaPago == 'Bancolombia'){
      variableMedio = '8S1SVm7MJQaBxUNohR9T';
    }
    else if(formaPago == 'Daviplata'){
      variableMedio = 'wAovBxzhYMz4r7O89UQp';
    }
    else if(formaPago == 'Movii'){
      variableMedio = 'wi8QYpSa7Xuu7BKtlQSu';
    }
    else if(formaPago == 'Giro'){
      variableMedio = 'jrarrZcWjXHKGWS48yml';
    }

    console.log(variableMedio);

    this.crudService.getMedioEdit(variableMedio).pipe(first()).subscribe(doc =>{
      this.listMedios.push(doc.payload.data());
      this.dineroMedio = Number(this.listMedios[0].Dinero);
      
      this.variableDineroMedio = String(this.dineroMedio-Number(precioTotal));
      console.log("Precio resta: " +this.variableDineroMedio)
      
      this.MEDIO = {
        Nombre: formaPago,
        Dinero: this.variableDineroMedio,
    
     }
     console.log("Precio: " + this.dineroMedio)
     this.crudService.editarMedio(variableMedio, this.MEDIO);
     
    });

    
  
   
  }


  
  
  

}
