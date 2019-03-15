import { ViewContainerRef, TemplateRef, OnInit } from "@angular/core";
import { HmctsrolesLibService } from "../hmctsroles-lib.service";
export declare class RolesDirective implements OnInit {
    private viewContainerRef;
    private templateRef;
    private auth;
    private _roleAccess;
    roleAccess: string;
    private _roleList;
    roleAccessRoleList: string[];
    private _roleSource;
    roleAccessRoleSource: string;
    isVisible: boolean;
    roles: any[];
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, auth: HmctsrolesLibService);
    ngOnInit(): void;
    checkRoleisValid(): boolean;
}
