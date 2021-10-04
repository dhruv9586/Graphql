import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from 'graphql';
import userData from '../mock.json';
import { UserType } from './types';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return userData;
            }
        },
        getUserById: {
            type: UserType,
            args: {
                userId: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const { userId } = args;
                return userData.find((user) => user.id === userId);
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                const { firstName, lastName, email, password } = args;
                userData.push({
                    id: userData.length,
                    firstName,
                    lastName,
                    email,
                    password
                });
                return args;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

export default schema;
