import { Injectable, Directive, ViewContainerRef, TemplateRef, Input, ElementRef, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HmctsrolesLibService = /** @class */ (function () {
    function HmctsrolesLibService() {
    }
    HmctsrolesLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    HmctsrolesLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ HmctsrolesLibService.ngInjectableDef = defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(); }, token: HmctsrolesLibService, providedIn: "root" });
    return HmctsrolesLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { HmctsrolesLibService } from "../hmctsroles-lib.service";
var RolesDirective = /** @class */ (function () {
    function RolesDirective(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
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
        return this.roles.some((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return _this._roleAccess.includes(r); }));
    };
    RolesDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[roleAccess]"
                },] },
    ];
    RolesDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { HmctsrolesLibService } from '../hmctsroles-lib.service';
var UnlessRoleIncludesDirective = /** @class */ (function () {
    function UnlessRoleIncludesDirective(elr) {
        this.elr = elr;
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
        return this.roles.some((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return _this.unlessRole.split(',').includes(r); }));
    };
    UnlessRoleIncludesDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[unlessRole]"
                },] },
    ];
    UnlessRoleIncludesDirective.ctorParameters = function () { return [
        { type: ElementRef }
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HmctsrolesLibModule = /** @class */ (function () {
    function HmctsrolesLibModule() {
    }
    HmctsrolesLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [RolesDirective, UnlessRoleIncludesDirective],
                    exports: [RolesDirective, UnlessRoleIncludesDirective]
                },] },
    ];
    return HmctsrolesLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HmctsrolesLibService, HmctsrolesLibModule, RolesDirective as ɵa, UnlessRoleIncludesDirective as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9kaXJlY3RpdmVzL3VubGVzcy1yb2xlLWluY2x1ZGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8vaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tIFwiLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JvbGVBY2Nlc3NdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvbGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBASW5wdXQoKSByb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzc3JvbGVMaXN0OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX3JvbGVBY2Nlc3M6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVBY2Nlc3MgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlQWNjZXNzOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZUxpc3Q6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuX3JvbGVMaXN0ID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUxpc3Q6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVTb3VyY2UgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlU291cmNlOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgcm9sZXM6IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAvLyBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG5cclxuICAgIHRoaXMucm9sZXMgPSB0aGlzLl9yb2xlTGlzdDtcclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKVxyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKClcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLl9yb2xlQWNjZXNzLmluY2x1ZGVzKHIpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tICcuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdW5sZXNzUm9sZV1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdW5sZXNzUm9sZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVMaXN0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIHJvbGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbHI6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVMaXN0LnNwbGl0KCcsJylcclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLnVubGVzc1JvbGUuc3BsaXQoJywnKS5pbmNsdWRlcyhyKSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvbGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvbGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSb2xlc0RpcmVjdGl2ZSwgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbUm9sZXNEaXJlY3RpdmUsIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQ0M7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7K0JBSkQ7Q0FVQzs7Ozs7O0FDVkQ7QUFPQTtJQW1DRSx3QkFDVSxnQkFBa0MsRUFDbEMsV0FBNkI7UUFEN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FB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