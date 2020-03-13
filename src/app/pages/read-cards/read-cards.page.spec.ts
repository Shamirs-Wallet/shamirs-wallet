import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadCardsPage } from './read-cards.page';

describe('ReadCardsPage', () => {
  let component: ReadCardsPage;
  let fixture: ComponentFixture<ReadCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
