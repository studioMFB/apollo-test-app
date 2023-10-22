// 1. Import the required packages
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './../../graphql/typeDefs';
import { resolvers } from './../../graphql/resolvers';

// 2. Initialize an Express application
const app = express();

// 3. Create an Apollo server with your schema and resolvers
const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    // Tell Express to attach GraphQL functionality to the server.
    // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
}) as any;

// 4. Apply the Apollo GraphQL middleware and set the path
apolloServer.applyMiddleware({ app, path: '/api/graphql' });
   // Start the GraphQL server.
//    await server.start();
//    server.applyMiddleware({ app });

// 5. Set up your server to listen on a specific port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
});






function ApolloServerPluginDrainHttpServer(arg0: { httpServer: any; }): import("apollo-server-core").PluginDefinition {
    throw new Error('Function not implemented.');
}

