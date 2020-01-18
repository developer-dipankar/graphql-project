const {GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull} = require("graphql");
const {UserList, UserDetails} = require('./graphQLSchema/UserType');
const {BlogList, findBlog} = require('./graphQLSchema/BlogType');

const graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            users: UserList,
            user: UserDetails,
            blogs: BlogList,
            blog: findBlog
        }
    })
});


module.exports = {graphQLSchema};