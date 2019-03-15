import { ElementRef, OnInit } from '@angular/core';
import { HmctsrolesLibService } from '../hmctsroles-lib.service';
export declare class UnlessRoleIncludesDirective implements OnInit {
    private elr;
    private auth;
    unlessRole: string;
    roleList: string;
    roleSource: string;
    roles: any;
    constructor(elr: ElementRef, auth: HmctsrolesLibService);
    ngOnInit(): void;
    checkRoleisValid(): any;
}
