import { first } from 'rxjs/operators';
import { CrudService } from 'src/app/servicios/crud.service';
import { ModalController } from '@ionic/angular';
import { Cliente } from './../../models/Cliente';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.page.html',
  styleUrls: ['./editar-cliente.page.scss'],
})
export class EditarClientePage implements OnInit {

  @Input() idCliente:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  listVendedor: any[] = [];
  dinero:any;
  variableDinero:any;
  listCliente: any[] = [];
  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
    this.form = this.fb.group({
        nombre: [''],
        whatsapp: [''],
        fechaInicio: new Date(),
        estado: [''],
      })
   
  }
   
  

  ngOnInit() {
    console.log(this.idCliente);
    this.crudService.getClienteEdit(this.idCliente).pipe(first()).subscribe(doc =>{
      this.listCliente.push(doc.payload.data());
      this.form.patchValue({
        nombre: this.listCliente[0].nombre,
        whatsapp: this.listCliente[0].whatsapp,
        fechaInicio: this.listCliente[0].fechaInicio,
        estado: this.listCliente[0].estado,
      })
    
    });
    
    
  }

  closeModal(){
    this.modalController.dismiss();
  }



 
  
  agregarCliente(){
    const CLIENTE: Cliente = {
      nombre: this.form.value.nombre,
      whatsapp: this.form.value.whatsapp,
      fechaInicio: this.form.value.fechaInicio,
      estado: this.form.value.estado,
   }
  
   
   console.log(CLIENTE);
   this.crudService.editarCliente(this.idCliente, CLIENTE).then(() =>{
     console.log("Cliente registrado");
     this.modalController.dismiss();
   }, error =>{
     console.log(error);
   })
  }


  


}
