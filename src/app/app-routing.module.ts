import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'home',
    component: InicioComponent
  },
  

  {
    path: 'crear-venta',
    loadChildren: () => import('./paginas/crear-venta/crear-venta.module').then( m => m.CrearVentaPageModule)
  },
  {
    path: 'crear-cliente',
    loadChildren: () => import('./paginas/crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
  },
  {
    path: 'crear-gasto',
    loadChildren: () => import('./paginas/crear-gasto/crear-gasto.module').then( m => m.CrearGastoPageModule)
  },
  {
    path: 'crear-producto',
    loadChildren: () => import('./paginas/crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  },
  {
    path: 'listar-cuentas-por-producto',
    loadChildren: () => import('./paginas/listar-cuentas-por-producto/listar-cuentas-por-producto.module').then( m => m.ListarCuentasPorProductoPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./paginas/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'editar-venta',
    loadChildren: () => import('./paginas/editar-venta/editar-venta.module').then( m => m.EditarVentaPageModule)
  },
  {
    path: 'editar-cliente',
    loadChildren: () => import('./paginas/editar-cliente/editar-cliente.module').then( m => m.EditarClientePageModule)
  },
  {
    path: 'editar-pago',
    loadChildren: () => import('./paginas/editar-pago/editar-pago.module').then( m => m.EditarPagoPageModule)
  },
  {
    path: 'desc-cuenta',
    loadChildren: () => import('./paginas/desc-cuenta/desc-cuenta.module').then( m => m.DescCuentaPageModule)
  },
  {
    path: 'desc-venta',
    loadChildren: () => import('./paginas/desc-venta/desc-venta.module').then( m => m.DescVentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
