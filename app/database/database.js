import Sequelize from 'sequelize';
// import 'dotenv/config' //instalar dotenv para usar esta linea

const sequelize = new Sequelize(
  "db_bootcamp",
  "postgres",
  "123456",
  {
    host: "localhost",
    dialect: "postgres"
  }
);

export default sequelize;