import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmctsrolesLibComponent } from './hmctsroles-lib.component';

describe('HmctsrolesLibComponent', () => {
  let component: HmctsrolesLibComponent;
  let fixture: ComponentFixture<HmctsrolesLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmctsrolesLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmctsrolesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
