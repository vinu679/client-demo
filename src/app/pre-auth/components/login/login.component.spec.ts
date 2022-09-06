import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from 'src/app/services/app.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let appServiceMock: any;

  beforeEach(async () => {
    appServiceMock = {
      setItem: jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: AppService, useValue: appServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.loginForm.setValue({ 
      "email": "admin", 
      "password": "test123"
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('should require valid password', () => {
    component.loginForm.setValue({ 
      "email": "admin@gmail.com", 
      "password": ""
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('should login to dashboard', () => {
    component.loginForm.setValue({ 
      "email": "admin@gmail.com", 
      "password": "test123"
    });
    component.onLogin()
    expect(localStorage.getItem('isAuthenticated')).toEqual("true");
  });
});
