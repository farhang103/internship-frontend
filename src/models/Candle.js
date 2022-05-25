const mongoose = require("mongoose");

const CandleSchema = new mongoose.Schema({
  candle_id: { type: String, index: { unique: true, dropDups: true } },
  pair: { type: String },
  time: { type: String },
  open: { type: Number },
  high: { type: Number },
  low: { type: Number },
  close: { type: Number },
  interval: { type: String },
  volume: { type: Number },
  is_up_candle: { type: Boolean },
});

const Candle = mongoose.model("Candle", CandleSchema);

module.exports = Candle;
