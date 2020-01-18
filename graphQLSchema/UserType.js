const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull} = require("graphql");
const {Users} = require('./../models/Users')

const UserType = new GraphQLObjectType({
    name: 'users', 
    fields: () => ({
        id: {type: GraphQLID},
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        blogs: require('./BlogType').BlogList
    })
})


const UserList = {
    type: GraphQLList(UserType),
    resolve: (root, args, context, info) => {
        return Users.find().exec();
    }
}

const UserDetails = {
    type: UserType,
    args: {
        id: {type: GraphQLID}
    },
    resolve: (root, args, context, info) => {
        // console.log('UserDetails', root, args);
        if (root && root.author) {
            return Users.findById(root.author);
        } else if(args.id) {
            return Users.findById(args.id);
        }
    }
}

module.exports = {UserList, UserType, UserDetails};
