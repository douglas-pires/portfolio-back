import express from 'express';
import dotenv from 'dotenv';
import mongoConnection from './db';
import { ApolloServer } from 'apollo-server-express';
import dataSources from './data-sources';
import { projects } from './routes';
import cors from 'cors';

const { typeDefs, resolvers } = require('./hooks/schema');

dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`,
});
mongoConnection();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/', projects);

const server = new ApolloServer({
  playground: true,
  introspection: true,
  typeDefs,
  resolvers,
  dataSources,
});

server.applyMiddleware({ app });

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
