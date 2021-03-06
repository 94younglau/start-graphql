const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin request
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://<userName>:<userPassword>@ds111050.mlab.com:11050/<databaseName>');
mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('now listening for request on port 4000');
});
