# Update data with ORM Sequelize

To perform update record data from specific table with ORM Sequelize, we can use method `update()` from our model.

For a simple example:  
```javascript
const { user } = require('../../models')

try {
  await user.update(newData, {
    where: {
      condition
    }
  });
} catch(err) {
  console.log(err)
}
```  

References: [Update data with Sequelize](https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries)