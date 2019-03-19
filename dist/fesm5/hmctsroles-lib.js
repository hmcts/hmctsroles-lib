import { Injectable, Directive, ViewContainerRef, TemplateRef, Input, ElementRef, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { CookieService, CookieModule } from 'ngx-cookie';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HmctsrolesLibService = /** @class */ (function () {
    function HmctsrolesLibService(cookieService) {
        this.cookieService = cookieService;
    }
    /**
     * @return {?}
     */
    HmctsrolesLibService.prototype.getUserRoles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var roles = [];
        /** @type {?} */
        var ck = this.cookieService.get('__roles__');
        if (ck != null)
            roles = ck.split(',');
        //console.log('@@COOKIE:', roles)
        return roles;
    };
    HmctsrolesLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    HmctsrolesLibService.ctorParameters = function () { return [
        { type: CookieService }
    ]; };
    /** @nocollapse */ HmctsrolesLibService.ngInjectableDef = defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(inject(CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });
    return HmctsrolesLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HmctsrolesLibComponent = /** @class */ (function () {
    function HmctsrolesLibComponent() {
    }
    /**
     * @return {?}
     */
    HmctsrolesLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HmctsrolesLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hmcts-hmctsroles-lib',
                    template: "\n    <p>\n      hmctsroles-lib works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    HmctsrolesLibComponent.ctorParameters = function () { return []; };
    return HmctsrolesLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RolesDirective = /** @class */ (function () {
    function RolesDirective(viewContainerRef, templateRef, auth) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.auth = auth;
        this.isVisible = false;
    }
    Object.defineProperty(RolesDirective.prototype, "roleAccess", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._roleAccess = value;
            console.log('roleAccess: ', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RolesDirective.prototype, "roleAccessRoleList", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._roleList = value;
            console.log('roleList: ', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RolesDirective.prototype, "roleAccessRoleSource", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._roleSource = value;
            console.log('roleSource: ', value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RolesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authorised;
        if (this._roleSource == 'cookie')
            this.roles = this.auth.getUserRoles();
        else
            this.roles = this._roleList;
        authorised = this.checkRoleisValid();
        if (authorised)
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        else
            this.viewContainerRef.clear();
    };
    /**
     * @return {?}
     */
    RolesDirective.prototype.checkRoleisValid = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.roles.some(function (r) { return _this._roleAccess.includes(r); });
    };
    RolesDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[roleAccess]"
                },] },
    ];
    /** @nocollapse */
    RolesDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: HmctsrolesLibService }
    ]; };
    RolesDirective.propDecorators = {
        roleAccess: [{ type: Input }],
        roleAccessRoleList: [{ type: Input }],
        roleAccessRoleSource: [{ type: Input }]
    };
    return RolesDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UnlessRoleIncludesDirective = /** @class */ (function () {
    function UnlessRoleIncludesDirective(elr, auth) {
        this.elr = elr;
        this.auth = auth;
    }
    /**
     * @return {?}
     */
    UnlessRoleIncludesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authorised;
        this.roles = this.roleList.split(',');
        authorised = this.checkRoleisValid();
        //console.log('auth', authorised)
        if (authorised)
            this.elr.nativeElement.style.visibility = 'hidden';
        else
            this.elr.nativeElement.style.visibility = 'visible';
    };
    /**
     * @return {?}
     */
    UnlessRoleIncludesDirective.prototype.checkRoleisValid = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.roles.some(function (r) { return _this.unlessRole.split(',').includes(r); });
    };
    UnlessRoleIncludesDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[unlessRole]"
                },] },
    ];
    /** @nocollapse */
    UnlessRoleIncludesDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HmctsrolesLibService }
    ]; };
    UnlessRoleIncludesDirective.propDecorators = {
        unlessRole: [{ type: Input }],
        roleList: [{ type: Input }],
        roleSource: [{ type: Input }]
    };
    return UnlessRoleIncludesDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HmctsrolesLibModule = /** @class */ (function () {
    function HmctsrolesLibModule() {
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
    return HmctsrolesLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HmctsrolesLibService, HmctsrolesLibComponent, HmctsrolesLibModule, RolesDirective as ɵa, UnlessRoleIncludesDirective as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvaG1jdHNyb2xlcy1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9kaXJlY3RpdmVzL3VubGVzcy1yb2xlLWluY2x1ZGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYlNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkgeyB9XHJcblxyXG5cclxuXHJcbiAgLy8gcHVibGljIGdldFVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XHJcbiAgLy8gICBsZXQgcm9sZXMgPSBbJ3JvbGVBJywgJ3JvbGVCJywgJ3JvbGVDJ11cclxuICAvLyAgIHJldHVybiByb2xlc1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHJvbGVzID0gW107XHJcbiAgICBsZXQgY2sgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdfX3JvbGVzX18nKTtcclxuICAgIGlmIChjayAhPSBudWxsKSByb2xlcyA9IGNrLnNwbGl0KCcsJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdAQENPT0tJRTonLCByb2xlcylcclxuICAgIHJldHVybiByb2xlc1xyXG5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaG1jdHMtaG1jdHNyb2xlcy1saWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgaG1jdHNyb2xlcy1saWIgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c3JvbGVzTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIElucHV0LCBPbkluaXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliU2VydmljZSB9IGZyb20gXCIuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcm9sZUFjY2Vzc11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIEBJbnB1dCgpIHJvbGVBY2Nlc3M6IHN0cmluZztcclxuICAvLyBASW5wdXQoKSByb2xlQWNjZXNzcm9sZUxpc3Q6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfcm9sZUFjY2Vzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcm9sZUFjY2VzcyA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVBY2Nlc3M6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIF9yb2xlTGlzdDogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzc1JvbGVMaXN0KHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5fcm9sZUxpc3QgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlTGlzdDogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIF9yb2xlU291cmNlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzc1JvbGVTb3VyY2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcm9sZVNvdXJjZSA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVTb3VyY2U6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBpc1Zpc2libGUgPSBmYWxzZTtcclxuICByb2xlczogYW55W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgYXV0aDogSG1jdHNyb2xlc0xpYlNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBhdXRob3Jpc2VkXHJcblxyXG4gICAgaWYgKHRoaXMuX3JvbGVTb3VyY2UgPT0gJ2Nvb2tpZScpXHJcbiAgICAgIHRoaXMucm9sZXMgPSB0aGlzLmF1dGguZ2V0VXNlclJvbGVzKClcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5yb2xlcyA9IHRoaXMuX3JvbGVMaXN0O1xyXG5cclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKVxyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKClcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLl9yb2xlQWNjZXNzLmluY2x1ZGVzKHIpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3VubGVzc1JvbGVdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHVubGVzc1JvbGU6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlTGlzdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVTb3VyY2U6IHN0cmluZztcclxuICByb2xlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxyOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG4gICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZUxpc3Quc3BsaXQoJywnKVxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG4gICAgLy9jb25zb2xlLmxvZygnYXV0aCcsIGF1dGhvcmlzZWQpXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy51bmxlc3NSb2xlLnNwbGl0KCcsJykuaW5jbHVkZXMocikpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliQ29tcG9uZW50IH0gZnJvbSAnLi9obWN0c3JvbGVzLWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb2xlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvb2tpZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0htY3Rzcm9sZXNMaWJDb21wb25lbnQsIFJvbGVzRGlyZWN0aXZlLCBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtIbWN0c3JvbGVzTGliQ29tcG9uZW50LCBSb2xlc0RpcmVjdGl2ZSwgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYk1vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQVFFLDhCQUNVO1FBQUEsa0JBQWEsR0FBYixhQUFhO0tBQW9COzs7O0lBVXBDLDJDQUFZOzs7OztRQUNqQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O1FBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxFQUFFLElBQUksSUFBSTtZQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUV0QyxPQUFPLEtBQUssQ0FBQTs7O2dCQXJCZixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLGFBQWE7OzsrQkFEdEI7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHNEQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O2lDQVZEOzs7Ozs7O0FDQUE7SUEyQ0Usd0JBQ1Usa0JBQ0EsYUFDQTtRQUZBLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsU0FBSSxHQUFKLElBQUk7eUJBTkYsS0FBSztLQU9aO0lBL0JMLHNCQUNJLHNDQUFVOzs7OztRQURkLFVBQ2UsS0FBYTtZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztT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