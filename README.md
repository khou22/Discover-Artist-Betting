# React Express Boilerplate

## Test User
``` sql
INSERT INTO "public"."User"("id", "username", "password", "first_name", "last_name", "createdBy", "createdAt", "updatedAt") VALUES(1, 'admin', 'password', 'Kevin', 'Hou', 'admin', 'now', 'now') RETURNING "id", "username", "password", "first_name", "last_name", "createdBy", "createdAt", "updatedAt";
```

## Start
``` bash
# Open in seperate sessions simultaneously
$ npm run build-watch-server
$ npm run start-server-dev
$ npm run start-client
```