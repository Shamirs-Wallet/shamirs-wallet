import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WriteCardsPage } from './write-cards.page';

describe('WriteCardsPage', () => {
  let component: WriteCardsPage;
  let fixture: ComponentFixture<WriteCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WriteCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
