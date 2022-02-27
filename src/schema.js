const { gql } = require("apollo-server-express");
const Candlestick = require('./candlestickModel');

const typeDefs = gql `
    type Candlestick {
        candleId: ID!
        pair: String!
        startTime: String!
        endTime: String!
        open: Float!
        high: Float
        low: Float
        close: Float
        interval: String!
        volume: Float
        isUpCandle: Boolean
    }

    type Query {
        getCandles: [Candlestick]!
    }
`;

const resolvers = {
    Query: {
        async getCandles(parent, args, ctx, info) {
            const allCandles = await Candlestick.aggregate([{
                '$project': {
                    'candleId': '$candle_id', 
                    'pair': '$pair',
                    'startTime': '$start_time',
                    'endTime': '$end_time', 
                    'open': '$open', 
                    'high': '$high',
                    'low': '$low',
                    'close': '$close',
                    'interval': '$interval',
                    'volume': '$volume',
                    'isUpCandle': '$is_up_candle'
                }
            }])

            return allCandles
        }
    }
};

const schema = { typeDefs, resolvers };

module.exports = { schema };
