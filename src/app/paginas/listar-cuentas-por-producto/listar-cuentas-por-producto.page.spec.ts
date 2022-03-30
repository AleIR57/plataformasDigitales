import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarCuentasPorProductoPage } from './listar-cuentas-por-producto.page';

describe('ListarCuentasPorProductoPage', () => {
  let component: ListarCuentasPorProductoPage;
  let fixture: ComponentFixture<ListarCuentasPorProductoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCuentasPorProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCuentasPorProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
