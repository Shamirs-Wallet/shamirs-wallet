import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectSecurityPage } from './select-security.page';

describe('SelectSecurityPage', () => {
  let component: SelectSecurityPage;
  let fixture: ComponentFixture<SelectSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
