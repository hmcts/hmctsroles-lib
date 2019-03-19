import { UnlessRoleIncludesDirective } from './unless-role-includes.directive';
import { By } from "@angular/platform-browser";
import { Component, DebugElement, ElementRef } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  template: `
            <h1 id='first' unlessRole="casework-probate" roleList="casework-probate,roleB,roleC" >This should not display</h1>
            <h1 id='second' unlessRole="casework-probate" roleList="roleA,roleB,roleC">This should  display</h1>          
  `
})
class TestComponent {
}


describe('UnlessRoleIncludesDirective ', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>
  let el1: DebugElement;
  let el2: DebugElement;
  let el3: DebugElement[];

  let stub: any = {}, componentFixture: ComponentFixture<TestComponent>;
  //let auth: AuthService;

  stub.AuthService = {
    //getUserRoles: jasmine.createSpy('getUserRoles()').and.returnValues(['a', 'b'])
    getUserRoles(): string[] { return ['casework-probate', 'testrole'] }
  };



  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent, UnlessRoleIncludesDirective]
      // providers: [{
      //   provide: AuthService,
      //   useValue: stub.AuthService
      // }]
    });


    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el1 = fixture.debugElement.query(By.css('#first'));
    el2 = fixture.debugElement.query(By.css('#second'));
  });



  afterEach(() => {

  })





  it('should hide element  if role is set to  caseworker-probate (example)', () => {
    fixture.detectChanges();
    expect(el1.nativeElement.style.visibility).toBe('hidden');
  });



  it('should display element as default  if role does not belong to user  ', () => {
    fixture.detectChanges();
    expect(el2.nativeElement.style.visibility).toBe('visible');
  });

})