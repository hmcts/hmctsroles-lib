import { CookieService } from 'ngx-cookie';
export declare class HmctsrolesLibService {
    private cookieService;
    constructor(cookieService: CookieService);
    getUserRoles(): string[];
}
