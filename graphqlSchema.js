const {Person, PersonType} = require("./models/Person");
const {GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull} = require("graphql");


const graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            people: {
                type: GraphQLList(PersonType),
                resolve: (root, args, context, info) => {
                    return Person.find().exec();
                }
            },
            person: {
                type: PersonType,
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    return Person.findById(args.id).exec();
                }
            }
        }
    })
});


module.exports = {graphQLSchema};