(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-cookie')) :
    typeof define === 'function' && define.amd ? define('hmctsroles-lib', ['exports', '@angular/core', 'ngx-cookie'], factory) :
    (factory((global['hmctsroles-lib'] = {}),global.ng.core,null));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsrolesLibService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        HmctsrolesLibService.ctorParameters = function () {
            return [
                { type: i1.CookieService }
            ];
        };
        /** @nocollapse */ HmctsrolesLibService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(i0.inject(i1.CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });
        return HmctsrolesLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsrolesLibComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var RolesDirective = (function () {
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
            { type: i0.Directive, args: [{
                        selector: "[roleAccess]"
                    },] },
        ];
        /** @nocollapse */
        RolesDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef },
                { type: i0.TemplateRef },
                { type: HmctsrolesLibService }
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UnlessRoleIncludesDirective = (function () {
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
            { type: i0.Directive, args: [{
                        selector: "[unlessRole]"
                    },] },
        ];
        /** @nocollapse */
        UnlessRoleIncludesDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: HmctsrolesLibService }
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsrolesLibModule = (function () {
        function HmctsrolesLibModule() {
        }
        HmctsrolesLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CookieModule.forRoot()
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

    exports.HmctsrolesLibService = HmctsrolesLibService;
    exports.HmctsrolesLibComponent = HmctsrolesLibComponent;
    exports.HmctsrolesLibModule = HmctsrolesLibModule;
    exports.ɵa = RolesDirective;
    exports.ɵb = UnlessRoleIncludesDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvaG1jdHNyb2xlcy1saWIuc2VydmljZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2RpcmVjdGl2ZXMvcm9sZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gIC8vICAgbGV0IHJvbGVzID0gWydyb2xlQScsICdyb2xlQicsICdyb2xlQyddXHJcbiAgLy8gICByZXR1cm4gcm9sZXNcclxuICAvLyB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcclxuICAgIGxldCByb2xlcyA9IFtdO1xyXG4gICAgbGV0IGNrID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnX19yb2xlc19fJyk7XHJcbiAgICBpZiAoY2sgIT0gbnVsbCkgcm9sZXMgPSBjay5zcGxpdCgnLCcpO1xyXG4gICAgLy9jb25zb2xlLmxvZygnQEBDT09LSUU6Jywgcm9sZXMpXHJcbiAgICByZXR1cm4gcm9sZXNcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2htY3RzLWhtY3Rzcm9sZXMtbGliJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIGhtY3Rzcm9sZXMtbGliIHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT25Jbml0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tIFwiLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JvbGVBY2Nlc3NdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvbGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBASW5wdXQoKSByb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzc3JvbGVMaXN0OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX3JvbGVBY2Nlc3M6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVBY2Nlc3MgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlQWNjZXNzOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZUxpc3Q6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuX3JvbGVMaXN0ID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUxpc3Q6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVTb3VyY2UgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlU291cmNlOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgcm9sZXM6IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG5cclxuICAgIGlmICh0aGlzLl9yb2xlU291cmNlID09ICdjb29raWUnKVxyXG4gICAgICB0aGlzLnJvbGVzID0gdGhpcy5hdXRoLmdldFVzZXJSb2xlcygpXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucm9sZXMgPSB0aGlzLl9yb2xlTGlzdDtcclxuXHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcblxyXG4gICAgaWYgKGF1dGhvcmlzZWQpXHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZilcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy5fcm9sZUFjY2Vzcy5pbmNsdWRlcyhyKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliU2VydmljZSB9IGZyb20gJy4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt1bmxlc3NSb2xlXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB1bmxlc3NSb2xlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZUxpc3Q6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlU291cmNlOiBzdHJpbmc7XHJcbiAgcm9sZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVscjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgYXV0aDogSG1jdHNyb2xlc0xpYlNlcnZpY2VcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVMaXN0LnNwbGl0KCcsJylcclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuICAgIC8vY29uc29sZS5sb2coJ2F1dGgnLCBhdXRob3Jpc2VkKVxyXG4gICAgaWYgKGF1dGhvcmlzZWQpXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMudW5sZXNzUm9sZS5zcGxpdCgnLCcpLmluY2x1ZGVzKHIpKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG1jdHNyb2xlc0xpYkNvbXBvbmVudCB9IGZyb20gJy4vaG1jdHNyb2xlcy1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm9sZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcm9sZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3VubGVzcy1yb2xlLWluY2x1ZGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvb2tpZU1vZHVsZSB9IGZyb20gJ25neC1jb29raWUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb29raWVNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtIbWN0c3JvbGVzTGliQ29tcG9uZW50LCBSb2xlc0RpcmVjdGl2ZSwgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbSG1jdHNyb2xlc0xpYkNvbXBvbmVudCwgUm9sZXNEaXJlY3RpdmUsIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29va2llU2VydmljZSIsIkNvbXBvbmVudCIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVJlZiIsIklucHV0IiwiRWxlbWVudFJlZiIsIk5nTW9kdWxlIiwiQ29va2llTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFRRSw4QkFDVTtZQUFBLGtCQUFhLEdBQWIsYUFBYTtTQUFvQjs7OztRQVVwQywyQ0FBWTs7Ozs7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLElBQUksRUFBRSxJQUFJLElBQUk7b0JBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUV0QyxPQUFPLEtBQUssQ0FBQTs7O29CQXJCZkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBSlFDLGdCQUFhOzs7O21DQUR0Qjs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIseUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLHNEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3FDQVZEOzs7Ozs7O0FDQUE7UUEyQ0Usd0JBQ1Usa0JBQ0EsYUFDQTtZQUZBLHFCQUFnQixHQUFoQixnQkFBZ0I7WUFDaEIsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsU0FBSSxH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