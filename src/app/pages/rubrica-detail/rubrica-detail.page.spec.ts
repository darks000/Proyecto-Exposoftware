import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RubricaDetailPage } from './rubrica-detail.page';

describe('RubricaDetailPage', () => {
  let component: RubricaDetailPage;
  let fixture: ComponentFixture<RubricaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RubricaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
