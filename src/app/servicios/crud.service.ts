import { Gasto } from './../models/Gasto';
import { Cliente } from './../models/Cliente';
import { Venta } from './../models/Venta';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private venta$ = new Subject<any>();

  constructor(private firebase: AngularFirestore) { }

  agregarVenta(venta: Venta){
    return this.firebase.collection('ventas').add(venta);

  }

  obtenerVentas(): Observable<any>{
    return this.firebase.collection('ventas', ref => ref.orderBy('fechaInicio', 'desc')).snapshotChanges();
  }

  eliminarVenta(id: string): Promise<any>{
    return this.firebase.collection('ventas').doc(id).delete();
  }

  editarVenta(id: string, venta:any): Promise<any>{
   return this.firebase.collection('ventas').doc(id).update(venta);
  }

  addVentaEdit(venta: Venta){
    this.venta$.next(venta);
  }

  getVentaEdit(idVenta: string){
    return this.firebase.collection('ventas').doc(idVenta).get();
  }


  agregarCliente(cliente: Cliente){
    return this.firebase.collection('clientes').add(cliente);

  }

  obtenerClientes(): Observable<any>{
    return this.firebase.collection('clientes', ref => ref.orderBy('fechaInicio', 'desc')).snapshotChanges();
  }

  eliminarCliente(id: string): Promise<any>{
    return this.firebase.collection('clientes').doc(id).delete();
  }

  editarCliente(id: string, cliente:any): Promise<any>{
   return this.firebase.collection('clientes').doc(id).update(cliente);
  }

  addClienteEdit(cliente: Cliente){
    this.venta$.next(cliente);
  }

  getClienteEdit(idCliente: string){
    return this.firebase.collection('clientes').doc(idCliente).get();
  }

  agregarGasto(gasto: Gasto){
    return this.firebase.collection('gastos').add(gasto);

  }

  obtenerGastos(): Observable<any>{
    return this.firebase.collection('gastos', ref => ref.orderBy('fechaInicio', 'desc')).snapshotChanges();
  }

  eliminarGasto(id: string): Promise<any>{
    return this.firebase.collection('gastos').doc(id).delete();
  }

  editarGasto(id: string, gasto:any): Promise<any>{
   return this.firebase.collection('gastos').doc(id).update(gasto);
  }

  addGastoEdit(gasto: Gasto){
    this.venta$.next(gasto);
  }

  getGastoEdit(idGasto: string){
    return this.firebase.collection('gastos').doc(idGasto).get();
  }
}