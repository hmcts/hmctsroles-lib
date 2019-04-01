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



## Directive use
#unlessRole
Displays component / element unless role matches role provided in roleList
In other words the fefault action is to display unless a match is found
There are 3 attributes,  
unlessRole - the role we're checking - this can be a comma separated list
roleList - The full set of roles we're checking against
roleSource  - inline or cookie - this could be a future enhancement where the rolelist is stored in a cookie and not provided in the attribute.



``
&lt; h1 [unlessRole]="'roleA'"  roleList="roleA,roleB,roleC" roleSource="inline" &gt; Test unlessRole directive display if false &lt;/&gt;
``



#roleAccess

This is a structural directive.
Removes or adds element based on role matching in provided rolelist.
roleAccess and roleList are provided as input arrays
roleSource  - inline or cookie - this could be a future enhancement where the rolelist is stored in a cookie and not provided in the attribute..

``
&lt; h1 *roleAccess="['xRoleA'];roleList:['RoleA','RoleB','RoleC'];roleSource:'inline'"  &gt; Test roleAccess directive - display if true &lt;/&gt;``

...


#Deployment process to HMCTS NPM
- Need to make sure your `npm run lint`  works as travis picks it up by default.
- Create a travis.yml file in @root-project/travis.yml
- You can use the following if you want and edit for the project

```
language: node_js
node_js:
  - "lts/*"
cache:
  directories:
    - node_modules
sudo: required
addons:
  chrome: stable
apt:
  sources:
    - google-chrome
  packages:
    - google-chrome-stable
    - google-chrome-beta

before_deploy:
- npm i

script:
  - npm run build:package

deploy:
  provider: npm
  email: jenkins-reform@HMCTS.NET
  api_key:
    secure: %YOU_KEY_SHOULD_BE%
  on:
    tags: true
    repo: hmcts/hmctsroles-lib
```

- You need to push the PR and ask on channel #devops or `Tim J` to update the PR with a API_KEY.
- Once the initial setup is created and all the test passes you need to create a new release to publish your library.

## Creating a release
- Go to https://github.com/hmcts/hmctsroles-lib/releases/new
- Submit and wait.


