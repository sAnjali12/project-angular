import { Injectable } from '@angular/core';
import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { strict } from 'assert';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        if(localStorage.getItem('app_auth') !=null)        
            return true;
        this.router.navigateByUrl('/login')
        return false
    }
   
}
