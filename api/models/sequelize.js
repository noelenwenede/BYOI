const { Sequelize } = require('sequelize');

const db = process.env.MYSQL_DATABASE;
const db_user = process.env.MYSQL_USER;
const db_password = process.env.MYSQL_ROOT_PASSWORD ;

// const db = process.env.MYSQL_PASSWORD;
// const db_user = process.env.MYSQL_USER;
// const db_password = process.env.MYSQL_DATABASE;




const sequelize = new Sequelize(db, db_user, db_password, {
    host: 'mysql',
    dialect: 'mysql',
});


try {
    sequelize.authenticate().then(d => {
        // console.log("database connection successful");
    }).catch(e => {
        // console.log(e);
        // console.log("connection failed");
    })

  } catch (error) {
    // console.error('Unable to connect to the database:', error);
  }


module.exports = sequelize;
