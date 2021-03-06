import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import mysql from 'mysql';

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'examen'
});

let clientModel = {};

clientModel.getUsers = (callback) => {
    if (connection){
        connection.query('SELECT * FROM usuarios ORDER BY id',
        (err,rows) => {
            if (err){
                throw err;
            }
            else{
                callback(null, rows);
            }
        }
    )
    }
};

app.get('/api/cliente', (req,res) => {
    clientModel.getUsers((err,data)=>{
       res.json(data);
      // console.log(data); 
    });
});

app.set('port',process.env.PORT || 3001);

app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.listen(app.get('port'),() =>{
    console.log('Server en el puerto: ',app.get('port'));
});