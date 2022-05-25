const isUpCandle = (openPrice, closePrice) => {
  let upCandle = false;
  if (openPrice > closePrice) {
    upCandle = true;
    return upCandle;
  }
  return upCandle;
};

module.exports = isUpCandle;
