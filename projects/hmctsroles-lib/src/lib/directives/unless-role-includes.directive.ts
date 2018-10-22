import { Directive, ElementRef, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { HmctsrolesLibService } from '../hmctsroles-lib.service';


@Directive({
  selector: "[unlessRole]"
})
export class UnlessRoleIncludesDirective implements OnInit {

  @Input() unlessRole: string;
  @Input() roleList: string;
  @Input() roleSource: string;
  roles: any;

  constructor(
    private elr: ElementRef,
    private auth: HmctsrolesLibService
  ) {

  }


  ngOnInit() {

    console.log('@@@@@@@unlessRole', this.unlessRole)
    console.log('@@@@@@@roleList', this.roleList)
    console.log('@@@@@@@roleSource', this.roleSource)

    let authorised
    //this.roles = this.auth.getUserRoles()
    this.roles = this.roleList.split(',')
    console.log('after split', this.roles)
    authorised = this.checkRoleisValid()
    console.log('auth', authorised)
    if (authorised)
      // this.elr.nativeElement.style.visibility = 'hidden'
      this.elr.nativeElement.style.color = 'green';

    else
      // this.elr.nativeElement.style.visibility = 'visible'
      this.elr.nativeElement.style.color = 'red';

  }




  checkRoleisValid() {
    return this.roles.some(r => this.unlessRole.split(',').includes(r))
  }

}
