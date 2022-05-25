const ccxt = require("ccxt");
const convertDate = require("./convertDate");

const fourKCandles = async (pair) => {
  const binance = new ccxt.binance();
  const earlist_time = binance.milliseconds();
  const fourK_hours_in_ms = 14_400_000_000;
  const less_than_one_hour_in_ms = 3_599_000;
  let since = earlist_time - fourK_hours_in_ms;
  let all_candles = [];
  while (true) {
    // Fetching the data
    let ohlcv = await binance.fetchOHLCV(pair, "1h", since, 1000);
    all_candles.push(ohlcv);

    let current_since = earlist_time - ohlcv[ohlcv.length - 1][0];
    since = ohlcv[ohlcv.length - 1][0] + 3_600_000;
    if (current_since <= less_than_one_hour_in_ms) {
      // Merging all the candles into one array
      var mergedData = [].concat.apply([], all_candles);
      break;
    }
  }
  return mergedData;
};

module.exports = fourKCandles;
