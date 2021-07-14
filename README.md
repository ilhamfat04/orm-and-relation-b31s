# Insert data with ORM Sequelize

To perform inserting record data to specific table with ORM Sequelize, we can use method `create()` from our model. For example, we do it using user model.

```const { user } = require('../../models')

const createdData = await user.create(data);```  

References: [Insert data with Sequelize](https://sequelize.org/master/manual/model-querying-basics.html)