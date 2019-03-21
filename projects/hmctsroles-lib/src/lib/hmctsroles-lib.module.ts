import { NgModule } from '@angular/core';
import { RolesDirective } from './directives/roles.directive';
import { UnlessRoleIncludesDirective } from './directives/unless-role-includes.directive';

@NgModule({
  imports: [],
  declarations: [RolesDirective, UnlessRoleIncludesDirective],
  exports: [RolesDirective, UnlessRoleIncludesDirective]
})
export class HmctsrolesLibModule { }
