
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ElementRef } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RolesDirective } from './roles.directive';



@Component({
  template: `
  <div id='container'>
  <h1 id='first' *roleAccess="['casework-probate'];roleList:['RoleA','RoleB','RoleC'];roleSource:'inline'" >This should not display because ROLE casework-probate is not in user mocked data</h1>
  <h1 id='second' *roleAccess="['casework-probate'];roleList:['casework-probate','RoleB','RoleC'];roleSource:'inline'" >This should display becsusde rolexyz is not in user mocked data</h1>
  
  </div>   
  `
})


// <h1 id='second' *roleAccess="'panelmember'" >This should not display</h1>          

class TestComponent {
}



describe('RoleAccess directive', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>
  let el1: DebugElement;
  let el2: DebugElement;

  let stub: any = {}, componentFixture: ComponentFixture<TestComponent>;


  stub.AuthService = {
    getUserRoles(): string[] { return ['casework-probate', 'testrole'] }
  };



  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent, RolesDirective],
      // providers: [{
      //   provide: AuthService,
      //   useValue: stub.AuthService
      // }]
    });


    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

  });





  afterEach(() => {
    // auth = null;
  })





  it('should remove element  if roleaccess atribute does NOT exists for user ', () => {
    fixture.detectChanges();
    let isElemExist: boolean = fixture.nativeElement.querySelector('#first') === null;
    expect(isElemExist).toBe(true);

  });



  it('should NOT remove element  if roleaccess atribute exists for user ', () => {
    fixture.detectChanges();
    let isElemExist: boolean = fixture.nativeElement.querySelector('#second') === null;
    expect(isElemExist).toBe(false);

  });



})