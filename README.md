# Sequelize HasOne

`hasOne()` is the special method for define association. This method means that one data in model (the source) has relation to one data in another model (the target).  

For example in our database, one data user has relation to one data in profile in association. Then we can define the association in user model as follows:  

```javascript
static associate(models) {
  // define association here
  user.hasOne(models.profile, {
    as: "profile",
    foreignKey: {
      name: "idUser",
    },
  });
}
```

Reference: [Sequelize hasOne](https://sequelize.org/master/class/lib/associations/has-one.js~HasOne.html)