import { Directive, ElementRef, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
//import { HmctsrolesLibService } from '../hmctsroles-lib.service';


@Directive({
  selector: "[unlessRole]"
})
export class UnlessRoleIncludesDirective implements OnInit {

  @Input() unlessRole: string;
  @Input() roleList: string;
  @Input() roleSource: string;
  roles: any;

  constructor(
    private elr: ElementRef) { }


  ngOnInit() {

    let authorised
    this.roles = this.roleList.split(',')

    authorised = this.checkRoleisValid()

    if (authorised)
      this.elr.nativeElement.style.visibility = 'hidden'

    else
      this.elr.nativeElement.style.visibility = 'visible'

  }



  checkRoleisValid() {
    return this.roles.some(r => this.unlessRole.split(',').includes(r))
  }

}
