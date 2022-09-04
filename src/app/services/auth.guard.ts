import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let isAuthenticated = this.appService.getItem('isAuthenticated') ? true : false;

    if (!isAuthenticated) {
      this.router.navigateByUrl('');
    }
    return isAuthenticated;
  }

}
