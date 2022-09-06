import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store value in storage', () => {
    service.setItem('test', true);
    expect(localStorage.getItem('test')).toEqual("true");
  });

  it('should get value in storage', () => {
    localStorage.setItem('test', "true");
    expect(service.getItem('test')).toEqual("true");
  });

  it('should clear values in storage', () => {
    service.setItem('key', 1);
    service.clearAll()
    expect(service.getItem('key1')).toEqual(null);
  });
});
