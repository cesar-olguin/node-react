import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const app = express();

app.set('port',process.env.PORT || 3000);

app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.listen(app.get('port'),() =>{
    console.log('Server en el puerto: ',app.get('port'));
});