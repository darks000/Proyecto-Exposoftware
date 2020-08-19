import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RubricasPage } from './rubricas.page';

describe('RubricasPage', () => {
  let component: RubricasPage;
  let fixture: ComponentFixture<RubricasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RubricasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
