import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeePrescribePage } from './see-prescribe.page';

describe('SeePrescribePage', () => {
  let component: SeePrescribePage;
  let fixture: ComponentFixture<SeePrescribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePrescribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeePrescribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
