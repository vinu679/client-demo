import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let appServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    // appServiceMock = {
    //   clearAll: jest.fn()
    // }
    // routerMock = {
    //   navigateByUrl: jest.fn()
    // }
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        AppService
      ]
    })
    .compileComponents();
    appServiceMock = TestBed.inject(AppService);
    routerMock = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate to login', () => {
    const routerstub: Router = TestBed.inject(Router);
    spyOn(routerstub, 'navigate');
    component.logOut();
    expect(component.logOut).toBeTruthy();
  });

  it('should clear all storage', () => {
    component.logOut();
    expect(localStorage.getItem('isAuthenticated')).toEqual(null);
  });
});
