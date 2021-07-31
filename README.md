# Prepare Database

Let's prepare our database.

Database design:  
![alt text](https://github.com/DumbwaysDotId/query-with-orm-and-relation-template/blob/5.prepare-database/database-design.jpg "Database Design")

Don't worry, all needed models have been generated, your focus is modify property in migration file before run migration.

For a example, in profile migration file you can edit idUser property:  
```javascript
...
idUser: {
       type: Sequelize.INTEGER,
       references: {
         model: "users",
         key: "id",
       },
       onUpdate: "CASCADE",
       onDelete: "CASCADE",
     },
...
```  
The above example is property from profile model to be foreign key because it has relation with user model.

And then on the rest migration files, you can edit them according to our database design. 
