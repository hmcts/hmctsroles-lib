/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HmctsrolesLibComponent } from './hmctsroles-lib.component';
import { RolesDirective } from './directives/roles.directive';
import { UnlessRoleIncludesDirective } from './directives/unless-role-includes.directive';
import { CookieModule } from 'ngx-cookie';
export class HmctsrolesLibModule {
}
HmctsrolesLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CookieModule.forRoot()
                ],
                declarations: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective],
                exports: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvaG1jdHNyb2xlcy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBUzFDLE1BQU07OztZQVBMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLE9BQU8sRUFBRTtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLDJCQUEyQixDQUFDO2dCQUNuRixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsMkJBQTJCLENBQUM7YUFDL0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliQ29tcG9uZW50IH0gZnJvbSAnLi9obWN0c3JvbGVzLWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb2xlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvb2tpZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0htY3Rzcm9sZXNMaWJDb21wb25lbnQsIFJvbGVzRGlyZWN0aXZlLCBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtIbWN0c3JvbGVzTGliQ29tcG9uZW50LCBSb2xlc0RpcmVjdGl2ZSwgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYk1vZHVsZSB7IH1cclxuIl19