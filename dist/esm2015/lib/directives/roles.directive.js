/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";
import { HmctsrolesLibService } from "../hmctsroles-lib.service";
export class RolesDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} auth
     */
    constructor(viewContainerRef, templateRef, auth) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.auth = auth;
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
        if (this._roleSource == 'cookie')
            this.roles = this.auth.getUserRoles();
        else
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
        return this.roles.some(r => this._roleAccess.includes(r));
    }
}
RolesDirective.decorators = [
    { type: Directive, args: [{
                selector: "[roleAccess]"
            },] },
];
/** @nocollapse */
RolesDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: HmctsrolesLibService }
];
RolesDirective.propDecorators = {
    roleAccess: [{ type: Input }],
    roleAccessRoleList: [{ type: Input }],
    roleAccessRoleSource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RolesDirective.prototype._roleAccess;
    /** @type {?} */
    RolesDirective.prototype._roleList;
    /** @type {?} */
    RolesDirective.prototype._roleSource;
    /** @type {?} */
    RolesDirective.prototype.isVisible;
    /** @type {?} */
    RolesDirective.prototype.roles;
    /** @type {?} */
    RolesDirective.prototype.viewContainerRef;
    /** @type {?} */
    RolesDirective.prototype.templateRef;
    /** @type {?} */
    RolesDirective.prototype.auth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFDaEQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRakUsTUFBTTs7Ozs7O0lBZ0NKLFlBQ1Usa0JBQ0EsYUFDQTtRQUZBLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsU0FBSSxHQUFKLElBQUk7eUJBTkYsS0FBSztLQU9aOzs7OztJQS9CTCxJQUNJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUlELElBQ0ksa0JBQWtCLENBQUMsS0FBZTtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFLRCxJQUNJLG9CQUFvQixDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFZRCxRQUFROztRQUNOLElBQUksVUFBVSxDQUFBO1FBRWQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3ZDLElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFHOUIsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFNUQsSUFBSTtZQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtLQUVoQzs7OztJQUdELGdCQUFnQjtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDMUQ7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFUWSxnQkFBZ0I7WUFBRSxXQUFXO1lBRWpDLG9CQUFvQjs7O3lCQWExQixLQUFLO2lDQVFMLEtBQUs7bUNBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE9uSW5pdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSBcIi4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyb2xlQWNjZXNzXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzczogc3RyaW5nO1xyXG4gIC8vIEBJbnB1dCgpIHJvbGVBY2Nlc3Nyb2xlTGlzdDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9yb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlQWNjZXNzID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUFjY2VzczogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVMaXN0OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZUxpc3QodmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLl9yb2xlTGlzdCA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVMaXN0OiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVTb3VyY2U6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZVNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlU291cmNlID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZVNvdXJjZTogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIHJvbGVzOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuXHJcbiAgICBpZiAodGhpcy5fcm9sZVNvdXJjZSA9PSAnY29va2llJylcclxuICAgICAgdGhpcy5yb2xlcyA9IHRoaXMuYXV0aC5nZXRVc2VyUm9sZXMoKVxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJvbGVzID0gdGhpcy5fcm9sZUxpc3Q7XHJcblxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG5cclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMuX3JvbGVBY2Nlc3MuaW5jbHVkZXMocikpXHJcbiAgfVxyXG59XHJcbiJdfQ==