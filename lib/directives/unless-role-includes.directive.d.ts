import { ElementRef, OnInit } from '@angular/core';
export declare class UnlessRoleIncludesDirective implements OnInit {
    private elr;
    unlessRole: string;
    roleList: string;
    roleSource: string;
    roles: any;
    constructor(elr: ElementRef);
    ngOnInit(): void;
    checkRoleisValid(): any;
}
