import { ApolloServer } from '@apollo/server';
// import {startStandaloneServer} from '@apollo/server/standalone';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4'

import express from 'express';
import cors from 'cors'

import { readFile } from 'node:fs/promises';
const app = express();
app.use(cors(), express.json())

const typeDefs = await readFile('./schema.graphql','utf-8');
import { resolvers } from './resolvers.js';

const apolloServer = new ApolloServer({typeDefs,resolvers});
await apolloServer.start();

app.use('/graphql', apolloMiddleware(apolloServer))


app.listen({port: 9000}, () => {
    console.log('app is running 9000')
})


// const {url} = await startStandaloneServer(server, {listen: {port: 9000}});
// console.log(`server is running : ${url}`);