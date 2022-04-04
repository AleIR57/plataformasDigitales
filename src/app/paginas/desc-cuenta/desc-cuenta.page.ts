import { UsuarioPerfil } from './../../models/UsuarioPerfil';
import { Cliente } from './../../models/Cliente';
import { first } from 'rxjs/operators';
import { Cuenta } from './../../models/Cuenta';
import { CrudService } from './../../servicios/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { documentId } from '@angular/fire/firestore';

@Component({
  selector: 'app-desc-cuenta',
  templateUrl: './desc-cuenta.page.html',
  styleUrls: ['./desc-cuenta.page.scss'],
})
export class DescCuentaPage implements OnInit {

  @Input() idCuenta:any;
  form: FormGroup;
  titulo:any;
  id: string | undefined;
  listVendedor: any[] = [];
  dinero:any;
  variableDinero:any;
  CUENTA: Cuenta;
  listCuenta: any[] = [];
  correo: any;
  contrasena: any;
  link: any;
  pinPerfil1: any;
  pinPerfil2: any;
  pinPerfil3: any;
  pinPerfil4: any;
  pinPerfil5: any;
  listClientes: Cliente[] = [];
  idClientes:any = '';
  listClientesPerfil: any[] =[];
  constructor(public modalController: ModalController, private fb: FormBuilder, private crudService: CrudService) { 
 
  
   
  }
   
  

  ngOnInit() {
    this.form = this.fb.group({
      clientePerfil1: [''],
      clientePerfil2: [''],
      clientePerfil3: [''],
      clientePerfil4: [''],
      clientePerfil5: [''],
    })
    
    this.obtenerClientes();
    console.log(this.idCuenta);
    this.crudService.getCuentaEdit(this.idCuenta).pipe(first()).subscribe(doc =>{
      this.listCuenta.push(doc.payload.data());
        this.correo = this.listCuenta[0].correo;
        this.contrasena = this.listCuenta[0].contrasena;
        this.link = this.listCuenta[0].link;
        this.pinPerfil1 = this.listCuenta[0].pinPerfil1;
        this.pinPerfil2 = this.listCuenta[0].pinPerfil2;
        this.pinPerfil3 = this.listCuenta[0].pinPerfil3;
        this.pinPerfil4 = this.listCuenta[0].pinPerfil4;
        this.pinPerfil5 = this.listCuenta[0].pinPerfil5;
      
    
       
    
    });

    this.crudService.getCodigoCuentaEditClientes(this.idCuenta).pipe(first()).subscribe(doc =>{
      this.idClientes = doc[0].payload.doc.id;
      console.log(this.idClientes);
      
this.crudService.getCuentaEditClientes(this.idCuenta, 
  this.idClientes).pipe(first()).subscribe(doc =>{
  this.listClientesPerfil.push(doc.payload.data());
  this.form.patchValue({
    clientePerfil1: this.listClientesPerfil[0].clientePerfil1,
    clientePerfil2: this.listClientesPerfil[0].clientePerfil2,
    clientePerfil3: this.listClientesPerfil[0].clientePerfil3,
    clientePerfil4: this.listClientesPerfil[0].clientePerfil4,
    clientePerfil5: this.listClientesPerfil[0].clientePerfil5,

  })

});

    });

    
    console.log(this.form.value);
    
    
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

  agregarUsuarioAPerfil(){
    const USUARIOPERFIL: UsuarioPerfil = {
      clientePerfil1: this.form.value.clientePerfil1,
      clientePerfil2: this.form.value.clientePerfil2,
      clientePerfil3: this.form.value.clientePerfil3,
      clientePerfil4: this.form.value.clientePerfil4,
      clientePerfil5: this.form.value.clientePerfil5,
   }

   if(this.idClientes == ''){
    this.crudService.agregarCuentaPerfiles(this.idCuenta, USUARIOPERFIL).then(() =>{
      console.log("Perfiles registrados");
      this.modalController.dismiss();
    }, error =>{
      console.log(error);
    })
   }
   else if(this.idClientes != ''){
    this.crudService.editarCuentaPerfiles(this.idCuenta, USUARIOPERFIL, this.idClientes).then(() =>{
      console.log("Perfiles modificados");
      this.modalController.dismiss();
    }, error =>{
      console.log(error);
    })
   }

   

  }

  closeModal(){
    this.modalController.dismiss();
  }

 
}
