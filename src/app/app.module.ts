import { ApartadoMediosPage } from './paginas/apartado-medios/apartado-medios.page';
import { DescVentaPage } from './paginas/desc-venta/desc-venta.page';
import { DescCuentaPage } from './paginas/desc-cuenta/desc-cuenta.page';
import { EditarPagoPage } from './paginas/editar-pago/editar-pago.page';
import { EditarClientePage } from './paginas/editar-cliente/editar-cliente.page';
import { EditarVentaPage } from './paginas/editar-venta/editar-venta.page';
import { CrearCuentaPage } from './paginas/crear-cuenta/crear-cuenta.page';
import { ListarCuentasPorProductoPage } from './paginas/listar-cuentas-por-producto/listar-cuentas-por-producto.page';
import { CrearProductoPage } from './paginas/crear-producto/crear-producto.page';
import { CrearGastoPage } from './paginas/crear-gasto/crear-gasto.page';
import { CrearClientePage } from './paginas/crear-cliente/crear-cliente.page';
import { firebaseConfig } from './../environments/environment';
import { CrearVentaPage } from 'src/app/paginas/crear-venta/crear-venta.page';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [AppComponent, InicioComponent, CrearVentaPage, CrearClientePage, CrearGastoPage, CrearProductoPage, ListarCuentasPorProductoPage, CrearCuentaPage, EditarVentaPage, EditarClientePage, EditarPagoPage, DescCuentaPage, DescVentaPage, ApartadoMediosPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(firebaseConfig)), provideAnalytics(() => getAnalytics()), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideRemoteConfig(() => getRemoteConfig()), provideStorage(() => getStorage()), ReactiveFormsModule, FormsModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
