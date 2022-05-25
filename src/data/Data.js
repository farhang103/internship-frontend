const _ = require("underscore");
const Candle = require("../models/Candle");
const convertDate = require("../helpers/convertDate");
const isUpCandle = require("../helpers/isUpCandle");
const mongoose = require("mongoose");
const fourKCandles = require("../helpers/fourKCandles");

const data = async (pariData) => {
  Candle.collection.deleteMany();
  const pair = pariData;
  const interval = "1h";
  const ticker = await fourKCandles(pair);
  const myList = _.map(_.pairs(ticker), function async(ticker) {
    return {
      time: ticker[1][0],
      open: ticker[1][1],
      high: ticker[1][2],
      low: ticker[1][3],
      close: ticker[1][4],
      volume: ticker[1][5],
    };
  });
  for (let i = 0; i < myList.length; i++) {
    const time = convertDate(myList[i].time);
    const open = myList[i].open;
    const high = myList[i].high;
    const low = myList[i].low;
    const close = myList[i].close;
    const volume = myList[i].volume;
    const is_up_candle = isUpCandle(open, close);
    const candle_id = new mongoose.Types.ObjectId();

    const candle = new Candle({
      candle_id,
      pair,
      time,
      open,
      high,
      low,
      close,
      interval,
      volume,
      is_up_candle,
    });
    candle.save();
  }
  console.log(`Got all data for ${pariData}`);
};

module.exports = data;
