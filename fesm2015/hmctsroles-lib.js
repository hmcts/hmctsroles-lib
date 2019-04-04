import { Injectable, Directive, ElementRef, Input, ViewContainerRef, TemplateRef, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HmctsrolesLibService {
    constructor() {
    }
}
HmctsrolesLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
HmctsrolesLibService.ctorParameters = () => [];
/** @nocollapse */ HmctsrolesLibService.ngInjectableDef = defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(); }, token: HmctsrolesLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { HmctsrolesLibService } from "../hmctsroles-lib.service";
class RolesDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} templateRef
     */
    constructor(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.isVisible = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set roleAccess(value) {
        this._roleAccess = value;
        console.log('roleAccess: ', value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set roleAccessRoleList(value) {
        this._roleList = value;
        console.log('roleList: ', value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set roleAccessRoleSource(value) {
        this._roleSource = value;
        console.log('roleSource: ', value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let authorised;
        this.roles = this._roleList;
        authorised = this.checkRoleisValid();
        if (authorised)
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        else
            this.viewContainerRef.clear();
    }
    /**
     * @return {?}
     */
    checkRoleisValid() {
        return this.roles.some((/**
         * @param {?} r
         * @return {?}
         */
        r => this._roleAccess.includes(r)));
    }
}
RolesDirective.decorators = [
    { type: Directive, args: [{
                selector: "[roleAccess]"
            },] },
];
RolesDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
RolesDirective.propDecorators = {
    roleAccess: [{ type: Input }],
    roleAccessRoleList: [{ type: Input }],
    roleAccessRoleSource: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { HmctsrolesLibService } from '../hmctsroles-lib.service';
class UnlessRoleIncludesDirective {
    /**
     * @param {?} elr
     */
    constructor(elr) {
        this.elr = elr;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let authorised;
        this.roles = this.roleList.split(',');
        authorised = this.checkRoleisValid();
        if (authorised)
            this.elr.nativeElement.style.visibility = 'hidden';
        else
            this.elr.nativeElement.style.visibility = 'visible';
    }
    /**
     * @return {?}
     */
    checkRoleisValid() {
        return this.roles.some((/**
         * @param {?} r
         * @return {?}
         */
        r => this.unlessRole.split(',').includes(r)));
    }
}
UnlessRoleIncludesDirective.decorators = [
    { type: Directive, args: [{
                selector: "[unlessRole]"
            },] },
];
UnlessRoleIncludesDirective.ctorParameters = () => [
    { type: ElementRef }
];
UnlessRoleIncludesDirective.propDecorators = {
    unlessRole: [{ type: Input }],
    roleList: [{ type: Input }],
    roleSource: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HmctsrolesLibModule {
}
HmctsrolesLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [RolesDirective, UnlessRoleIncludesDirective],
                exports: [RolesDirective, UnlessRoleIncludesDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HmctsrolesLibService, HmctsrolesLibModule, RolesDirective as ɵa, UnlessRoleIncludesDirective as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9kaXJlY3RpdmVzL3VubGVzcy1yb2xlLWluY2x1ZGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8vaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tIFwiLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JvbGVBY2Nlc3NdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvbGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBASW5wdXQoKSByb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzc3JvbGVMaXN0OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX3JvbGVBY2Nlc3M6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVBY2Nlc3MgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlQWNjZXNzOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZUxpc3Q6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuX3JvbGVMaXN0ID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUxpc3Q6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVTb3VyY2UgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlU291cmNlOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgcm9sZXM6IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAvLyBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG5cclxuICAgIHRoaXMucm9sZXMgPSB0aGlzLl9yb2xlTGlzdDtcclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKVxyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKClcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLl9yb2xlQWNjZXNzLmluY2x1ZGVzKHIpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tICcuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdW5sZXNzUm9sZV1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdW5sZXNzUm9sZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVMaXN0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIHJvbGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbHI6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVMaXN0LnNwbGl0KCcsJylcclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLnVubGVzc1JvbGUuc3BsaXQoJywnKS5pbmNsdWRlcyhyKSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvbGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvbGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSb2xlc0RpcmVjdGl2ZSwgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbUm9sZXNEaXJlY3RpdmUsIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQ0M7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7O0FDSkQ7QUFVQTs7Ozs7SUFnQ0UsWUFDVSxnQkFBa0MsRUFDbEMsV0FBNkI7UUFEN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFMdkMs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