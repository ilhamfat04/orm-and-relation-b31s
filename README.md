# Select data with ORM Sequelize

To perform select record data from specific table with ORM Sequelize, we can use method `findAll()`  
and `findOne()` from our model.  
* Method `findAll()` is used to perform query to select a lot of record data, if `where` option not defined, it will get all data.  
* Method `findOne()` is used to perform query to select one record data based on condition with option `where`. 

For a simple example:  
```javascript
const { user } = require('../../models')

// findAll
try {
  const data = await user.findAll();
  console.log(data);
} catch(err) {
  console.log(err)
}

// findOne
try {
  const data = await user.findOne({
    where: {
      condition
    }
  });
  console.log(data);
} catch(err) {
  console.log(err)
}
```  

References: [Select data with Sequelize](https://sequelize.org/master/manual/model-querying-basics.html)
