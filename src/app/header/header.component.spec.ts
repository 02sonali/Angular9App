import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common'; //it is required for testbed

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service :AuthenticationService
  // let authSpy = jasmine.createSpyObj('authSpy', ['isLoggedInUser']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ 
        { provide: AuthenticationService},  
        { provide: APP_BASE_HREF, useValue : '/' } ],
      imports: [  HttpClientModule, AppRoutingModule ]
    })
    .compileComponents();
    service = TestBed.inject(AuthenticationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent); //creates an instance of the actual component
    component = fixture.componentInstance; // we can access multiple properties from componentt's fixture
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the app name in header', () => {
    fixture.componentInstance.appName = 'myToolBox';
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('myToolBox'); //nativeElement represents the DOM element
  });

  // it('should display login link if user is not logged in ', () => {
    // authSpy.isLoggedInUser.andReturn(false);
    //expect(fixture.nativeElement.querySelector('a').textContent).toContain('Login');
  // });

  // it('should display log out link if user is logged in ', () => {
        // authSpy.isLoggedInUser.andReturn(true);
        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('Logout');
  // });
});
