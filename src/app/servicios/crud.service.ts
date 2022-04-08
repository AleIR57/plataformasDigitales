import { Vendedor } from './../models/Vendedor';
import { Cuenta } from './../models/Cuenta';
import { Gasto } from './../models/Gasto';
import { Cliente } from './../models/Cliente';
import { Venta } from './../models/Venta';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../models/Producto';
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
    return this.firebase.collection('ventas', ref => ref.orderBy('fechaInicio', 'desc').limit(10)).snapshotChanges();
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
    return  this.firebase.collection('ventas').doc(idVenta).snapshotChanges();
  }


  agregarCliente(cliente: Cliente){
    return this.firebase.collection('clientes').add(cliente);

  }

  obtenerClientes(): Observable<any>{
    return this.firebase.collection('clientes', ref => ref.orderBy('fechaInicio', 'desc').limit(10)).snapshotChanges();
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
    return  this.firebase.collection('clientes').doc(idCliente).snapshotChanges();
  }

  agregarGasto(gasto: Gasto){
    return this.firebase.collection('gastos').add(gasto);

  }

  obtenerGastos(): Observable<any>{
    return this.firebase.collection('gastos', ref => ref.orderBy('fechaInicio', 'desc').limit(10)).snapshotChanges();
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
    return  this.firebase.collection('gastos').doc(idGasto).snapshotChanges();
  }

  agregarProducto(producto: Producto){
    return this.firebase.collection('productos').add(producto);

  }

  obtenerProductos(): Observable<any>{
    return this.firebase.collection('productos').snapshotChanges();
  }

  eliminarProducto(id: string): Promise<any>{
    return this.firebase.collection('productos').doc(id).delete();
  }

  editarProducto(id: string, producto:any): Promise<any>{
   return this.firebase.collection('productos').doc(id).update(producto);
  }

  addProductoEdit(producto: Producto){
    this.venta$.next(producto);
  }

  getProductoEdit(idProducto: string){
    return  this.firebase.collection('productos').doc(idProducto).snapshotChanges();
  }

  agregarCuenta(cuenta: Cuenta){
    return this.firebase.collection('cuentas').add(cuenta);

  }

  obtenerCuentasPorProducto(idProducto:any): Observable<any>{
    return this.firebase.collection('cuentas', ref => ref.where('idProducto', "==" , idProducto)).snapshotChanges();
  }

  obtenerCuentas(): Observable<any>{
    return this.firebase.collection('cuentas').snapshotChanges();
  }

  eliminarCuenta(id: string): Promise<any>{
    return this.firebase.collection('cuentas').doc(id).delete();
  }

  editarCuenta(id: string, cuenta:any): Promise<any>{
   return this.firebase.collection('cuentas').doc(id).update(cuenta);
  }

  agregarCuentaPerfiles(id: string, cuenta:any): Promise<any>{
    return this.firebase.collection('cuentas/'+id+'/clientes').add(cuenta);
   }

   editarCuentaPerfiles(id: string, cuenta:any, idCliente: any): Promise<any>{
    return this.firebase.collection('cuentas/'+id+'/clientes').doc(idCliente).update(cuenta);
   }


  addCuentaEdit(cuenta: Cuenta){
    this.venta$.next(cuenta);
  }

  getCuentaEdit(idCuenta: string){
    return this.firebase.collection('cuentas').doc(idCuenta).snapshotChanges();
  }

  getCodigoCuentaEditClientes(idCuenta: string){
    return this.firebase.collection('cuentas/'+idCuenta+'/clientes').snapshotChanges();
  }

  getCuentaEditClientes(idCuenta: string, idCliente){
    return this.firebase.collection('cuentas/'+idCuenta+'/clientes').doc(idCliente).snapshotChanges();
  }

  agregarVendedor(vendedor: Vendedor){
    return this.firebase.collection('vendedores').add(vendedor);

  }

  obtenerVendedores(): Observable<any>{
    return this.firebase.collection('vendedores').snapshotChanges();
  }

  eliminarVendedor(id: string): Promise<any>{
    return this.firebase.collection('vendedores').doc(id).delete();
  }

  editarVendedor(id: string, cuenta:any): Promise<any>{
   return this.firebase.collection('vendedores').doc(id).update(cuenta);
  }

  addVendedorEdit(vendedor: Vendedor){
    this.venta$.next(vendedor);
  }

  getVendedorEdit(idVendedor: string){
    return  this.firebase.collection('vendedores').doc(idVendedor).snapshotChanges();
  }

  obtenerMedios(): Observable<any>{
    return this.firebase.collection('medios').snapshotChanges();
  }

  eliminarMedio(id: string): Promise<any>{
    return this.firebase.collection('medios').doc(id).delete();
  }

  editarMedio(id: string, medio:any): Promise<any>{
   return this.firebase.collection('medios').doc(id).update(medio);
  }

  getMedioEdit(idMedio: string){
    return  this.firebase.collection('medios').doc(idMedio).snapshotChanges();
  }

  

  



}
