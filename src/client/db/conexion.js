import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import mysql from 'mysql';

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
       // res.status(200).json(data);
       console.log(data);
       
    });
});