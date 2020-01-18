const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull} = require("graphql");
const {Blogs} = require('./../models/Blogs')

const BlogType = new GraphQLObjectType({
    name: 'blogs', 
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        author: require('./UserType').UserDetails
    })
})

const BlogList = {
    type: new GraphQLList(BlogType),
    resolve: (root, args, context, info) => {
        console.log('BlogList', root, args);
        if (root && root.author) {
            return Blogs.find({author: root.author}).exec();
        }
        return Blogs.find().exec();
    }
}

const findBlog = {
    type: BlogType,
    args: {
        id: {type: GraphQLID},
    },
    resolve: (root, args, context, info) => {
        return Blogs.findById(args.id);
    }
}

module.exports = {BlogType, BlogList, findBlog};
