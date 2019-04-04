(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('hmctsroles-lib', ['exports', '@angular/core'], factory) :
    (factory((global['hmctsroles-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HmctsrolesLibService = /** @class */ (function () {
        function HmctsrolesLibService() {
        }
        HmctsrolesLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        HmctsrolesLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ HmctsrolesLibService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(); }, token: HmctsrolesLibService, providedIn: "root" });
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
                return this.roles.some(( /**
                 * @param {?} r
                 * @return {?}
                 */function (r) { return _this._roleAccess.includes(r); }));
            };
        RolesDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[roleAccess]"
                    },] },
        ];
        RolesDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef },
                { type: i0.TemplateRef }
            ];
        };
        RolesDirective.propDecorators = {
            roleAccess: [{ type: i0.Input }],
            roleAccessRoleList: [{ type: i0.Input }],
            roleAccessRoleSource: [{ type: i0.Input }]
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
                return this.roles.some(( /**
                 * @param {?} r
                 * @return {?}
                 */function (r) { return _this.unlessRole.split(',').includes(r); }));
            };
        UnlessRoleIncludesDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[unlessRole]"
                    },] },
        ];
        UnlessRoleIncludesDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        UnlessRoleIncludesDirective.propDecorators = {
            unlessRole: [{ type: i0.Input }],
            roleList: [{ type: i0.Input }],
            roleSource: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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

    exports.HmctsrolesLibService = HmctsrolesLibService;
    exports.HmctsrolesLibModule = HmctsrolesLibModule;
    exports.ɵa = RolesDirective;
    exports.ɵb = UnlessRoleIncludesDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvaG1jdHNyb2xlcy1saWIuc2VydmljZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2RpcmVjdGl2ZXMvcm9sZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c3JvbGVzTGliU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vL2ltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSBcIi4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyb2xlQWNjZXNzXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzczogc3RyaW5nO1xyXG4gIC8vIEBJbnB1dCgpIHJvbGVBY2Nlc3Nyb2xlTGlzdDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9yb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlQWNjZXNzID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUFjY2VzczogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVMaXN0OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZUxpc3QodmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLl9yb2xlTGlzdCA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVMaXN0OiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVTb3VyY2U6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZVNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlU291cmNlID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZVNvdXJjZTogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIHJvbGVzOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgLy8gcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuXHJcbiAgICB0aGlzLnJvbGVzID0gdGhpcy5fcm9sZUxpc3Q7XHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcblxyXG4gICAgaWYgKGF1dGhvcmlzZWQpXHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZilcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy5fcm9sZUFjY2Vzcy5pbmNsdWRlcyhyKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3VubGVzc1JvbGVdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHVubGVzc1JvbGU6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlTGlzdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVTb3VyY2U6IHN0cmluZztcclxuICByb2xlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxyOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGxldCBhdXRob3Jpc2VkXHJcbiAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlTGlzdC5zcGxpdCgnLCcpXHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcblxyXG4gICAgaWYgKGF1dGhvcmlzZWQpXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy51bmxlc3NSb2xlLnNwbGl0KCcsJykuaW5jbHVkZXMocikpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb2xlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW10sXHJcbiAgZGVjbGFyYXRpb25zOiBbUm9sZXNEaXJlY3RpdmUsIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW1JvbGVzRGlyZWN0aXZlLCBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c3JvbGVzTGliTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVJlZiIsIklucHV0IiwiRWxlbWVudFJlZiIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUNDOztvQkFORkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7OzttQ0FKRDtLQVVDOzs7Ozs7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