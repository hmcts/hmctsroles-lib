import {
  Directive, ViewContainerRef, TemplateRef, Input, OnInit
} from "@angular/core";
import { HmctsrolesLibService } from "../hmctsroles-lib.service";




@Directive({
  selector: "[roleAccess]"
})
export class RolesDirective implements OnInit {
  // @Input() roleAccess: string;
  // @Input() roleAccessroleList: string;

  private _roleAccess: string;
  @Input()
  set roleAccess(value: string) {
    this._roleAccess = value;
    console.log('roleAccess: ', value);
  }


  private _roleList: string[];
  @Input()
  set roleAccessRoleList(value: string[]) {
    this._roleList = value;
    console.log('roleList: ', value);
  }



  private _roleSource: string;
  @Input()
  set roleAccessRoleSource(value: string) {
    this._roleSource = value;
    console.log('roleSource: ', value);
  }


  isVisible = false;
  roles: any[];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private auth: HmctsrolesLibService
  ) { }

  ngOnInit() {
    let authorised

    if (this._roleSource == 'cookie')
      this.roles = this.auth.getUserRoles()
    else
      this.roles = this._roleList;

    console.log('roleList: ', this.roles);
    authorised = this.checkRoleisValid()

    console.log('roles.directive authorised:', authorised)
    if (authorised)
      this.viewContainerRef.createEmbeddedView(this.templateRef)

    else
      this.viewContainerRef.clear()

  }


  checkRoleisValid() {
    // return true;
    //return this.roles.some(r => this.roleAccess.split(',').includes(r))
    return this.roles.some(r => this._roleAccess.includes(r))
  }
}
