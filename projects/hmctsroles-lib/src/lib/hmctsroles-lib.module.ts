import { NgModule } from '@angular/core';
import { HmctsrolesLibComponent } from './hmctsroles-lib.component';
import { RolesDirective } from './directives/roles.directive';
import { UnlessRoleIncludesDirective } from './directives/unless-role-includes.directive';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [
    CookieModule.forRoot()
  ],
  declarations: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective],
  exports: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective]
})
export class HmctsrolesLibModule { }
