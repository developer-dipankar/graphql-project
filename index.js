const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
const app = Express();

Mongoose.connect("mongodb://localhost/testgraphql");

const {graphQLSchema} = require("./graphqlSchema");

app.use("/graphql-dev", ExpressGraphQL({
    schema: graphQLSchema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Listening at :3000...");
});