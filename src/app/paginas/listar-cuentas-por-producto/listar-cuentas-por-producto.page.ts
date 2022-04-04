import { DescCuentaPage } from './../desc-cuenta/desc-cuenta.page';
import { CrearCuentaPage } from './../crear-cuenta/crear-cuenta.page';
import { ModalController } from '@ionic/angular';
import { Producto } from './../../models/Producto';
import { CrudService } from './../../servicios/crud.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-cuentas-por-producto',
  templateUrl: './listar-cuentas-por-producto.page.html',
  styleUrls: ['./listar-cuentas-por-producto.page.scss'],
})
export class ListarCuentasPorProductoPage implements OnInit {
  @Input() idProducto;
  listProducto: any[] = [];
  nombreProducto: any;
  listCuentas: any[] = [];
  constructor(public crudService: CrudService, public modalController: ModalController) { }
  

  ngOnInit() {
    this.obtenerProducto();
    this.obtenerCuentasPorProducto();
  }

  obtenerProducto(){
    console.log(this.idProducto);
    this.crudService.getProductoEdit(this.idProducto).subscribe(doc =>{
     
      this.listProducto.push(doc.payload.data());
      this.nombreProducto = this.listProducto[0]['nombre'];
      
      
     
    });
  }

  obtenerCuentasPorProducto(){
    console.log(this.idProducto);
    this.crudService.obtenerCuentasPorProducto(this.idProducto).subscribe(doc =>{
      
      this.listCuentas= [];
      doc.forEach(element => {
        this.listCuentas.push({
          idCuenta: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
        
          console.log(element.payload.doc.id);
          console.log(element.payload.doc.data())
      });
    })
  }

  async openModalDescCuenta(id:any){
    const modal = await this.modalController.create({
      component: DescCuentaPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idCuenta: id,
      }
     
    });
    return await modal.present();
  }


  
  closeModal(){
    this.modalController.dismiss();
  }

  async openModalCuenta(id:any){
    const modal = await this.modalController.create({
      component: CrearCuentaPage,
      cssClass: 'my-suctom-class',
      componentProps: {
        idProducto: id,
      }
     
    });
    return await modal.present();
  }

}
