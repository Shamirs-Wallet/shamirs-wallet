import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectWordLengthPage } from './select-word-length.page';

describe('SelectWordLengthPage', () => {
  let component: SelectWordLengthPage;
  let fixture: ComponentFixture<SelectWordLengthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWordLengthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectWordLengthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
