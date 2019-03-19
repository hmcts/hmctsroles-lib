/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie";
export class HmctsrolesLibService {
    /**
     * @param {?} cookieService
     */
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    /**
     * @return {?}
     */
    getUserRoles() {
        /** @type {?} */
        let roles = [];
        /** @type {?} */
        let ck = this.cookieService.get('__roles__');
        if (ck != null)
            roles = ck.split(',');
        //console.log('@@COOKIE:', roles)
        return roles;
    }
}
HmctsrolesLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
HmctsrolesLibService.ctorParameters = () => [
    { type: CookieService }
];
/** @nocollapse */ HmctsrolesLibService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(i0.inject(i1.CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HmctsrolesLibService.prototype.cookieService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2htY3Rzcm9sZXMtbGliLyIsInNvdXJjZXMiOlsibGliL2htY3Rzcm9sZXMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBSzNDLE1BQU07Ozs7SUFFSixZQUNVO1FBQUEsa0JBQWEsR0FBYixhQUFhO0tBQW9COzs7O0lBVXBDLFlBQVk7O1FBQ2pCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7UUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDO1lBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRXRDLE1BQU0sQ0FBQyxLQUFLLENBQUE7Ozs7WUFyQmYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c3JvbGVzTGliU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7IH1cclxuXHJcblxyXG5cclxuICAvLyBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcclxuICAvLyAgIGxldCByb2xlcyA9IFsncm9sZUEnLCAncm9sZUInLCAncm9sZUMnXVxyXG4gIC8vICAgcmV0dXJuIHJvbGVzXHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgcHVibGljIGdldFVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XHJcbiAgICBsZXQgcm9sZXMgPSBbXTtcclxuICAgIGxldCBjayA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ19fcm9sZXNfXycpO1xyXG4gICAgaWYgKGNrICE9IG51bGwpIHJvbGVzID0gY2suc3BsaXQoJywnKTtcclxuICAgIC8vY29uc29sZS5sb2coJ0BAQ09PS0lFOicsIHJvbGVzKVxyXG4gICAgcmV0dXJuIHJvbGVzXHJcblxyXG4gIH1cclxufVxyXG4iXX0=