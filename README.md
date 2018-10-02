# blockdj-company-api

Requires config file called config/index.js

Layout of file as follows...

```
const ENV = process.env.NODE_ENV || 'development';

const config = {
	development: {
		DB_URL: '*******URL TO DEV MONGO********',
        PORT: 9090,
	},
	test: {
		DB_URL: '******URL TO TEST MONGO********',
    },
    production: {
        DB_URL: '******URL TO PRODUCTION MONGO******'
    }
} 

module.exports = config[ENV];
```