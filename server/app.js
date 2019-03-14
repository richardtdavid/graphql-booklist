const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// allow cross-origin requests
app.use(cors())

// connect to mlab database
mongoose.connect('<database paths goes here>');
mongoose.connection.once('open', () => {
    console.log('connected to databse');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


const port = 4000;
app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});