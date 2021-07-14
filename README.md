# Sequelize HasMany

`hasMany()` is the special method for define association. This method means that one data in model (the source) has relation to many data in another model (the target).  

For example in our database, one data user has relation to many data product in association. Then we can define the association in user model as follows:  

```javascript
user.hasMany(models.product, {
  as: "products",
  foreignKey: {
    name: "idUser",
  },
});
```

Reference: [Sequelize hasMany](https://sequelize.org/master/class/lib/associations/has-many.js~HasMany.html)