# HmctsrolesLibApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Generate Library

Run `ng run package`

## Publish to NPM 
Run  `NPM publish` 


## Directive use

Examble of directive use
#unlessRole
Displays component / element unless role matches role provided in roleList
In other words the fefault action is to display unless a match is found
There are 3 attributes,  
unlessRole - the role we're checking - this can be a comma separated list
roleList - The full set of roles we're checking against
roleSource  - inline or cookie - this could be a future enhancement where the rolelist is stored in a cookie and not provided in the attribute.

Format use as below:
'''&lt; h1 [unlessRole]="'roleA'"  roleList="roleA,roleB,roleC" roleSource="inline" &gt; Test unlessRole directive display if false &lt;/&gt;'''



#roleAccess
This is a structural directive.
Removes or adds element based on role matching in provided rolelist.
roleAccess and roleList are provided as input arrays
roleSource  - inline or cookie - this could be a future enhancement where the rolelist is stored in a cookie and not provided in the attribute..

'''&lt; h1 *roleAccess="['xRoleA'];roleList:['RoleA','RoleB','RoleC'];roleSource:'inline'"  &gt; Test roleAccess directive - display if true &lt;/&gt;'''