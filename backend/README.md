```bash
# sequelize-cli

npx sequelize-cli model:generate --name GuestBookEntry --attributes firstName:string,lastName:string,displayName:string,email:string,message:string


npx sequelize-cli seed:generate --name demo-guest-book-entry

 npx sequelize-cli db:seed:all
```