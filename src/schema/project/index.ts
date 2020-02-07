import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Project {
    id: ID
    name: String
    image: String
  }

  input ProjectInput {
    name: String
    image: String
  }

  extend type Query {
    projects(first: Int, after: ID): [Project]
  }

  extend type Mutation {
    addProject(input: ProjectInput!): Project
    removeProject(input: ID!): Project
    updateProject(input: ProjectInput!): Project
  }
`;

export const resolvers = {
  Query: {
    projects: (_, { first, after }, { dataSources }) =>
      dataSources.project.getProjects({ first, after }),
  },
  Mutation: {
    addProject: (_, { input }, { dataSources }) =>
      dataSources.project.addProject(input),
    removeProject: (_, { input }, { dataSources }) =>
      dataSources.project.removeProject(input),
    updateProject: (_, { input }, { dataSources }) =>
      dataSources.project.updateProject(input),
  },
};
