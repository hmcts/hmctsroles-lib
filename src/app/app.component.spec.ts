import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HmctsrolesLibModule} from '../../projects/hmctsroles-lib/src/lib/hmctsroles-lib.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HmctsrolesLibModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the test app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
