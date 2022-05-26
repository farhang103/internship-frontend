const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectMongoDB = require("./src/config/dbConnector");
const { typeDefs } = require("./src/schema/type-defs");
const { resolvers } = require("./src/schema/resolvers");
const Data = require("./src/data/Data");

const startSever = async () => {
  const app = express();
  connectMongoDB.connectMongoDB();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });
  console.log("Mongoose is connected...");

  await Data("BTC/USDT");
  await Data("BNB/BTC");

  app.listen(4000, () => console.log("server is running on port 4000"));
};

startSever();
