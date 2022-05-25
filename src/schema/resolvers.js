const Candle = require("../models/Candle");

const resolvers = {
  Query: {
    getBTC: async (_, args) => {
      return await Candle.find(args).sort({ time: -1 });
    },
    getBNB: async (_, args) => {
      return await Candle.find(args).sort({ time: -1 });
    },
  },
};

module.exports = { resolvers };
