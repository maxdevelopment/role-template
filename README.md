# Role

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Rules
```
For jwt access send header "x-access-token" with token
```

# API

### Login

#### POST /api/auth

params:
```
login - required
password - required
```

response:
```
{
  "success": true,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODUxNjc3NDYyM2E1YjQ0YThlMjQ5MzYiLCJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkUGdTdHhrOXpPWUFFYU0ua2R2SlI0Llp3SUh1ekdjR3dVWVcwRzg5d0IvVi4uWnpkUG16RGUiLCJyb2xlIjoxLCJfX3YiOjAsIm5hbWUiOnsibGFzdCI6Im1vZGUiLCJmaXJzdCI6IkdvZCJ9LCJmdWxsX25hbWUiOiJHb2QgbW9kZSIsImlkIjoiNTg1MTY3NzQ2MjNhNWI0NGE4ZTI0OTM2In0.DZpPl0VcZpD5DupicpzhqbfEac2um_BGRGLLjF0Zi3Q"
}
```

error response:
```
{
  "success": false,
  "msg": "Authentication failed. User not found."
}
```

#### GET /api/user - return users list

role:
```
admin
```
response:
```
{
  "success": true,
  "msg": [
    {
      "_id": "58516774623a5b44a8e24936",
      "login": "admin",
      "name": {
        "last": "mode",
        "first": "God"
      },
      "full_name": "God mode",
      "id": "58516774623a5b44a8e24936"
    },
    {
      "_id": "585169f5b754004944cd5aa3",
      "login": "new_admin",
      "name": {
        "last": "N",
        "first": "Max"
      },
      "full_name": "Max N",
      "id": "585169f5b754004944cd5aa3"
    },
    {
      "_id": "58516a9ddf91944a90859ff3",
      "login": "new_max_admin",
      "name": {
        "last": "Nar",
        "first": "Max"
      },
      "full_name": "Max Nar",
      "id": "58516a9ddf91944a90859ff3"
    }
  ]
}
```
#### POST /api/user - create new user

role:
```
admin
```
params:
```
login - required
password - required
role - required (1 - admin, 2 - chief, 3 - manager)
full_name - not required
```
response:
```
{
  "success": true,
  "msg": "Successful created new user."
}
```
error response:
```
{
  "success": false,
  "msg": "Successful created new user."
}
```
