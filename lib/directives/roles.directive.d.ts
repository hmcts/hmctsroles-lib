import { ViewContainerRef, TemplateRef, OnInit } from "@angular/core";
export declare class RolesDirective implements OnInit {
    private viewContainerRef;
    private templateRef;
    private _roleAccess;
    roleAccess: string;
    private _roleList;
    roleAccessRoleList: string[];
    private _roleSource;
    roleAccessRoleSource: string;
    isVisible: boolean;
    roles: any[];
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>);
    ngOnInit(): void;
    checkRoleisValid(): boolean;
}
