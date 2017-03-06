# README #

Basic ES6 CURD & Google, Facebook authentication.

### How do I get set up? ###

Export following environment variables that are required.

```
export ENV=<development, test, production>
export ONGODB_URI=<Put your mongodb uri here>
export SERVER_PORT=<Port>
export ENC_SALT=<random string created by crypto.randomBytes()>
export ENC_ALGO=<algorithm like sha256>
export JWT_SECRET=<random string recommended to create with crypto.randomBytes()>
export JWT_ALGO=<algorth like HS256>
export JWT_EXPIRES_IN=<number of seconds or string formate that is supported by ms module like `7d`>
```

There are plenty of methods to export these environment variables, on of the simple method is as follows,


### Run Application

```
git clone <repo-url>
cd es6-basic-project
npm install
npm start
```


### Run Tests
```
cd es6-basic-project
npm test
```

If you want to run tests for a particular module for example `module-crypto`,
 ```
 mocha app/module-crypto --opts app/test/mocha.opts
 ```
If `mocha` command fails. Please install it globally with `npm install mocha -g`.
