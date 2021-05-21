import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowRoutePage } from './show-route.page';

describe('ShowRoutePage', () => {
  let component: ShowRoutePage;
  let fixture: ComponentFixture<ShowRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
