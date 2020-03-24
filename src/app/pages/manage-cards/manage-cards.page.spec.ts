import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageCardsPage } from './manage-cards.page';

describe('WriteCardsPage', () => {
  let component: ManageCardsPage;
  let fixture: ComponentFixture<ManageCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
