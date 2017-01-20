import express              from 'express';
import cors                 from 'cors';
import morgan               from 'morgan';
import bodyParser           from 'body-parser';
import {errorHandler}       from './module-middlewares';

import ilRestIdentity       from './rest-identity';
import ilRestUsers          from './rest-users';
import ilRestFileUpload     from './rest-fileupload';


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

ilRestIdentity(app);
ilRestUsers(app);
ilRestFileUpload(app);

app.use(errorHandler);

export default app;
