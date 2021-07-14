# Sequelize BelongsTo

`belongsTo()` is the special method for define association. This method means that data in model belongs to data in another model.

For example in our database, profile model belongs to user model in association. Then we can define the association in profile model as follows:

```javascript
static associate(models) {
  // define association here
  profile.belongsTo(models.user, {
    as: "user",
    foreignKey: {
      name: "idUser",
    },
  });
}
```

Reference: [Sequelize belongsTo](https://sequelize.org/master/class/lib/associations/belongs-to.js~BelongsTo.html)
