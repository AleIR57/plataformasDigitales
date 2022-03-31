import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
