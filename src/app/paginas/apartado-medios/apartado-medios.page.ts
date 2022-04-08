import { CrudService } from 'src/app/servicios/crud.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartado-medios',
  templateUrl: './apartado-medios.page.html',
  styleUrls: ['./apartado-medios.page.scss'],
})
export class ApartadoMediosPage implements OnInit {

  constructor(public modalController: ModalController, public crudService: CrudService) { }
  listMedios:any = [];

  ngOnInit() {
    this.obtenerMedios();
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

}
