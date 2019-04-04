/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
//import { HmctsrolesLibService } from '../hmctsroles-lib.service';
export class UnlessRoleIncludesDirective {
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
if (false) {
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.unlessRole;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roleList;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roleSource;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roles;
    /**
     * @type {?}
     * @private
     */
    UnlessRoleIncludesDirective.prototype.elr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7O0FBT3BHLE1BQU07Ozs7SUFPSixZQUNVLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQzs7OztJQUc5QixRQUFROztZQUVGLFVBQVU7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUVwQyxJQUFJLFVBQVU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTs7WUFHbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7SUFFdkQsQ0FBQzs7OztJQUlELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQTtJQUNyRSxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7WUFObUIsVUFBVTs7O3lCQVMzQixLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUZOLGlEQUE0Qjs7SUFDNUIsK0NBQTBCOztJQUMxQixpREFBNEI7O0lBQzVCLDRDQUFXOzs7OztJQUdULDBDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBIbWN0c3JvbGVzTGliU2VydmljZSB9IGZyb20gJy4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt1bmxlc3NSb2xlXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB1bmxlc3NSb2xlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZUxpc3Q6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlU291cmNlOiBzdHJpbmc7XHJcbiAgcm9sZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVscjogRWxlbWVudFJlZikgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG4gICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZUxpc3Quc3BsaXQoJywnKVxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG5cclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLmVsci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMudW5sZXNzUm9sZS5zcGxpdCgnLCcpLmluY2x1ZGVzKHIpKVxyXG4gIH1cclxuXHJcbn1cclxuIl19