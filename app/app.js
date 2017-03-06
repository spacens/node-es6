import express              from 'express';
import cors                 from 'cors';
import morgan               from 'morgan';
import bodyParser           from 'body-parser';
import {errorHandler}       from './module-middlewares';

<<<<<<< HEAD
import restIdentity         from './rest-identity';
import restUsers            from './rest-users';
=======
import ilRestIdentity       from './rest-identity';
import ilRestUsers          from './rest-users';
>>>>>>> origin/master


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

<<<<<<< HEAD
restIdentity(app);
restUsers(app);
=======
ilRestIdentity(app);
ilRestUsers(app);
>>>>>>> origin/master

app.use(errorHandler);

export default app;
