//dir de la db
import{
    DB_HOST,
 DB_USER ,
 DB_PASSWORD ,
 DB_NAME,
 DB_PORT 
} from './config.js'

module.exports = {

    database: {
        connectionLimit: 1000,
        host: DB_HOST,//'localhost',//'152.70.216.169',//'localhost', //'',
        port: DB_PORT,//'3306',
        user: DB_USER,//'root',//'harold151199',//'harold',
        password: DB_PASSWORD,//'123456789',//'151199',
        database: DB_NAME//'sw1pizarrac4'
        // connectionLimit: 100,
        // host: 'localhost',//'152.70.216.169',//'localhost', //'',
        // port: '3307',
        // user: 'root',//'harold151199',//'harold',
        // password: '1234',//'151199',
        // database: 'sw1pizarrac4'
    }
}