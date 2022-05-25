const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Candlestick {
    candle_id: ID!
    time: String!
    pair: String!
    open: Float!
    high: Float!
    low: Float!
    close: Float!
    interval: String!
    volume: Float!
    is_up_candle: Boolean!
  }

  type Query {
    getBTC(pair: String!): [Candlestick]!
    getBNB(pair: String!): [Candlestick]!
  }
`;

module.exports = { typeDefs };
