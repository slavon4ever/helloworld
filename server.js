'use strict';

const app = require('express')();
const promBundle = require('express-prom-bundle');
const bundle = promBundle({includeMethod: true});

app.use(bundle);

const g = new bundle.promClient.Gauge({name: 'g', help: 'g help'});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
    g.inc(Math.floor(Math.random() * Math.floor(100)))
});

app.listen(8080);
