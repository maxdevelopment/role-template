## System requirements

+ MongoDB
+ npm, NodeJS

## Installation
```
npm install
npm start
open http://127.0.0.1:3000/api/setup (create user with login: admin and password: a111111)
```

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


##DISCUSS:
1) response style for all api methods