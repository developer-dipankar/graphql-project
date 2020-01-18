const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
const app = Express();
require('dotenv').config()

Mongoose.connect(process.env.MONGO_CONN,
    { useNewUrlParser: true , useUnifiedTopology: true}
);

const {graphQLSchema} = require("./graphqlSchema");

app.use("/graphql-dev", ExpressGraphQL({
    schema: graphQLSchema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Listening at :http://localhost:3000...");
});