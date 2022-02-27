const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const connectMongoDB = require("./src/dbConnector");
const { schema } = require("./src/schema");

const app = express();

connectMongoDB.connectMongoDB();

async function startServer() {
    const server = new ApolloServer({ typeDefs: schema.typeDefs, resolvers: schema.resolvers })
    await server.start()
    server.applyMiddleware({ app })
}

startServer();


app.listen({ port: "4000" }, () => {
    console.log("Server ready at http://localhost:4000/graphql/")
});
