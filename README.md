# Delete data with ORM Sequelize

Let's prepare our database.

Inline-style:  
![alt text](https://github.com/DumbwaysDotId/query-with-orm-and-relation-template/tree/5.prepare-database/database_design.jpg "Database Design")

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

And then in the rest of the other migration files, you can edit them according to our database design. 