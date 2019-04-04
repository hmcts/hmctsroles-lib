/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";
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
export { RolesDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RolesDirective.prototype._roleAccess;
    /**
     * @type {?}
     * @private
     */
    RolesDirective.prototype._roleList;
    /**
     * @type {?}
     * @private
     */
    RolesDirective.prototype._roleSource;
    /** @type {?} */
    RolesDirective.prototype.isVisible;
    /** @type {?} */
    RolesDirective.prototype.roles;
    /**
     * @type {?}
     * @private
     */
    RolesDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    RolesDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPeEY7SUFtQ0Usd0JBQ1UsZ0JBQWtDLEVBQ2xDLFdBQTZCO1FBRDdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBTHZDLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPZCxDQUFDO0lBL0JMLHNCQUNJLHNDQUFVOzs7OztRQURkLFVBQ2UsS0FBYTtZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUlELHNCQUNJLDhDQUFrQjs7Ozs7UUFEdEIsVUFDdUIsS0FBZTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLGdEQUFvQjs7Ozs7UUFEeEIsVUFDeUIsS0FBYTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7OztJQVlELGlDQUFROzs7SUFBUjs7WUFDTSxVQUFVO1FBRWQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTVCLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUVwQyxJQUFJLFVBQVU7WUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztZQUcxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFakMsQ0FBQzs7OztJQUdELHlDQUFnQjs7O0lBQWhCO1FBQUEsaUJBRUM7UUFEQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQTtJQUMzRCxDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7O2dCQVRtQixnQkFBZ0I7Z0JBQUUsV0FBVzs7OzZCQWU5QyxLQUFLO3FDQVFMLEtBQUs7dUNBU0wsS0FBSzs7SUFtQ1IscUJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXpEWSxjQUFjOzs7Ozs7SUFJekIscUNBQTRCOzs7OztJQVE1QixtQ0FBNEI7Ozs7O0lBUzVCLHFDQUE0Qjs7SUFRNUIsbUNBQWtCOztJQUNsQiwrQkFBYTs7Ozs7SUFHWCwwQ0FBMEM7Ozs7O0lBQzFDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLy9pbXBvcnQgeyBIbWN0c3JvbGVzTGliU2VydmljZSB9IGZyb20gXCIuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcm9sZUFjY2Vzc11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIEBJbnB1dCgpIHJvbGVBY2Nlc3M6IHN0cmluZztcclxuICAvLyBASW5wdXQoKSByb2xlQWNjZXNzcm9sZUxpc3Q6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfcm9sZUFjY2Vzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcm9sZUFjY2VzcyA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVBY2Nlc3M6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIF9yb2xlTGlzdDogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzc1JvbGVMaXN0KHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5fcm9sZUxpc3QgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlTGlzdDogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIF9yb2xlU291cmNlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzc1JvbGVTb3VyY2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcm9sZVNvdXJjZSA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVTb3VyY2U6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBpc1Zpc2libGUgPSBmYWxzZTtcclxuICByb2xlczogYW55W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIC8vIHByaXZhdGUgYXV0aDogSG1jdHNyb2xlc0xpYlNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBhdXRob3Jpc2VkXHJcblxyXG4gICAgdGhpcy5yb2xlcyA9IHRoaXMuX3JvbGVMaXN0O1xyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG5cclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMuX3JvbGVBY2Nlc3MuaW5jbHVkZXMocikpXHJcbiAgfVxyXG59XHJcbiJdfQ==