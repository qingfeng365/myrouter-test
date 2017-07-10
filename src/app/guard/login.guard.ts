import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('LoginGuard 检查中.... - ' + new Date());
    console.log(next);
    console.log(state);
    const isLogined: boolean = (Math.random() > 0.5);
    if (!isLogined) {
      console.log('LoginGuard:用户未登录 - ' + new Date());
    } else {
      console.log('LoginGuard:用户已登录 - ' + new Date());
    }
    return isLogined;
  }
}
