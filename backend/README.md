# Robo-Garden-Notes-2022-Sept

# Project
- [x] Implement guestbook saving to SQL
- [ ] Publish App
- [ ] Front End Angular
- [ ] GIT Challenge

# Front End


## h2
### h3

- Test

1. Hello


| First Name | Last Name |
| ---------- | --------- |
| Jordan     | Doerksen  |

> This is a quote

[RoboGarden](https://robogarden.ca)

- [x] Do thing 1
- [ ] Do thing 2

```html
<h1>Example</h1>
<p>This is an example of a codeblock in markdown</p>
```

## SASS
```bash
sass [options] <inputfile> <outputfile>

```

# Back End

```bash
# sequelize-cli

npx sequelize-cli model:generate --name GuestBookEntry --attributes firstName:string,lastName:string,displayName:string,email:string,message:string


npx sequelize-cli seed:generate --name demo-guest-book-entry

 npx sequelize-cli db:seed:all
```



### Notes

- [X] Recreate Database
- [ ] Create View for guestbook
- [ ] Create a service for backend api
- [ ] Create route (front-api)



# RoboNotes2022

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
