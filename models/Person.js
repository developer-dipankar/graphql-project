const Mongoose = require("mongoose");
const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");

const Person = Mongoose.model("person", {
    firstname: String,
    lastname: String
});

const PersonType = new GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString }
    }
});

module.exports = {Person, PersonType};