import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class HmctsrolesLibService {

  constructor(
    private cookieService: CookieService) { }



  // public getUserRoles(): string[] {
  //   let roles = ['roleA', 'roleB', 'roleC']
  //   return roles
  // }


  public getUserRoles(): string[] {
    let roles = [];
    let ck = this.cookieService.get('__roles__');
    if (ck != null) roles = ck.split(',');
    console.log('@@COOKIE:', roles)
    return roles

  }
}
