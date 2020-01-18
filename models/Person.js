const Mongoose = require("mongoose");
const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");

const Person = Mongoose.model("person", {
    firstname: String,
    lastname: String
});



// var per = new Person({firstname: "Dipankar", lastname: "Naskar"});
// per.save((err, res) => {
//     console.log(err, res);
// })

// Person.find({}, (err, docs) => {
//     console.log(err, docs);
// })

const PersonType = new GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString }
    }
});

module.exports = {Person, PersonType};