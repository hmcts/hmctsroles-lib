/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { HmctsrolesLibService } from '../hmctsroles-lib.service';
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
export { UnlessRoleIncludesDirective };
if (false) {
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.unlessRole;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roleList;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roleSource;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roles;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.elr;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.auth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBYS9ELHFDQUNVLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILFNBQUksR0FBSixJQUFJO0tBR2I7Ozs7SUFHRCw4Q0FBUTs7O0lBQVI7O1FBRUUsSUFBSSxVQUFVLENBQUE7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTs7UUFFcEMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7UUFFcEQsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO0tBRXREOzs7O0lBS0Qsc0RBQWdCOzs7SUFBaEI7UUFBQSxpQkFFQztRQURDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFBO0tBQ3BFOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFObUIsVUFBVTtnQkFDckIsb0JBQW9COzs7NkJBUTFCLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztzQ0FYUjs7U0FPYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3VubGVzc1JvbGVdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHVubGVzc1JvbGU6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlTGlzdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVTb3VyY2U6IHN0cmluZztcclxuICByb2xlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxyOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG4gICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZUxpc3Quc3BsaXQoJywnKVxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG4gICAgLy9jb25zb2xlLmxvZygnYXV0aCcsIGF1dGhvcmlzZWQpXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy51bmxlc3NSb2xlLnNwbGl0KCcsJykuaW5jbHVkZXMocikpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=