import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeProfilePage } from './see-profile.page';

describe('SeeProfilePage', () => {
  let component: SeeProfilePage;
  let fixture: ComponentFixture<SeeProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
