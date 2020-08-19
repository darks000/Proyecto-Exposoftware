import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarRubricaPage } from './agregar-rubrica.page';

describe('AgregarRubricaPage', () => {
  let component: AgregarRubricaPage;
  let fixture: ComponentFixture<AgregarRubricaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRubricaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarRubricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
