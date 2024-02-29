import { Sequelize, DataTypes} from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import products from './productModel.js'
import reviews from './reviewModel.js'
const {HOST, USER, PASSWORD, DB, DIALECT, POOL} = dbConfig;

const { MAX, MIN, ACQUIRE, IDLE } = POOL;
const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: DIALECT,
        operatorsAliases: false,
        pool: {
            max: MAX,
            min: MIN,
            acquire: ACQUIRE,
            idle: IDLE
        }
    }
)

sequelize.authenticate().then(()=> {
    console.log('connected to the DB')
})
.catch(err => {
    console.log(`Error ${err}`)
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = products(sequelize, DataTypes);
db.reviews = reviews(sequelize, DataTypes);

db.sequelize.sync({force: false}). // very important to put it 
then(()=> {
    console.log('yes re-sync done!');
})  

export default db;